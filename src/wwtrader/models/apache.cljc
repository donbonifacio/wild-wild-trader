(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.apache
  "Implementation for the apache enemy"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.action :as action]
            [wwtrader.models.enemy :as enemy]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.bandit :as bandit]
            [wwtrader.models.game :as game]))

(defn attacked?
  "True if the bandid has attacked on this turn"
  [apache]
  (:attacked? apache))

(defn- process-turn
  "Processes the turn from given actions"
  [elem result]
  (if (:attacked? elem)
    {:success true :game (game/swap-element (:game result) elem (assoc elem :attacked? false))}
    (let [game (:game result)
          target (game/find-target game)]
      (if (coord/adjacent-perpendicular? (e/coord target) (e/coord elem))
        (bandit/attack game target elem)
        (bandit/move game target elem)))))

(defn- process
  "Processes the turn from given actions"
  [elem result]
  (bandit/process-if-alive elem result process-turn))

(defn add-damage
  "Adds damage to this apache"
  [apache game damage]
  (let [new-apache (-> (update apache :energy dec)
                       (assoc :attacked? true))]
    (if (>= 0 (:energy new-apache))
      (game/swap-element game apache (assoc new-apache :dead? true))
      (game/swap-element game apache new-apache))))

(defrecord Apache [id coord energy attacked?]
  enemy/Enemy
  (add-damage [enemy game damage] (add-damage enemy game damage))
  e/Element
  (id [elem] id)
  (priority [elem] 100)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game)))

(def apache-type Apache)

(defn create
  "Creates a new Desperado"
  [coord]
  (->Apache (gensym) coord 3 false))

