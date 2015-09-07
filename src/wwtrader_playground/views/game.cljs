(ns wwtrader-playground.views.game
  (:require [wwtrader-playground.state :as state]
            [wwtrader.models.game :as game]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.element :as element]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.county :as county]))

(def cell-size 50)

(defmulti render-element
  "Renders the given element in HTML"
  (fn [element] (type element)))

(defmethod render-element trader/Trader [trader]
  (let [pos (element/coord trader)
        x (- (coord/x pos) 1)
        y (coord/y pos)]
    [:div.trader {:key (element/id trader)
                  :id (element/id trader)
                  :style {:position "absolute"
                          :transition "0.35s"
                          :width cell-size
                          :height cell-size
                          :left (str (* x 12.5) "%")
                          :bottom (str (* (- 8 y) 12.5) "%")
                          :border "1px dotted"}}
     "Trader"]))

(defn- board
  "Renders the game board"
  [game]
  (let [county (game/county game)
        sx (* cell-size (county/width county))
        sy (* cell-size (county/height county))]
    [:div.board {:style {:position "relative"
                         :width (str sx "px")
                         :height (str sy "px")
                         :border "1px solid"}}
     (map render-element (game/elements game))]
  ))

(defn render
  [state]
  (let [game (:game state)]
    [:div (board game)]))
