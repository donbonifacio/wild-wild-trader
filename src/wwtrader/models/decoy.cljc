(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.decoy
  "Enemies target the decoy"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.target :as t]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defrecord Decoy [id coord visual value]
  t/Target
  (target-value [elem] value)
  (take-damage [elem other game] (game/purge game elem))
  e/Element
  (id [elem] id)
  (priority [elem] 5000)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem result] {:success true :game (:game result)})
  (interact-with [elem other game] {:success true :game game}))

(def elem-type Decoy)

(defn create
  "Creates a new Decoy"
  ([coord]
   (create coord :mountain))
  ([coord visual]
   (->Decoy (gensym) coord visual 10)))