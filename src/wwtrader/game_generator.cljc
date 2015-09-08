(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.game-generator
  "Generates random games"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.market :as market]
            [wwtrader.models.resource-generator :as resource-generator]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defn random
  "Generates a random game"
  []
  (-> (game/create 8 8)
      (game/register (market/create coord/c5-1))
      (game/register (resource-generator/create coord/c7-7))
      (game/register (trader/create coord/c2-2))))
