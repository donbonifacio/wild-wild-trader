(ns ^:figwheel-always wwtrader-playground.routes
  (:require [reagent.core :as reagent]
            [secretary.core :as secretary]))

(secretary/defroute "/game" []
  (state/set-page! :game))
