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

(defn offset
  "Moves the coordinate based on the given offset"
  [coord [ox oy]]
  (create (+ (x coord) ox)
          (+ (y coord) oy)))

(def c0-1 (create 0 1))
(def c1-0 (create 1 0))
(def c1-1 (create 1 1))
(def c1-2 (create 1 2))
(def c2-1 (create 2 1))
