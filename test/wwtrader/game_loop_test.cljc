(ns wwtrader.game-loop-test
  (:require
    [wwtrader.game-loop :as game-loop]
    [wwtrader.models.game :as game]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.action :as action]
    [wwtrader.game-builds :as game-builds]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest move-left
  (let [game (-> (game-builds/player-alone)
                 (game/player-action action/left))]
    (is (= 1 (count (game/elements game))))
    (let [result (game-loop/process-turn game)
          game (:game result)]
      (is (not (game/at game coord/c1-1)))
      (is (game/at game coord/c0-1))
      )))
