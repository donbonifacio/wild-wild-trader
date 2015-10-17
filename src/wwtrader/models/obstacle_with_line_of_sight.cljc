(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.obstacle-with-line-of-sight
  "Don't allow move but allows fire through"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defrecord ObstacleWithLineOfSight [id coord visual can-see-over?]
  e/Element
  (id [elem] id)
  (priority [elem] 100000)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem result] {:success true :game (:game result)})
  (interact-with [elem other game] {:success false :game game}))

(defn create
  "Creates a new ObstacleWithLineOfSight"
  ([coord]
   (create coord :water))
  ([coord visual]
   (->ObstacleWithLineOfSight (gensym) coord visual true)))
