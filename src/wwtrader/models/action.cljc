(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.action
  "Represents what the player can do")

(defrecord Action [action-type args])

(def left (map->Action {:action-type :move :offset [-1 0]}))
