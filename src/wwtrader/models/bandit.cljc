(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.bandit
  "Implementation for the bandit enemy"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.action :as action]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.game :as game]))

(defn- interact
  "Interacts with another element"
  [game elem new-coord]
  game)

(defn- resolve-destination
  "Finds the next coordinate to move to"
  [game elem]
  (let [possible (game/possible-destinations game elem)
        trader (first (game/find-elements game trader/elem-type))
        sorted (coord/sort-by-distance (e/coord trader) possible)]
    (first sorted)))

(defn- process
  "Processes the turn from given actions"
  [elem result]
  (let [game (:game result)]
    (if (:move? elem)
      {:success true :game (game/swap-element game elem (-> (assoc elem :move? false)
                                                            (e/coord (resolve-destination game elem))))}
      ;; get possible ajacent coords
      ;; see witch one is closer to trader
      ;; move there
      
      {:success true :game (game/swap-element game elem (assoc elem :move? true))})))

(defrecord Bandit [id coord energy move?]
  e/Element
  (id [elem] id)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game)))

(def bandit-type Bandit)

(defn create
  "Creates a new Bandit"
  [coord]
  (->Bandit (gensym) coord 100 true))

