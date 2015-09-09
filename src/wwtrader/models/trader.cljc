(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.trader
  "Represents an entity that has a cargo and moves things from places to places"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defmulti process-action (fn [action elem game] (:action-type action)))

(defmethod process-action :move [action elem game]
  (let [current-coord (e/coord elem)
        new-coord (coord/offset current-coord (:args action))]
    (cond
      (game/invalid-destination? game new-coord)
        {:success false :error :invalid-destination :game game}
      :else
        {:success true :game (game/swap-element game elem (e/coord elem new-coord))})))

(defn- process
  "Processes the turn from given actions"
  [elem result]
  (let [game (:game result)]
    (process-action (game/player-action game) elem game)))

(defrecord Trader [id coord hitpoints cargo]
  e/Element
  (id [elem] id)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game)))

(defn create
  "Creates a new Trader"
  [coord]
  (->Trader (gensym) coord 3 []))
