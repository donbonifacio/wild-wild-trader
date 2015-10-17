(ns wwtrader.models.element-tester
  (:require
    [wwtrader.models.element :as element]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(defn acts-as-element
  "Verifies that a given object acts as an element"
  [e]
  (is e)
  (is (satisfies? element/Element e))
  (is (element/id e))
  (is (element/target-value e)))
