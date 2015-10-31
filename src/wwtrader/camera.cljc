(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.camera
  "Manages the camera for the game"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.game :as game]))

(defn width
  "Getst he width of the camera view"
  [game]
  9)

(defn height
  "Getst he height of the camera view"
  [game]
  9)

(defn set-camera
  "Sets a new camera given the left top point"
  [game left]
  (game/camera game
    {:left left
     :right (coord/create (+ (- (width game) 1) (coord/x left))
                          (+ (- (height game) 1) (coord/y left)))}))

(defn focus-element
  "Given a game, returns the element to focus the camera"
  [game]
  (first (game/find-elements game trader/elem-type)))

(defn move-camera
  "Given a camera and a direction, moves the camera"
  [camera dir]
  camera)

(defn process
  "Gets the positions of the current camera"
  [game]
  {:pre [(:camera game)]}
  (let [previous-camera (:camera game)
        camera-left (:left previous-camera)
        camera-right (:right previous-camera)

        focus-elem (focus-element game)
        focus-coord (e/coord focus-elem)

        d-left-x (- (coord/x focus-coord) (coord/x camera-left))
        d-left-y (- (coord/x focus-coord) (coord/x camera-left))]

    (cond
      (and (< d-left-x 3) (>= d-left-x 0))
        (move-camera previous-camera [-1 0])
      (and (< d-left-y 3) (>= d-left-y 0))
        (move-camera previous-camera [0 -1])
      :else
        previous-camera)))
