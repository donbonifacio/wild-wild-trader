(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.game
  "Represents a complete game with all the associated data"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.county :as county]))

(defrecord Game [county])

(defn create
  "Creates a new game"
  []
  (->Game (county/create 3 3)))

(defn create-small
  "Creates a new small game"
  []
  (->Game (county/create 3 3)))
