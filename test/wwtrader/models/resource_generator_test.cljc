(ns wwtrader.models.resource-generator-test
  (:require
    [wwtrader.game-loop :as game-loop]
    [wwtrader.models.game :as game]
    [wwtrader.models.trader :as trader]
    [wwtrader.models.resource-generator :as resource-generator]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.action :as action]
    [wwtrader.game-builds :as game-builds]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest trader-interact-with-resource-generator
  (let [game (-> (game-builds/player-left-to resource-generator/create)
                 (game/player-action action/right))
        result (game-loop/process-turn game)
        new-game (:game result)
        trader (game/at new-game coord/c1-1)
        generator (game/at new-game coord/c2-1)
        cargo (trader/cargo trader)]
    (is (:success result))
    (is (= 1 (count cargo)))
    (is (= false (resource-generator/available? generator)))

    (testing "resource generated again"
      (let [new-generator (assoc generator :generation-time 1)
            game (game/swap-element new-game generator new-generator)
            result (game-loop/process-turn game)
            generator (game/at (:game result) coord/c2-1)]
        (is (= true (resource-generator/available? generator)))))))
