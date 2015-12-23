(ns wwtrader.models.trader-test
  (:require
    [wwtrader.models.trader :as trader]
    [wwtrader.models.element :as e]
    [wwtrader.models.game :as game]
    [wwtrader.models.bandit :as bandit]
    [wwtrader.models.action :as action]
    [wwtrader.game-loop :as game-loop]
    [wwtrader.game-builds :as game-builds]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.element-tester :as element-tester]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest creation
  (is (trader/create coord/c1-1)))

(deftest acts-as-an-element
  (element-tester/acts-as-element (trader/create coord/c1-1)))

(deftest attack-bandit
  (let [game (-> (game-builds/player-left-to bandit/create)
                 (game/player-action action/right))
        result (game-loop/process-turn game)
        game (:game result)
        trader (first (game-loop/turn-elements game))]
    (is (:success result))
    (is (not (game/at game coord/c2-1)))
    (is (trader/attacked? trader))

    (testing "move to enemy position"
      (let [result (game-loop/process-turn game)
            game (:game result)
            trader (first (game-loop/turn-elements game))]
        (is (:success result))
        (is (= coord/c2-1 (e/coord trader)))
        (is (not (trader/attacked? trader)))))))

(deftest attack-bandit-consider-camera
  (let [original-game (-> (game-builds/player-far-left-to bandit/create)
                          (game/player-action action/right))
        result (game-loop/process-trader-turn original-game)
        game (:game result)
        trader (first (game-loop/turn-elements game))]
    (is (:success result))
    (is (game/at game (coord/create 8 0)))
    (is (not (trader/attacked? trader)))

    (testing "on the next attack the enemy should be in range"
      (let [result (game-loop/process-trader-turn game)
            game (:game result)
            trader (first (game-loop/turn-elements game))]
        (is (:success result))
        (is (trader/attacked? trader))
        (is (:dead? (game/at game (coord/create 8 0))))
        (is (trader/attacked? trader))))))
