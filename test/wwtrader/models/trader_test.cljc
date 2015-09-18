(ns wwtrader.models.trader-test
  (:require
    [wwtrader.models.trader :as trader]
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
    (is (trader/attacked? trader))))
