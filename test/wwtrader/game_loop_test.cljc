(ns wwtrader.game-loop-test
  (:require
    [wwtrader.game-loop :as game-loop]
    [wwtrader.models.game :as game]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.action :as action]
    [wwtrader.game-builds :as game-builds]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(defn- move-test
  "Tests a move action"
  [action expected-coord]
  (let [game (-> (game-builds/player-alone)
                 (game/player-action action))]
    (is (= 1 (count (game/elements game))))
    (let [result (game-loop/process-turn game)
          game (:game result)]
      (is (not (game/at game coord/c1-1)))
      (is (game/at game expected-coord)))))

(deftest movement
  (move-test action/up coord/c1-0)
  (move-test action/down coord/c1-2)
  (move-test action/right coord/c2-1)
  (move-test action/left coord/c0-1))
