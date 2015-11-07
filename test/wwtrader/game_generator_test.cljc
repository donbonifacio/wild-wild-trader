(ns wwtrader.game-generator-test
  (:require
    [wwtrader.game-loop :as game-loop]
    [wwtrader.models.game :as game]
    [wwtrader.models.trader :as trader]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.action :as action]
    [wwtrader.game-generator :as game-generator]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest smoke
  (is (game-generator/random)))
