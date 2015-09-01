(ns wwtrader.models.county-test
  (:require
    [wwtrader.models.county :as county]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest creation
  (is (county/create 1 2)))

