(ns wwtrader.models.game-test
  (:require
    [wwtrader.models.game :as game]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest creation
  (is (game/create)))

