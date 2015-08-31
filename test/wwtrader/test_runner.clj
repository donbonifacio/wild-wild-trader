(ns wwtrader.test-runner
  (:gen-class)
  (:require [clojure.test :refer [run-tests run-all-tests]]
            [wwtrader.test-requires]))

(defn runner
  []
  (time (run-all-tests #"wwtrader.*-test")))

(defn -main
  [& args]
  (runner))
