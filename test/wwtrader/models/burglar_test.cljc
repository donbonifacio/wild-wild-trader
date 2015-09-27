(ns wwtrader.models.burglar-test
  (:require
    [wwtrader.game-builds :as game-builds]
    [wwtrader.game-loop :as game-loop]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.element :as e]
    [wwtrader.models.burglar :as burglar]
    [wwtrader.models.trader :as trader]
    [wwtrader.models.game :as game]
    [wwtrader.models.element-tester :as element-tester]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest creation
  (is (burglar/create coord/c1-1)))

(deftest acts-as-an-element
  (element-tester/acts-as-element (burglar/create coord/c1-1)))

(deftest clear-trader-cargo
  (let [game (game-builds/player-left-to burglar/create)
        result (game-loop/process-turn game)
        game (:game result)
        trader (game/at game coord/c2-1)
        burglar (game/at game coord/c1-1)]
    (is trader)
    (is (not burglar))
    (is (:success result))))

