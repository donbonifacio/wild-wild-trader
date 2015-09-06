(ns ^:figwheel-always wwtrader-playground.core
  (:require [reagent.core :as reagent]
            [secretary.core :as secretary]
            [wwtrader.game-generator :as game-generator]
            [wwtrader-playground.state :as state]
            [wwtrader-playground.views.layout :as layout]))

(enable-console-print!)

(defn- browser?
  "True if running on the browser"
  []
  (boolean js/document))

(defn on-js-reload []
  (try
      (reagent/render-component [layout/render] (. js/document (getElementById "app")))
      (println "Reloaded...")
    (catch :default e
      (println "Error setting up browser env...")
      (println e))))

(defn init []
  (secretary/set-config! :prefix "#")
  (state/set-page! :game)
  (state/set-page-data! {:game (game-generator/random)})
  (on-js-reload))

(defonce start
  (init))
