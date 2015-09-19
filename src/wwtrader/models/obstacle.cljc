(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.obstacle
  "Sells supplies"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defrecord Obstacle [id coord visual]
  e/Element
  (id [elem] id)
  (priority [elem] 100000)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] {:success true :game game})
  (interact-with [elem other game] {:success true :game game}))

(defn create
  "Creates a new SupplyFarm"
  ([coord]
   (create coord :mountain))
  ([coord visual]
   (->Obstacle (gensym) coord visual)))