(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.camera
  "Manages the camera for the game"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defn width
  "Getst he width of the camera view"
  [game]
  8)

(defn height
  "Getst he height of the camera view"
  [game]
  8)

(defn position
  "Gets the positions of the current camera"
  [game]
  {:left (coord/create 0 0)
   :right (coord/create 7 7)})
