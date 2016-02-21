(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.enemy
  "Implementation for generic enemy"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defprotocol Enemy
  (add-damage [enemy game damage] "Adds damage to the enemy"))

(def elem-type Enemy)

(defn enemy?
  "True if the element is enemy"
  [elem]
  (satisfies? Enemy elem))
