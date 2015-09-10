(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.resource-generator
  "Generates resources"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defn- process
  "Processes the turn from given actions"
  [elem game]
  game)

(defn reset
  "Resets the generator to start building a new resource"
  [generator]
  (-> generator
      (assoc :available? false)))

(defn- interact-with
  "Interacts with another element"
  [generator other game]
  (if (:available? generator)
    (if (trader/cargo-space-available? other)
      (let [trader (trader/add-cargo other (:resource generator))
            game (-> game
                     (game/swap-element generator (reset generator))
                     (game/swap-element other trader))]
        {:success true :generator-empty? false :game game})
      {:success true :note :cargo-full :generator-empty? false :game game})
    {:success true :generator-empty? true :game game}))

(defrecord ResourceGenerator [id coord resource available? cooldown]
  e/Element
  (id [elem] id)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game))
  (interact-with [elem other game] (interact-with elem other game)))

(defn create
  "Creates a new ResourceGenerator"
  [coord]
  (->ResourceGenerator (gensym) coord "gem" true 3))

(defn resource
  "Gets the resource that this generator is processing"
  [generator]
  (:resource generator))
