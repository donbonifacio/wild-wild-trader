(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.supply-farm
  "Sells supplies"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defn- process
  "Processes the turn from given actions"
  [elem result]
  {:success true :game (:game result)})

(defn- interact-with
  "Interacts with another element"
  [farm other game]
  (if (trader/cargo-space-available? other)
    (let [cost (:cost farm)
          trader (-> (trader/add-cargo other "supplies")
                     (trader/take-money cost))
          game (game/swap-element game other trader)]
      {:success true :got-resource "supplies" :cost cost :game game})
    {:success true :note :cargo-full :game game}))

(defrecord SupplyFarm [id coord cost]
  e/Element
  (id [elem] id)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem game] (process elem game))
  (interact-with [elem other game] (interact-with elem other game)))

(defn create
  "Creates a new SupplyFarm"
  [coord]
  (->SupplyFarm (gensym) coord 1))

(defn cost
  "Gets the cost of this supply farm"
  [farm]
  (:cost farm))
