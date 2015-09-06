(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.game
  "Represents a complete game with all the associated data"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.county :as county]))

(defrecord Game [county player-action])

(defn create
  "Creates a new game"
  ([]
   (create 3 3))
  ([w h]
   (map->Game {:county (county/create w h)})))

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
