(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.god
  "Makes the world go round"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.bandit :as bandit]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defn add-random-enemy
  "Adds a random enemy"
  [game]
  (if (= 0 (mod (game/turn game) 20))
    (game/register game (bandit/create (game/random-empty-coord game)))
    game))

(defn- process
  "Processes the turn from given actions"
  [elem result]
  {:success true :game (-> (:game result)
                           (game/inc-turn)
                           (add-random-enemy))})

(defrecord God [id]
  e/Element
  (id [elem] id)
  (priority [elem] 10000)
  (coord [elem] nil)
  (coord [elem coord] elem)
  (process-turn [elem game] (process elem game))
  (interact-with [elem other game] {:success true :game game}))

(defn create
  "Creates a new God"
  []
  (->God (gensym)))
