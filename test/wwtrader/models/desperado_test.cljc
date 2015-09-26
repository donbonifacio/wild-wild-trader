(ns wwtrader.models.desperado-test
  (:require
    [wwtrader.game-builds :as game-builds]
    [wwtrader.game-loop :as game-loop]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.element :as e]
    [wwtrader.models.desperado :as desperado]
    [wwtrader.models.trader :as trader]
    [wwtrader.models.game :as game]
    [wwtrader.models.element-tester :as element-tester]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest creation
  (is (desperado/create coord/c1-1)))

(deftest acts-as-an-element
  (element-tester/acts-as-element (desperado/create coord/c1-1)))
