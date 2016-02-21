(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.game-loop
  "Runs the game and all the elements, turn by turn, until the
  game is over"
  (:require [wwtrader.models.game :as game]
            [wwtrader.camera :as camera]
            [wwtrader.models.element :as element]))

(defn- element-turn
  "Calls element turn"
  [result element]
  (if-let [fresh-element (or (game/at (:game result) (element/coord element))
                             element)]
    (let [result (element/process-turn fresh-element result)]
      (if (= false (:success result))
        (reduced result)
        result))
    result))

(defn- priority-sorter
  "Sorts elements by priority"
  [element]
  (element/priority element))

(defn turn-elements
  "Gets the elements to process on the turn, ordered by run priority"
  [game]
  (sort-by priority-sorter (game/elements game)))

(defn process-elements-turn
  "Processes the turn just for the given elements"
  [game elements]
  (reduce element-turn
          {:game game}
          elements))

(defn trader
  "Gets the trader of the current game"
  [game]
  (->> (turn-elements game)
       (take 1)
       first))

(defn process-trader-turn
  "Processes the trader's turn"
  [game]
  (let [elements (turn-elements game)
        trader (take 1 elements)]
    (-> (process-elements-turn game trader)
        (update :game camera/update-game))))

(defn process-cpu-turn
  "Processes the cpu element's turn"
  [game]
  (let [elements (turn-elements game)
        cpu (rest elements)]
    (process-elements-turn game cpu)))

(defn process-turn
  "Processes a single turn in the game"
  [game]
  (process-elements-turn game (turn-elements game)))

(defn process-turns
  "Processes n turns"
  [game n]
  (let [result (process-turn game)]
    (if (or (<= n 1) (not (:success result)))
      result
      (recur (:game result) (- n 1)))))
