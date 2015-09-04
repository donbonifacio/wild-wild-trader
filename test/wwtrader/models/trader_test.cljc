(ns wwtrader.models.trader-test
  (:require
    [wwtrader.models.trader :as trader]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.element-tester :as element-tester]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest creation
  (is (trader/create coord/c1-1)))

(deftest acts-as-an-element
  (element-tester/acts-as-element (trader/create coord/c1-1)))
