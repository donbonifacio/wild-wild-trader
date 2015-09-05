(ns wwtrader-playground.views.layout
  (:require [wwtrader-playground.state :as state]
            [wwtrader-playground.views.game :as game-view]))

(defn- current-page [state]
  (let [page (:page state)]
    (cond
      (= :game page) (game-view/render state)
      :else (game-view/render state))))

(defn render
  ([]
   [render @state/app-state])
  ([state]
   [:div
    [:h1 "Wild Wild Trader : Playground"]
    (current-page state)]))
