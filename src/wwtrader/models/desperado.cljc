(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.desperado
  "Implementation for the desperado enemy"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.action :as action]
            [wwtrader.models.enemy :as enemy]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.bandit :as bandit]
            [wwtrader.models.game :as game]))

(defn attacked?
  "True if the bandid has attacked on this turn"
  [desperado]
  (:attacked? desperado))

(defn- process
  "Processes the turn from given actions"
  [elem result]
  (let [game (:game result)
        trader (first (game/find-elements game trader/elem-type))]
    (if (coord/adjacent-perpendicular? (e/coord trader) (e/coord elem))
      (bandit/attack game trader elem)
      (bandit/move game trader elem))))

(defrecord Desperado [id coord energy attacked?]
  enemy/Enemy
  (add-damage [enemy game damage] (bandit/add-damage enemy game damage))
  e/Element
  (id [elem] id)
  (priority [elem] 100)
  (target-value [elem] 0)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game)))

(def desperado-type Desperado)

(defn create
  "Creates a new Desperado"
  [coord]
  (->Desperado (gensym) coord 100 false))

