(ns obb-rules.test-runner
  (:require [cljs.test :refer-macros [run-tests run-all-tests] :refer [empty-env report]]
            [wwtrader.test-requires]))

(enable-console-print!)

(defn runner
  []
  (time (run-all-tests #"wwtrader.*-test")))

(runner)

(defn -main [& args])

(set! *main-cli-fn* -main)
