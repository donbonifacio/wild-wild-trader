(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.burglar
  "Implementation for the burglar enemy"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.action :as action]
            [wwtrader.models.enemy :as enemy]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.bandit :as bandit]
            [wwtrader.models.game :as game]))

(defn attacked?
  "True if the bandid has attacked on this turn"
  [burglar]
  (:attacked? burglar))

(defn attack
  "Removes all cargo from trader"
  [game trader elem]
  {:success true
   :attacked? true
   :game (-> game
             (game/purge elem)
             (game/swap-element trader (trader/clear-cargo trader)))})


(defn- process
  "Processes the turn from given actions"
  [elem result]
  (let [game (:game result)
        trader (first (game/find-elements game trader/elem-type))]
    (if (coord/adjacent-perpendicular? (e/coord trader) (e/coord elem))
      (attack game trader elem)
      (bandit/move game trader elem))))

(defrecord Burglar [id coord energy attacked?]
  enemy/Enemy
  (add-damage [enemy game damage] (bandit/add-damage enemy game damage))
  e/Element
  (id [elem] id)
  (priority [elem] 99)
  (target-value [elem] 0)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game)))

(def burglar-type Burglar)

(defn create
  "Creates a new burglar"
  [coord]
  (->Burglar (gensym) coord 100 false))

