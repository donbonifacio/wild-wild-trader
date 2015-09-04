(ns wwtrader.game-loop-test
  (:require
    [wwtrader.game-loop :as game-loop]
    [wwtrader.models.game :as game]
    [wwtrader.models.action :as action]
    [wwtrader.game-builds :as game-builds]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest move-left
  (let [game (-> (game-builds/player-alone)
                 (game/player-action action/left))]
    (is (= 1 (count (game/elements game))))
    (game-loop/process-turn game)))
