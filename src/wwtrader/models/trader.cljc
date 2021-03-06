(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.trader
  "Represents an entity that has a cargo and moves things from places to places"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.target :as t]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.action :as action]
            [wwtrader.models.enemy :as enemy]
            [wwtrader.models.decoy :as decoy]
            [wwtrader.models.game :as game]))

(defmulti process-action (fn [action elem game] (:action-type action)))
(defmulti process-move-action (fn [action elem game previous-coord] (:action-type action)))

(defn- interact
  "Interacts with another element"
  [game elem new-coord]
  (-> (game/at game new-coord)
      (e/interact-with elem game)))

(defn hitpoints
  "Handles the trader's hitpoints"
  ([trader]
   (:hitpoints trader))
  ([trader new-hitpoints]
   (assoc trader :hitpoints new-hitpoints)))

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
  [trader]
  (-> trader
      (update :hitpoints dec)
      (update :damage-taken inc)))

(defn damage-taken
  "Damage taken on the turn"
  [trader]
  (:damage-taken trader))

(defn on-move-action
  "Sets an action that will be run when the trader moves"
  ([trader]
   (:on-move-action trader))
  ([trader action]
   (assoc trader :on-move-action action)))

(defn clear-on-move-action
  "Removes on-move-action"
  [trader]
  (assoc trader :on-move-action nil))

(defn- process-on-move-action
  "Checks if the trader has an on-move-action and runs it"
  [game trader previous-coord]
  (if-let [action (on-move-action trader)]
    (process-move-action action trader game previous-coord)
    game))

(defn- move-trader
  "Processes movement for the trader"
  [game trader new-coord]
  (let [new-trader (e/coord trader new-coord)]
    (-> (game/swap-element game trader new-trader)
        (process-on-move-action new-trader (e/coord trader)))))

(defn- cleanup
  "Resets trader info"
  [result elem]
  (let [game (:game result)
        elem (game/at game (:pos result))
        trader (-> elem
                   (assoc :damage-taken 0)
                   (assoc :attacked? false))]
    (if elem
      (assoc result :game (-> game
                              (game/swap-element elem trader)))
      result)))

(defn- process
  "Processes the turn from given actions"
  [elem result]
  (let [game (:game result)]
    (-> (if-let [action (game/player-action game)]
          (process-action action elem game)
          {:success true :idle true :game game})
        (cleanup elem))))

(declare clear-cargo)

(defrecord Trader [id coord hitpoints cargo cargo-limit money energy skills damage-taken attacked? on-move-action]
  t/Target
  (target-value [elem] 1)
  (take-damage [elem other game]
    (game/swap-element game elem (add-damage elem)))
  (stolen [elem thief game]
    (game/swap-element game elem (clear-cargo elem)))
  e/Element
  (id [elem] id)
  (priority [elem] 1)
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
  (->Trader (gensym) coord 3 [] 9 5 100 (default-skills) 0 false nil))

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

(defn clear-cargo
  "Removes all cargo from trader"
  [trader]
  (assoc trader :cargo []))

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

(defn add-skill
  "Registers a new skill"
  [trader skill]
  (update-in trader [:skills] assoc (:action-type skill) skill))

(defn opaque?
  "True if the trader can't see through the element"
  [elem]
  (not (:can-see-over? elem)))

(defn not-in-camera?
  "True if the given coordinate is not on the game's current camera"
  [game coord]
  (not (game/in-camera? game coord)))

(defn enemy-in-range
  "Gets an enemy in range to attack, if any"
  [action elem game]
  (let [offset (:args action)
        current-coord (e/coord elem)]
    (loop [game game
           current-coord (coord/offset current-coord offset)]
      (let [current-element (game/at game current-coord)]
        (cond
          (not-in-camera? game current-coord)
            nil
          (enemy/enemy? current-element)
            current-element
          (and current-element (opaque? current-element))
            nil
          :else
            (let [next-coord (coord/offset current-coord offset)]
              (when-not (game/invalid-destination? game next-coord)
                (recur game next-coord))))))))

(defn- attack
  "Attackes another element"
  [game elem enemy]
  {:success true
   :attacked? true
   :game (-> (enemy/add-damage enemy game 100)
             (game/swap-element elem (assoc elem :attacked? true)))})

(defn attacked?
  "True if the trader attacked on this turn"
  [trader]
  (:attacked? trader))

(defmethod process-action :move [action elem game]
  (let [current-coord (e/coord elem)
        enemy (enemy-in-range action elem game)
        new-coord (coord/offset current-coord (:args action))]
    (cond
      (<= (:hitpoints elem) 0)
        {:success false :error :game-over :game game :pos current-coord}
      (game/invalid-destination? game new-coord)
        {:success false :error :invalid-destination :game game :pos current-coord}
      enemy
        (attack game elem enemy)
      (game/at game new-coord)
        (assoc (interact game elem new-coord) :pos current-coord)
      :else
        {:success true
         :pos new-coord
         :game (move-trader game elem new-coord)})))

(defmethod process-action :take-supplies [action elem game]
  (cond
    (not (some #{"supplies"} (cargo elem)))
      {:success false :error :no-supplies :game game}
    :else
      {:success true :game (game/swap-element game elem (-> (energy elem 100)
                                                            (remove-cargo-once "supplies")))}))

(defn run-action
  "Runs an action"
  [action trader game f]
  (let [required-energy (get-in action [:args :energy])]
    (cond
      (>= 0 (hitpoints trader))
        {:success false :error :dead :game game}
      (> required-energy (energy trader))
        {:success false :error :no-energy :game game}
      :else
        (f (take-energy trader required-energy)))))

(defn verify-action
  "Verify that an action can be queued"
  [action trader game f]
  (let [required-energy (get-in action [:args :energy])]
    (cond
      (>= 0 (hitpoints trader))
        {:success false :error :dead :game game}
      (> required-energy (energy trader))
        {:success false :error :no-energy :game game}
      :else
        (f trader))))

(defmethod process-action :heal [action trader game]
  (run-action action trader game (fn [trader]
    {:success true :game (game/swap-element game trader (-> trader
                                                            (hitpoints 3)))})))

(defmethod process-action :sleep [action trader game]
  (run-action action trader game (fn [new-trader]
    {:success true :game (game/swap-element game trader new-trader)})))

(defmethod process-action :decoy [action trader game]
  (verify-action action trader game (fn [new-trader]
    {:success false
     :message :on-move-action-stored
     :game (game/swap-element game trader (-> new-trader
                                              (on-move-action action)))})))

(defmethod process-move-action :decoy [action trader game previous-coord]
  (run-action action trader game (fn [new-trader]
    (-> game
        (game/swap-element trader (clear-on-move-action new-trader))
        (game/register (decoy/create previous-coord))))))
