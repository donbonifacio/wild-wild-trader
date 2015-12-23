(ns wwtrader.game-builds
  (:require
    [wwtrader.models.element :as element]
    [wwtrader.models.game :as game]
    [wwtrader.camera :as camera]
    [wwtrader.models.bandit :as bandit]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.trader :as trader]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(defn player-alone
  "Gets a 3x3 game with the player at the center"
  []
  (-> (game/create 3 3)
      (game/register (trader/create coord/c1-1))))

(defn player-and-bandit
  "Gets a 3x3 game with the player at one end and the bandit at another"
  []
  (-> (game/create 3 3)
      (game/register (bandit/create coord/c0-0))
      (game/register (trader/create coord/c2-2))))

(defn player-left-to
  "Gets a 3x3 game with the player at the center, and the given element
  at this left"
  [other-create]
  (-> (game/create 3 3)
      (camera/set-camera (coord/create 0 0))
      (game/register (other-create coord/c2-1))
      (game/register (trader/create coord/c1-1))))

(defn player-far-left-to
  "Gets a 3x3 game with the player at 0,0, and the given element
  at this left, but out of the camera"
  [other-create]
  (-> (game/create 24 24)
      (camera/set-camera (coord/create 0 0))
      (game/register (other-create (coord/create 8 0)))
      (game/register (trader/create (coord/create 4 0)))))
