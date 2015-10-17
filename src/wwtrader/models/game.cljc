(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.game
  "Represents a complete game with all the associated data"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.target :as t]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.county :as county]))

(defrecord Game [county player-action turn])

(defn create
  "Creates a new game"
  ([]
   (create 3 3))
  ([w h]
   (map->Game {:county (county/create w h)
               :turn 0})))

(defn inc-turn
  "Increments the turn"
  [game]
  (update game :turn inc))

(defn turn
  "Gets the game's current turn"
  [game]
  (:turn game))

(defn county
  "Gets the county"
  [game]
  (:county game))

(defn elements
  "Gets all elements on the map"
  [game]
  (vals (county/elements (:county game))))

(defn register
  "Registers a new element on a given coordinate"
  [game elem]
  (let [current-county (:county game)
        coord (e/coord elem)]
    (assoc game :county (county/register current-county coord elem))))

(defn purge
  "Removes the given element from the game"
  [game elem]
  (let [current-county (:county game)
        coord (e/coord elem)]
    (assoc game :county (county/purge current-county coord elem))))

(defn at
  "Gets the element, if any, at the given coordinate"
  [game coord]
  (-> game
      :county
      :elements
      (get coord)))

(defn player-action
  "Sets the player action on the current game"
  ([game ]
   (:player-action game))
  ([game player-action]
   (assoc game :player-action player-action)))

(defn swap-element
  "Swaps an element for another"
  [game elem new-elem]
  (-> (purge game elem)
      (register new-elem)))

(defn invalid-destination?
  "True if the given coordinate is not possible to move into"
  [game coord]
  (let [x (coord/x coord)
        y (coord/y coord)
        county (county game)
        w (county/width county)
        h (county/height county)]
    (or (< x 0)
        (< y 0)
        (>= x w)
        (>= y h))))

(defn find-elements
  "Finds elements by type"
  [game elem-type]
  (filter #(instance? elem-type %) (elements game)))

(def element-value-sorter (comp - t/target-value))

(defn find-target
  "Finds the current element that all the foes should target"
  [game]
  (->> (elements game)
       (filter #(satisfies? t/Target %))
       (sort-by element-value-sorter)
       (first)))

(defn possible-move?
  "Checks if it's possible to move to the given coordinate"
  [game coord]
  (and (not (invalid-destination? game coord))
       (not (at game coord))))

(defn possible-destinations
  "Gets the possible destinations for a given element"
  [game elem]
  (let [c (e/coord elem)
        possible (-> []
                     (conj (coord/offset c [0 1]))
                     (conj (coord/offset c [1 0]))
                     (conj (coord/offset c [0 -1]))
                     (conj (coord/offset c [-1 0])))]
    (reduce (fn [all curr]
              (if (possible-move? game curr)
                (conj all curr)
                all))
            []
            possible)))

(defn random-empty-coord
  "Gets a coordinate that it's empty"
  [game]
  (let [county (county game)
        w (county/width county)
        h (county/height county)
        lucky (coord/create (rand-int h) (rand-int w))]
    (if (not (at game lucky))
      lucky
      (recur game))))
