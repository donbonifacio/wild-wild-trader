(ns wwtrader.models.coordinate
  (:require
    [wwtrader.models.coordinate :as coord]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [clojure.test :refer-macros [deftest testing is run-tests]])))

(deftest creation
  (is (coord/create 1 2))

  (testing "property access"
    (let [coord (coord/create 3 4)]
      (is (= 3 (coord/x coord)))
      (is (= 4 (coord/y coord))))))
