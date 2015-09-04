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

(defn elements
  "Gets all elements on the map"
  [game]
  (vals (county/elements (:county game))))

(defn register
  "Registers a new element on a given coordinate"
  [game coord elem]
  (let [current-county (:county game)]
    (assoc game :county (county/register current-county coord elem))))

(defn player-action
  "Sets the player action on the current game"
  [game player-action]
  (assoc game :player-action player-action))
