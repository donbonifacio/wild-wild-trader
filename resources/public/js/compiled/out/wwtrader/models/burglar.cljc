(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.burglar
  "Implementation for the burglar enemy"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.target :as t]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.action :as action]
            [wwtrader.models.enemy :as enemy]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.bandit :as bandit]
            [wwtrader.models.apache :as apache]
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
             (->> (t/stolen trader elem)))})

(defn- process-turn
  "Processes the turn from given actions"
  [elem result]
  (if (:attacked? elem)
    {:success true :game (game/swap-element (:game result) elem (assoc elem :attacked? false))}
    (let [game (:game result)
          target (game/find-target game)]
      (if (coord/adjacent-perpendicular? (e/coord target) (e/coord elem))
        (attack game target elem)
        (bandit/move game target elem)))))

(defn- process
  "Processes the turn from given actions"
  [elem result]
  (bandit/process-if-alive elem result process-turn))

(defrecord Burglar [id coord energy attacked?]
  enemy/Enemy
  (add-damage [enemy game damage] (apache/add-damage enemy game damage))
  e/Element
  (id [elem] id)
  (priority [elem] 99)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game)))

(def burglar-type Burglar)

(defn create
  "Creates a new burglar"
  [coord]
  (->Burglar (gensym) coord 2 false))

