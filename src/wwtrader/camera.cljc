(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.camera
  "Manages the camera for the game"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.action :as action]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.county :as county]
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
  [game camera [dx dy] moved-x? moved-y?]
  (let [left (:left camera)
        county (game/county game)
        x (+ (coord/x left) dx)
        y (+ (coord/y left) dy)
        end-x (+ x (width game))
        end-y (+ y (height game))]
    (cond
      (< x 0) camera
      (< y 0) camera
      (and moved-x? (> end-x (county/width county))) camera
      (and moved-y? (> end-y (county/height county))) camera
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
        d-left-y (- (coord/y focus-coord) (coord/y camera-left))
        d-right-x (- (coord/x camera-right) (coord/x focus-coord))
        d-right-y (- (coord/y camera-right) (coord/y focus-coord))

        moved-x? (action/moved-x? action)
        moved-y? (action/moved-y? action)]

    (cond
      (and moved-x? (< d-left-x margin))
        (move-camera game previous-camera [-1 0] moved-x? moved-y?)
      (and moved-x? (< d-right-x margin))
        (move-camera game previous-camera [1 0] moved-x? moved-y?)
      (and moved-y? (< d-left-y margin))
        (move-camera game previous-camera [0 -1] moved-x? moved-y?)
      (and moved-y? (< d-right-y margin))
        (move-camera game previous-camera [0 1] moved-x? moved-y?)
      :else
        previous-camera)))

(defn update-game
  "Updates the camera on the given game"
  [game]
  (assoc game :camera (process game)))

(defn info
  "Prints the camera info, in a simple format"
  [camera]
  (str (coord/x (:left camera)) ":" (coord/y (:left camera))
       " -> "
       (coord/x (:right camera)) ":" (coord/y (:right camera))))
