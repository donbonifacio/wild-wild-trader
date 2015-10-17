(ns wwtrader.models.decoy-test
  (:require
    [wwtrader.game-loop :as game-loop]
    [wwtrader.models.game :as game]
    [wwtrader.models.trader :as trader]
    [wwtrader.models.decoy :as decoy]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.action :as action]
    [wwtrader.game-builds :as game-builds]
    [wwtrader.models.element-tester :as element-tester]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest acts-as-an-element
  (element-tester/acts-as-element (decoy/create coord/c1-1)))
