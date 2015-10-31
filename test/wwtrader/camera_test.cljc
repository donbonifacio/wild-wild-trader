(ns wwtrader.camera-test
  (:require
    [wwtrader.camera :as camera]
    [wwtrader.models.game :as game]
    [wwtrader.models.trader :as trader]
    [wwtrader.models.god :as god]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.action :as action]
    [wwtrader.game-builds :as game-builds]
    #?(:clj [clojure.test :refer [deftest testing is run-tests]]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(deftest set-camera-test
  (let [game (-> (game/create 9 9)
                 (camera/set-camera (coord/create 0 0)))]
    (is (game/camera game))
    (is (= (coord/create 0 0) (:left (game/camera game))))
    (is (= (coord/create 8 8) (:right (game/camera game))))))

(defn- verify
  "Verifies an assertion on camera movement"
  [[cx cy] [fx fy] [[lx ly] [rx ry]]]
  (let [game (-> (game/create 9 9)
                 (camera/set-camera (coord/create cx cy))
                 (game/register (trader/create (coord/create fx fy))))
        camera-position (camera/process game)]
    (is (= (coord/create lx ly) (:left camera-position)))
    (is (= (coord/create rx ry) (:right camera-position)))))

(deftest camera-process-test
  (verify [0 0] [1 1] [[0 0] [8 8]]))

