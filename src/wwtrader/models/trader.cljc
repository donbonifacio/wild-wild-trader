(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.trader
  "Represents an entity that has a cargo and moves things from places to places"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.action :as action]
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

(defn add-damage
  "Adds damage to the trader"
  [trader taken-energy]
  (-> (take-energy trader taken-energy)
      (update :damage-taken + taken-energy)))

(defn damage-taken
  "Damage taken on the turn"
  [trader]
  (:damage-taken trader))

(defn- move-trader
  "Processes movement for the trader"
  [trader new-coord]
  (-> trader
      (take-energy 2)
      (e/coord new-coord)))

(defn- cleanup
  "Resets trader info"
  [result elem]
    (let [game (:game result)
          elem (game/at game (e/coord elem))
          trader (assoc elem :damage-daken 0)]
      (if elem
        (assoc result :game (-> game
                                (game/swap-element elem trader)))
        result)))

(defmulti process-action (fn [action elem game] (:action-type action)))

(defn- process
  "Processes the turn from given actions"
  [elem result]
  (let [game (:game result)]
    (-> (if-let [action (game/player-action game)]
          (process-action action elem game)
          {:success true :idle true :game game})
        (cleanup elem))))

(defrecord Trader [id coord hitpoints cargo cargo-limit money energy skills damage-taken]
  e/Element
  (id [elem] id)
  (priority [elem] 0)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game)))

(def elem-type Trader)

(defn- default-skills
  "Configures the default skills"
  []
  {:take-supplies action/take-supplies})

(defn create
  "Creates a new Trader"
  [coord]
  (->Trader (gensym) coord 3 [] 3 5 100 (default-skills) 0))

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

(defn remove-cargo-once
  "Removes a single cargo item"
  [trader item]
  (let [[n m] (split-with (partial not= item) (cargo trader))
        new-cargo (concat n (rest m))]
    (assoc trader :cargo new-cargo)))

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

(defn skills
  "Gets the possible skills for this trader"
  [trader]
  (:skills trader))

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

(defmethod process-action :take-supplies [action elem game]
  (cond
    (not (some #{"supplies"} (cargo elem)))
      {:success false :error :no-supplies :game game}
    :else
      {:success true :game (game/swap-element game elem (-> (energy elem 100)
                                                            (remove-cargo-once "supplies")))}))

