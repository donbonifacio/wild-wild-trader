(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.action
  "Represents what the player can do")

(defrecord Action [action-type args])

(def left (map->Action {:action-type :move :args [-1 0]}))
(def right (map->Action {:action-type :move :args [1 0]}))
(def up (map->Action {:action-type :move :args [0 -1]}))
(def down (map->Action {:action-type :move :args [0 1]}))
