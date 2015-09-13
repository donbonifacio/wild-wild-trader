(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.trader
  "Represents an entity that has a cargo and moves things from places to places"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defn- interact
  "Interacts with another element"
  [game elem new-coord]
  (-> (game/at game new-coord)
      (e/interact-with elem game)))

(defn energy
  "Handles the trader's energy"
  ([trader]
   (:energy trader))
  ([trader new-energy]
   (assoc trader :energy new-energy)))

(defn take-energy
  "Removes energy from the trader"
  [trader taken-energy]
  (assoc trader :energy (- (energy trader) taken-energy)))

(defn- move-trader
  "Processes movement for the trader"
  [trader new-coord]
  (-> trader
      (take-energy 2)
      (e/coord new-coord)))

(defmulti process-action (fn [action elem game] (:action-type action)))

(defmethod process-action :move [action elem game]
  (let [current-coord (e/coord elem)
        new-coord (coord/offset current-coord (:args action))]
    (cond
      (<= (energy elem) 0)
        {:success false :error :no-energy :game game}
      (game/invalid-destination? game new-coord)
        {:success false :error :invalid-destination :game game}
      (game/at game new-coord)
        (interact game elem new-coord)
      :else
        {:success true :game (game/swap-element game elem (move-trader elem new-coord))})))

(defn- process
  "Processes the turn from given actions"
  [elem result]
  (let [game (:game result)]
    (process-action (game/player-action game) elem game)))

(defrecord Trader [id coord hitpoints cargo cargo-limit money energy]
  e/Element
  (id [elem] id)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game)))

(defn create
  "Creates a new Trader"
  [coord]
  (->Trader (gensym) coord 3 [] 3 5 100))

(defn cargo
  "Gets the trader's cargo"
  [trader]
  (:cargo trader))

(defn cargo-space-available?
  "True if this trader has space in cargo"
  [trader]
  (> (:cargo-limit trader) (count (:cargo trader))))

(defn add-cargo
  "Adds cargo to the trader"
  [trader cargo-item]
  (assoc trader :cargo (conj (:cargo trader) cargo-item)))

(defn remove-cargo
  "Removes cargo (all entries for the given item)"
  [trader item]
  (assoc trader :cargo (remove #(= % item) (:cargo trader))))

(defn money
  "Handles the trader's money"
  [trader]
  (:money trader))

(defn take-money
  "Takes money from trader"
  [trader money]
  (assoc trader :money (- (:money trader) money)))

(defn give-money
  "Gives money from trader"
  [trader money]
  (assoc trader :money (+ (:money trader) money)))

(defn remove-items-for-money
  "Removes items and stores money"
  [trader item money]
  (-> (remove-cargo trader item)
      (give-money money)))

