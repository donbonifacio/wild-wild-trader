(ns ^:figwheel-always wwtrader-playground.routes
  (:require [reagent.core :as reagent]
            [secretary.core :as secretary]
            [wwtrader.game-generator :as game-generator]
            [wwtrader-playground.state :as state]))

(secretary/defroute "/game" []
  (state/set-page! :game))
