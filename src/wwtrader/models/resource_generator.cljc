(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.resource-generator
  "Generates resources"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defn- increment-cooldown
  "Increments the cooldown to make the resource available"
  [generator]
  (let [cooldown (+ 1 (:cooldown generator))]
    (if (>= cooldown (:generation-time generator))
      (-> generator
          (assoc :cooldown cooldown)
          (assoc :available? true))
      (assoc generator :cooldown cooldown))))

(defn- process
  "Processes the turn from given actions"
  [elem result]
  (if (:available? elem)
    {:success true :game (:game result)}
    {:success true :incremented? true :game (-> (:game result)
                                                (game/swap-element elem (increment-cooldown elem)))}))

(defn random-generation-time
  "Gets a new random genertion time"
  []
  (+ 3 (rand-int 10)))

(defn reset
  "Resets the generator to start building a new resource"
  [generator]
  (-> generator
      (assoc :available? false)
      (assoc :generation-time (random-generation-time))
      (assoc :cooldown 0)))

(defn- interact-with
  "Interacts with another element"
  [generator other game]
  (if (:available? generator)
    (if (trader/cargo-space-available? other)
      (let [resource (:resource generator)
            trader (trader/add-cargo other resource)
            game (-> game
                     (game/swap-element generator (reset generator))
                     (game/swap-element other trader))]
        {:success true :got-resource resource :generator-empty? false :game game})
      {:success false :note :cargo-full :generator-empty? false :game game})
    {:success false :generator-empty? true :game game}))

(defrecord ResourceGenerator [id coord resource available? cooldown generation-time]
  e/Element
  (id [elem] id)
  (priority [elem] 1000)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game))
  (interact-with [elem other game] (interact-with elem other game)))

(defn create
  "Creates a new ResourceGenerator"
  [coord]
  (->ResourceGenerator (gensym) coord "gem" true 3 (random-generation-time)))

(defn resource
  "Gets the resource that this generator is processing"
  [generator]
  (:resource generator))

(defn available?
  "True if this generator has a resource available"
  [generator]
  (:available? generator))
