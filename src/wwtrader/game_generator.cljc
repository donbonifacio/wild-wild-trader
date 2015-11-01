(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.game-generator
  "Generates random games"
  (:require [wwtrader.models.element :as e]
            [wwtrader.camera :as camera]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.god :as god]
            [wwtrader.models.bandit :as bandit]
            [wwtrader.models.market :as market]
            [wwtrader.models.resource-generator :as resource-generator]
            [wwtrader.models.supply-farm :as supply-farm]
            [wwtrader.models.obstacle :as obstacle]
            [wwtrader.models.obstacle-with-line-of-sight :as visibility-obstacle]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defn random
  "Generates a random game"
  []
  (-> (game/create 24 24)
      (camera/set-camera coord/c0-0)
      (game/register (god/create))
      (game/register (visibility-obstacle/create coord/c4-5 :water))
      (game/register (visibility-obstacle/create coord/c5-5 :water))
      (game/register (visibility-obstacle/create coord/c6-5 :water))
      (game/register (obstacle/create coord/c2-3 :mountain))
      (game/register (obstacle/create coord/c2-4 :mountain))
      (game/register (obstacle/create coord/c6-1 :mountain))
      (game/register (market/create coord/c5-1))
      (game/register (supply-farm/create coord/c1-6))
      (game/register (resource-generator/create coord/c7-7))
      (game/register (trader/create coord/c2-2))
      (god/add-random-enemy)))
