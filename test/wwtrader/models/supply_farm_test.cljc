(ns wwtrader.models.supply-farm-test
  (:require
    [wwtrader.game-loop :as game-loop]
    [wwtrader.models.game :as game]
    [wwtrader.models.trader :as trader]
    [wwtrader.models.supply-farm :as supply-farm]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.action :as action]
    [wwtrader.game-builds :as game-builds]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest trader-interact-with-supply-farm
  (let [game (-> (game-builds/player-left-to supply-farm/create)
                 (game/player-action action/right))
        trader (game/at game coord/c1-1)
        money (trader/money trader)
        result (game-loop/process-turn game)
        new-game (:game result)
        new-trader (game/at new-game coord/c1-1)
        new-money (trader/money new-trader)
        farm (game/at new-game coord/c2-1)
        cargo (trader/cargo new-trader)]
    (is (:success result))
    (is (= 1 (count cargo)))
    (is (= "supplies" (first cargo)))
    (is (= (supply-farm/cost farm) (:cost result)))
    (is (= new-money (- money (:cost result))))))

