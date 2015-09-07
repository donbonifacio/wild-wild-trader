(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.resource-generator
  "Generates resources"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defn- process
  "Processes the turn from given actions"
  [elem game]
  game)

(defrecord ResourceGenerator [id coord resource]
  e/Element
  (id [elem] id)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game)))

(defn create
  "Creates a new ResourceGenerator"
  [coord]
  (->ResourceGenerator (gensym) coord "gem"))

(defn resource
  "Gets the resource that this generator is processing"
  [generator]
  (:resource generator))
