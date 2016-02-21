(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.market
  "Buys resources"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.game :as game]))

(defn- process
  "Processes the Market's turn"
  [elem game]
  game)

(defn- interact-with
  "Interacts with another element"
  [market trader game]
  (let [resource (:resource market)
        all-items (trader/cargo trader)
        wanted-items (filter #(= % resource) all-items)
        nitems (count wanted-items)
        money (+ 1 (- (* nitems nitems) nitems))]
    (if (seq wanted-items)
      (let [new-trader (trader/remove-items-for-money trader resource money)]
        {:success true :sold nitems :money money :game (game/swap-element game trader new-trader)})
      {:success true :sold 0 :money money :game game})))

(defrecord Market [id coord resource]
  e/Element
  (id [elem] id)
  (priority [elem] 1000)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game))
  (interact-with [elem other game] (interact-with elem other game)))

(defn create
  "Creates a new Market"
  ([coord]
   (create coord "gem"))
  ([coord resource]
   (->Market (gensym) coord resource)))

(defn resource
  "Gets the resource that this generator is buying"
  [generator]
  (:resource generator))
