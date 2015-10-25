(ns wwtrader.camera-test
  (:require
    [wwtrader.camera :as camera]
    [wwtrader.models.game :as game]
    [wwtrader.models.trader :as trader]
    [wwtrader.models.god :as god]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.action :as action]
    [wwtrader.game-builds :as game-builds]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest test-small-square
  (let [game (game/create 9 9)
        camera-position (camera/position game)]
    (is (= coord/c0-0 (:left camera-position)))
    (is (= coord/c7-7 (:right camera-position)))))
