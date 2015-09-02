(ns wwtrader.models.trader-test
  (:require
    [wwtrader.models.trader :as trader]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest creation
  (is (trader/create)))
