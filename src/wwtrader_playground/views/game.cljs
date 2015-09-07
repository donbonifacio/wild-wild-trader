(ns wwtrader-playground.views.game
  (:require [wwtrader-playground.state :as state]
            [wwtrader.models.game :as game]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.element :as element]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.market :as market]
            [wwtrader.models.resource-generator :as resource-generator]
            [wwtrader.models.county :as county]))

(def cell-size 50)

(defmulti render-element
  "Renders the given element in HTML"
  (fn [element] (type element)))

(defn- raw-render
  "Renders an element"
  [elem specific-style specific-content]
  (let [pos (element/coord elem)
        id (element/id elem)
        x (- (coord/x pos) 1)
        y (coord/y pos)]
    [:div {:key id
           :id id
           :style (merge {:position "absolute"
                          :transition "0.35s"
                          :width cell-size
                          :height cell-size
                          :left (str (* x 12.5) "%")
                          :bottom (str (* (- 8 y) 12.5) "%")
                          :border "1px dotted"}
                         specific-style)}
     specific-content]))

(defmethod render-element trader/Trader [trader]
  (raw-render trader {} "Trader"))

(defmethod render-element market/Market [market]
  (raw-render market
    {:border "1px solid"
     :color "blue"
     :border-color "blue"}
    "Market"))

(defmethod render-element resource-generator/ResourceGenerator [generator]
  (raw-render generator
    {:border "1px solid"
     :color "green"
     :border-color "green"}
    [:div "Gen" [:br] (resource-generator/resource generator)]))

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
