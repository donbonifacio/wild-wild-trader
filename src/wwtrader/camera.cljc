(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.camera
  "Manages the camera for the game"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.action :as action]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.game :as game]))

(def margin 3)

(defn width
  "Getst he width of the camera view"
  [game]
  8)

(defn height
  "Getst he height of the camera view"
  [game]
  8)

(defn init-camera
  "Creates a new camera based on left point"
  [game left]
  {:left left
   :right (coord/create (+ (- (width game) 1) (coord/x left))
                        (+ (- (height game) 1) (coord/y left)))})

(defn set-camera
  "Sets a new camera given the left top point"
  [game left]
  (game/camera game (init-camera game left)))

(defn focus-element
  "Given a game, returns the element to focus the camera"
  [game]
  (first (game/find-elements game trader/elem-type)))

(defn move-camera
  "Given a camera and a direction, moves the camera"
  [game camera [dx dy]]
  (let [left (:left camera)
        x (+ (coord/x left) dx)
        y (+ (coord/y left) dy)]
    (cond
      (< x 0) camera
      (< y 0) camera
      :else (init-camera game (coord/create x y)))))

(defn process
  "Gets the positions of the current camera"
  [game]
  {:pre [(and (:camera game)
              (:player-action game))]}
  (let [previous-camera (:camera game)
        camera-left (:left previous-camera)
        camera-right (:right previous-camera)

        focus-elem (focus-element game)
        focus-coord (e/coord focus-elem)
        action (:player-action game)

        d-left-x (- (coord/x focus-coord) (coord/x camera-left))
        d-left-y (- (coord/y focus-coord) (coord/y camera-left))]

    (cond
      (and (action/moved-x? action) (< d-left-x margin))
        (move-camera game previous-camera [-1 0])
      (and (action/moved-y? action) (< d-left-y margin))
        (move-camera game previous-camera [0 -1])
      :else
        previous-camera)))
