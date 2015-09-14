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

(defn adjacent?
  "Checks if two coordinates are adjacent"
  [c1 c2]
  (let [dx (- (x c1) (x c2))
        dy (- (y c1) (y c2))]
    (and
      (< -2 dx)
      (> 2 dx)
      (< -2 dy)
      (> 2 dy))))

(defn perpendicular?
  "True if the coordinates are perpendicular"
  [c1 c2]
  (or (= (x c1) (x c2))
      (= (y c1) (y c2))))

(defn adjacent-perpendicular?
  "True if the given coords are perpendicular and adjacent"
  [c1 c2]
  (and (perpendicular? c1 c2)
       (adjacent? c1 c2)))

(defn abs [x] (if (< x 0) (- x) x))

(defn sort-by-distance
  "Sorts the given coords by distance to the reference"
  [reference-coord coords]
  (sort-by (fn [c]
             (let [dx (abs (- (x c) (x reference-coord)))
                   dy (abs (- (y c) (y reference-coord)))]
               (+ dx dy)))
           coords))

(def c0-0 (create 0 0))
(def c0-1 (create 0 1))
(def c1-0 (create 1 0))
(def c1-1 (create 1 1))
(def c1-2 (create 1 2))
(def c1-6 (create 1 6))
(def c2-1 (create 2 1))
(def c2-2 (create 2 2))
(def c5-1 (create 5 1))
(def c5-5 (create 5 5))
(def c5-6 (create 5 6))
(def c7-7 (create 7 7))
