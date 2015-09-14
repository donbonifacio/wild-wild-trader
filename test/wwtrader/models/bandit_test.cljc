(ns wwtrader.models.bandit-test
  (:require
    [wwtrader.game-builds :as game-builds]
    [wwtrader.game-loop :as game-loop]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.element :as e]
    [wwtrader.models.bandit :as bandit]
    [wwtrader.models.trader :as trader]
    [wwtrader.models.game :as game]
    [wwtrader.models.element-tester :as element-tester]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest creation
  (is (bandit/create coord/c1-1)))

(deftest acts-as-an-element
  (element-tester/acts-as-element (bandit/create coord/c1-1)))

(deftest move-towards-trader
  (let [game (game-builds/player-and-bandit)
        result (game-loop/process-turns game 6)
        foe (first (game/find-elements (:game result) bandit/bandit-type))]
    (is foe)
    (is (:success result))
    (is (coord/adjacent-perpendicular? coord/c2-2 (e/coord foe)))

    (testing "attack trader"
      (let [result (game-loop/process-turn (:game result))
            game (:game result)
            trader (game/at game coord/c2-2)]
        (is (< (trader/energy trader) 100))
        ))))

