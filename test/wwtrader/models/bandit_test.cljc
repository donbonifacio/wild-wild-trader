(ns wwtrader.models.bandit-test
  (:require
    [wwtrader.models.bandit :as bandit]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.element-tester :as element-tester]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest creation
  (is (bandit/create coord/c1-1)))

(deftest acts-as-an-element
  (element-tester/acts-as-element (bandit/create coord/c1-1)))
