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
  (let [game (-> (game/create 8 8)
                 (camera/set-camera (coord/create 0 0)))]
    (is (game/camera game))
    (is (= (coord/create 0 0) (:left (game/camera game))))
    (is (= (coord/create 7 7) (:right (game/camera game))))))

(defn- verify
  "Verifies an assertion on camera movement"
  [msg [cx cy] [fx fy] action [[lx ly] [rx ry]]]
  (testing msg
    (let [game (-> (game/create (* 8 3) (* 8 3))
                   (game/player-action action)
                   (camera/set-camera (coord/create cx cy))
                   (game/register (trader/create (coord/create fx fy))))
          camera-position (camera/process game)]
      (is (= (coord/create lx ly) (:left camera-position)))
      (is (= (coord/create rx ry) (:right camera-position))))))

(deftest camera-process-test
  (verify "on the top left, no need to move"
          [0 0] [1 1] action/left [[0 0] [7 7]])
  (verify "on the top left, needs to move 1 to left"
          [1 0] [3 1] action/left [[0 0] [7 7]])
  (verify "on the top left, needs to move 1 to top"
          [0 1] [1 3] action/up [[0 0] [7 7]])
  (verify "middle, no need to move"
          [0 0] [4 4] action/down [[0 0] [7 7]])
  (verify "need to move down"
          [0 0] [4 5] action/down [[0 1] [7 8]])
  (verify "need to move right"
          [0 0] [5 3] action/right [[1 0] [8 7]])
  )

