(ns wwtrader.game-builds
  (:require
    [wwtrader.models.element :as element]
    [wwtrader.models.game :as game]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.trader :as trader]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(defn player-alone
  "Gets a 3x3 game with the player at the center"
  []
  (-> (game/create 3 3)
      (game/register (trader/create coord/c1-1))))

(defn player-left-to
  "Gets a 3x3 game with the player at the center, and the given element
  at this left"
  [other-create]
  (-> (game/create 3 3)
      (game/register (other-create (coord/create 2 1)))
      (game/register (trader/create coord/c1-1))))
