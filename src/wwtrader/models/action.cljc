(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.action
  "Represents what the player can do")

(defrecord Action [action-type args])

(def left (map->Action {:action-type :move :args [-1 0]}))
(def right (map->Action {:action-type :move :args [1 0]}))
(def up (map->Action {:action-type :move :args [0 -1]}))
(def down (map->Action {:action-type :move :args [0 1]}))

(def take-supplies (map->Action {:action-type :take-supplies}))
(def heal (map->Action {:action-type :heal :args {:energy 80}}))
(def sleep (map->Action {:action-type :sleep :args {:energy 20}}))
(def decoy (map->Action {:action-type :decoy :args {:energy 50}}))

(defn moved-x?
  "True if the given action translated to moving on x"
  [action]
  (and (= :move (:action-type action))
       (not= 0 (first (:args action)))))

(defn moved-y?
  "True if the given action translated to moving on x"
  [action]
  (and (= :move (:action-type action))
       (not= 0 (last (:args action)))))
