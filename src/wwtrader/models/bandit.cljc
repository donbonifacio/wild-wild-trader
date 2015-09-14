(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.bandit
  "Implementation for the bandit enemy"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.action :as action]
            [wwtrader.models.game :as game]))

(defn- interact
  "Interacts with another element"
  [game elem new-coord]
  game)

(defn- process
  "Processes the turn from given actions"
  [elem result]
  result)

(defrecord Bandit [id coord energy move?]
  e/Element
  (id [elem] id)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game)))

(defn create
  "Creates a new Bandit"
  [coord]
  (->Bandit (gensym) coord 100 true))

