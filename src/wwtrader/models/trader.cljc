(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.trader
  "Represents an entity that has a cargo and moves things from places to places"
  (:require [wwtrader.models.element :as e]))

(defrecord Trader [id hitpoints cargo]
  e/Element)

(defn create
  "Creates a new Trader"
  []
  (->Trader (gensym) 3 []))
