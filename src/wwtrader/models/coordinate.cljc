(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.coordinate
  "Coordinate implementation and handling functions")

(defrecord Coordinate [x y])

(defn create
  "Creates a new coordinate"
  [x y]
  (->Coordinate x y))

(defn x
  "Handles the x value"
  [coord]
  (:x coord))

(defn y
  "Handles the y value"
  [coord]
  (:y coord))
