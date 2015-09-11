(ns wwtrader.models.market-test
  (:require
    [wwtrader.game-loop :as game-loop]
    [wwtrader.models.game :as game]
    [wwtrader.models.trader :as trader]
    [wwtrader.models.market :as market]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.action :as action]
    [wwtrader.game-builds :as game-builds]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(defn- trader-with-cargo
  "Adds cargo to the player"
  [game]
  (let [trader (game/at game coord/c1-1)
        trader-with-cargo (trader/add-cargo trader "gem")]
    (game/swap-element game trader trader-with-cargo)))

(deftest trader-interact-with-market
  (let [game (-> (game-builds/player-left-to market/create)
                 (game/player-action action/right)
                 (trader-with-cargo))
        result (game-loop/process-turn game)
        new-game (:game result)
        trader (game/at new-game coord/c1-1)
        marker (game/at new-game coord/c2-1)
        cargo (trader/cargo trader)]
    (is (:success result))
    (is (= 0 (count cargo)))
    (is (= 1 (:sold result)))
    (is (= 1 (:money result)))
    (is (< 0 (trader/money trader)))))

