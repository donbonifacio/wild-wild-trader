(ns ^:figwheel-always wwtrader-playground.routes
  (:require [reagent.core :as reagent]
            [secretary.core :as secretary]
            [wwtrader-playground.state :as state]))

(secretary/defroute "/game" []
  (state/set-page! :game))
