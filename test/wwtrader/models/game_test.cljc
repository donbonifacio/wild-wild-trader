(ns wwtrader.models.game-test
  (:require
    [wwtrader.models.game :as game]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.trader :as trader]
    [wwtrader.models.decoy :as decoy]
    [wwtrader.game-builds :as game-builds]
    #?(:clj [clojure.test :refer [deftest testing is are run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is are run-tests]])))

(deftest creation
  (is (game/create)))

(defn- validate-destination
  "Validates a destination coord"
  [game coord expected]
  (is (= expected (game/invalid-destination? game coord))
      (str "Validation mismatch for [" (coord/x coord) " " (coord/y coord) "] != " expected)))

(deftest invalid-destination?
  (let [game (game/create 3 3)]
    (validate-destination game (coord/create -1 0) true)
    (validate-destination game (coord/create -1 -1) true)
    (validate-destination game (coord/create 3 0) true)
    (validate-destination game (coord/create 3 3) true)

    (validate-destination game (coord/create 0 0) false)
    (validate-destination game (coord/create 1 1) false)
    (validate-destination game (coord/create 2 2) false)))

(deftest random-empty-coord
  (let [game (game/create)]
    (is (game/random-empty-coord game))
    (is (game/random-empty-coord game))
    (is (game/random-empty-coord game))
    (is (game/random-empty-coord game))))

(deftest find-targe-test
  (testing "trader and enemy"
    (let [game (game-builds/player-and-bandit)
          target (game/find-target game)]
      (is (instance? trader/elem-type target))))
  (testing "trader and decoy"
    (let [game (game-builds/player-left-to decoy/create)
          target (game/find-target game)]
      (is (instance? decoy/elem-type target)))))
