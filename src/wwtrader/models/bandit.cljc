(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.bandit
  "Implementation for the bandit enemy"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.target :as t]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.action :as action]
            [wwtrader.models.enemy :as enemy]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.game :as game]))

(defn- resolve-destination
  "Finds the next coordinate to move to"
  [game trader elem]
  {:post [(not (nil? %))]}
  (let [possible (game/possible-destinations game elem)
        sorted (coord/sort-by-distance (e/coord trader) possible)
        lucky (first sorted)]
    (if lucky
      lucky
      (e/coord elem))))

(defn move
  "Moves the bandit"
  [game trader elem]
  {:success true
   :game (game/swap-element game elem (-> elem
                                          (assoc :move? false)
                                          (assoc :attacked? false)
                                          (e/coord (resolve-destination game trader elem))))})

(defn attack
  "Attacks the target"
  [game target elem]
  {:success true
   :attacked? true
   :game (-> game
             (game/swap-element elem (assoc elem :attacked? true))
             (->> (t/take-damage target elem)))})

(defn attacked?
  "True if the bandid has attacked on this turn"
  [bandit]
  (:attacked? bandit))

(defn process-if-alive
  "Verifies that the element is dead and removes it from the game. Calls
  given process-fn otherwise"
  [elem result process-fn]
  (if (:dead? elem)
    {:success true :game (game/purge (:game result) elem)}
    (process-fn elem result)))

(defn- process-turn
  "Processes the actual turn logic"
  [elem result]
  (let [game (:game result)
        target (game/find-target game)]
    (if (:move? elem)
      (if (coord/adjacent-perpendicular? (e/coord target) (e/coord elem))
        (attack game target elem)
        (move game target elem))
      {:success true :game (game/swap-element game
                                              elem
                                              (-> (assoc elem :move? true)
                                                  (assoc :attacked? false)))})))

(defn- process
  "Processes the turn from given actions"
  [elem result]
  (process-if-alive elem result process-turn))

(defn add-damage
  "Adds damage to the bandit"
  [bandit game damage]
  (game/swap-element game bandit (assoc bandit :dead? true :attacked? true)))

(defrecord Bandit [id coord energy move? attacked?]
  enemy/Enemy
  (add-damage [enemy game damage] (add-damage enemy game damage))
  e/Element
  (id [elem] id)
  (priority [elem] 100)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game)))

(def bandit-type Bandit)

(defn create
  "Creates a new Bandit"
  [coord]
  (->Bandit (gensym) coord 100 false false))

