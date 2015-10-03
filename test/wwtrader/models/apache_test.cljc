(ns wwtrader.models.apache-test
  (:require
    [wwtrader.game-builds :as game-builds]
    [wwtrader.game-loop :as game-loop]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.element :as e]
    [wwtrader.models.action :as action]
    [wwtrader.models.apache :as apache]
    [wwtrader.models.trader :as trader]
    [wwtrader.models.game :as game]
    [wwtrader.models.element-tester :as element-tester]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest creation
  (is (apache/create coord/c1-1)))

(deftest acts-as-an-element
  (element-tester/acts-as-element (apache/create coord/c1-1)))

(deftest die-in-3-hits
  (let [game (-> (game-builds/player-left-to apache/create)
                 (game/player-action action/right))

        result1 (game-loop/process-turn game)
        result2 (game-loop/process-turn (:game result1))
        result3 (game-loop/process-turn (:game result2))
        result4 (game-loop/process-turn (:game result3))]

    (is (:success result1))
    (let [apache (game/at (:game result1) coord/c2-1)
          trader (game/at (:game result1) coord/c1-1)]
      (is apache)
      (is (= 3 (:energy apache)))
      (is (= 100 (:energy trader))))

    (is (:success result2))
    (let [apache (game/at (:game result2) coord/c2-1)
          trader (game/at (:game result2) coord/c1-1)]
      (is apache)
      (is (= 2 (:energy apache)))
      (= 100 (:energy trader)))

    (is (:success result3))
    (let [apache (game/at (:game result3) coord/c2-1)]
      (is apache)
      (is (= 1 (:energy apache))))

    (is (:success result4))
    (let [apache (game/at (:game result4) coord/c2-1)]
      (is (not apache)))))
