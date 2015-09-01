(ns wwtrader.models.county-test
  (:require
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.county :as county]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest creation
  (is (county/create 1 2)))

(deftest register
  (let [element {}
        coord (coord/create 0 0)
        county (-> (county/create 3 3)
                   (county/register coord element))]
    (is county)
    (is (= element (county/at county coord)))
    (is (nil? (county/at county (coord/create 1 1))))))

