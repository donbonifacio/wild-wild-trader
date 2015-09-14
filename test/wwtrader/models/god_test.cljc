(ns wwtrader.models.god-test
  (:require
    [wwtrader.game-loop :as game-loop]
    [wwtrader.models.game :as game]
    [wwtrader.models.trader :as trader]
    [wwtrader.models.god :as god]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.action :as action]
    [wwtrader.game-builds :as game-builds]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest add-random-enemy-test
  (let [game (-> (game/create)
                 (god/add-random-enemy))]
    (is game)
    (is (= 1 (count (game/elements game))))))

