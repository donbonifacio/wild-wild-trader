(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.game-loop
  "Runs the game and all the elements, turn by turn, until the
  game is over"
  (:require [wwtrader.models.game :as game]
            [wwtrader.models.element :as element]))

(defn- element-turn
  "Calls element turn"
  [game element]
  (element/process-turn element game))

(defn process-turn
  "Processes a single turn in the game"
  [game]
  (let [elements (game/elements game)]
    (reduce element-turn game elements))
  ;get elements
    ;>! {:game game}
    ;<! wait result
    )
