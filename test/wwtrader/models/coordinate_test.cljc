(ns wwtrader.models.coordinate-test
  (:require
    [wwtrader.models.coordinate :as coord]
    #?(:clj [clojure.test :refer [deftest testing is are run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is are run-tests]])))

(deftest creation
  (is (coord/create 1 2))

  (testing "property access"
    (let [coord (coord/create 3 4)]
      (is (= 3 (coord/x coord)))
      (is (= 4 (coord/y coord))))))

(deftest adjacent
  (are [c1 c2] (coord/adjacent? c1 c2)
       (coord/create 1 1) (coord/create 0 0)
       (coord/create 1 1) (coord/create 1 0)
       (coord/create 1 1) (coord/create 0 1)
       (coord/create 1 1) (coord/create 2 0)
       (coord/create 1 1) (coord/create 2 1)
       (coord/create 1 1) (coord/create 2 2))
  (are [c1 c2] (not (coord/adjacent? c1 c2))
       (coord/create 1 1) (coord/create 5 5)
       (coord/create 1 1) (coord/create 1 3)))

(deftest perpendicular
  (are [c1 c2] (coord/perpendicular? c1 c2)
       (coord/create 1 1) (coord/create 1 0)
       (coord/create 1 1) (coord/create 0 1)
       (coord/create 1 1) (coord/create 8 1)
       (coord/create 1 1) (coord/create 1 2))
  (are [c1 c2] (not (coord/perpendicular? c1 c2))
       (coord/create 1 1) (coord/create 2 2)
       (coord/create 1 1) (coord/create 5 5)
       (coord/create 1 1) (coord/create 0 0)))
