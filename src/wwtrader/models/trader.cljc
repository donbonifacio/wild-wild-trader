(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.trader
  "Represents an entity that has a cargo and moves things from places to places"
  (:require [wwtrader.models.element :as e]))

(defn- process
  "Processes the turn from given actions"
  [elem game]
  game)

(defrecord Trader [id hitpoints cargo]
  e/Element
  (id [elem] id)
  (process-turn [elem game] (process elem game)))

(defn create
  "Creates a new Trader"
  []
  (->Trader (gensym) 3 []))
