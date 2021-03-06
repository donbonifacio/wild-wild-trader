(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.god
  "Makes the world go round"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.bandit :as bandit]
            [wwtrader.models.desperado :as desperado]
            [wwtrader.models.enemy :as enemy]
            [wwtrader.models.apache :as apache]
            [wwtrader.models.burglar :as burglar]
            [wwtrader.models.decoy :as decoy]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defn- random-enemy
  "Returns a random enemy type"
  []
  (let [lucky (rand-int 4)]
    (case lucky
      0 desperado/create
      1 burglar/create
      2 apache/create
      bandit/create)))

(defn add-random-enemy
  "Adds a random enemy"
  [game]
  (game/register game ((random-enemy) (game/random-empty-coord game))))

(defn enemies-to-spawn
  "The number of enemies to spawn on the given game"
  [game]
  (let [trader (first (game/find-elements game trader/elem-type))
        curr-enemies (count (game/filter-elements game #(satisfies? enemy/Enemy %)))
        more-enemies (+ 1 (count (trader/cargo trader)))
        to-generate (- more-enemies curr-enemies)]
    to-generate
    ))

(defn add-random-enemies
  "Adds several enemies"
  [game]
  (let [turn (game/turn game)]
    (if (= 0 (mod turn 10))
      (loop [n (enemies-to-spawn game)
             game game]
        (if (<= n 0)
          game
          (recur
            (- n 1)
            (game/register game ((random-enemy) (game/random-empty-coord game))))))
      game)))

(defn- process
  "Processes the turn from given actions"
  [elem result]
  {:success true :game (-> (:game result)
                           (game/inc-turn)
                           (add-random-enemies))})

(defrecord God [id]
  e/Element
  (id [elem] id)
  (priority [elem] 10000)
  (coord [elem] (coord/create -100 -100))
  (coord [elem coord] elem)
  (process-turn [elem game] (process elem game))
  (interact-with [elem other game] {:success true :game game}))

(defn create
  "Creates a new God"
  []
  (->God (gensym)))
