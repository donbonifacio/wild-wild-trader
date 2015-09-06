(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.game-generator
  "Generates random games"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defn random
  "Generates a random game"
  []
  (-> (game/create 8 8)
      (game/register (trader/create coord/c2-2))))
