(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.game-generator
  "Generates random games"
  (:require [wwtrader.models.element :as e]
            [wwtrader.camera :as camera]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.god :as god]
            [wwtrader.models.bandit :as bandit]
            [wwtrader.models.market :as market]
            [wwtrader.models.resource-generator :as resource-generator]
            [wwtrader.models.supply-farm :as supply-farm]
            [wwtrader.models.obstacle :as obstacle]
            [wwtrader.models.obstacle-with-line-of-sight :as visibility-obstacle]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defn get-small-windows
  "Returns the start point for all 3x3 windows on the map"
  []
  (for [sx (range 8)
        sy (range 8)
        :let [left [(* sx 3) (* sy 3)]]]
    left))

(defn populate-windows
  "Populates a window with elements"
  [game [sx sy]]
  (let [elements-to-generate (rand-int 4)]
    (loop [game game
           counter elements-to-generate]
      (if (<= counter 0)
        game
        (let [x (+ sx (rand-int 3))
              y (+ sy (rand-int 3))
              lucky (coord/create x y)]
          (if (not (game/at game lucky))
            (-> game
                (game/register (obstacle/create lucky :mountain))
                (recur (dec counter)))
            (recur game counter)))))))

(defn empty-game
  "Generates an empty game"
  []
  (-> (game/create 24 24)
      (camera/set-camera coord/c0-0)
      (game/register (god/create))))

(defn game-with-random-scenary
  "Generates a game with random scenary"
  []
  (reduce populate-windows (empty-game) (get-small-windows)))

(defn random
  "Generates a random game"
  []
  (let [game (game-with-random-scenary)]
    (game/register game (trader/create (game/random-empty-coord game)))))
