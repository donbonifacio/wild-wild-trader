(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.game-loop
  "Runs the game and all the elements, turn by turn, until the
  game is over"
  (:require [wwtrader.models.game :as game]
            [wwtrader.models.element :as element]))

(defn- element-turn
  "Calls element turn"
  [result element]
  (let [fresh-element (game/at (:game result) (element/coord element))
        result (element/process-turn fresh-element result)]
    (if (= false (:success result))
      (reduced result)
      result)))

(defn- priority-sorter
  "Sorts elements by priority"
  [element]
  (element/priority element))

(defn process-turn
  "Processes a single turn in the game"
  [game]
  (let [elements (sort-by priority-sorter (game/elements game))]
    (reduce element-turn {:game game} elements)))

(defn process-turns
  "Processes n turns"
  [game n]
  (let [result (process-turn game)]
    (if (or (<= n 1) (not (:success result)))
      result
      (recur (:game result) (- n 1)))))
