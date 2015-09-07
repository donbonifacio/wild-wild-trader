(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.market
  "Buys resources"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defn- process
  "Processes the Market's turn"
  [elem game]
  game)

(defrecord Market [id coord resource]
  e/Element
  (id [elem] id)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game)))

(defn create
  "Creates a new Market"
  [coord]
  (->Market (gensym) coord "gem"))

(defn resource
  "Gets the resource that this generator is buying"
  [generator]
  (:resource generator))
