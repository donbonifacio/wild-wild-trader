(ns wwtrader-playground.views.game
  (:require [wwtrader-playground.state :as state]
            [wwtrader.models.game :as game]
            [wwtrader.models.county :as county]))

(defn- board
  "Renders the game board"
  [game]
  (let [county (game/county game)
        sx (* 50 (county/width county))
        sy (* 50 (county/height county))]
    [:div {:style {:width (str sx "px") :height (str sy "px") :background-color "pink"}}]
  ))

(defn render
  [state]
  (let [game (:game state)]
    [:div (board game)]))
