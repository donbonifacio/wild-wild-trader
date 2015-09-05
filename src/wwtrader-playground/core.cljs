(ns ^:figwheel-always wwtrader-playground.core
  (:require [reagent.core :as reagent]
            [secretary.core :as secretary]
            [wwtrader-playground.views.layout :as layout]))

(enable-console-print!)

(defn- browser?
  "True if running on the browser"
  []
  js)

(defn on-js-reload []
  (when (browser?)
    (println "Reloaded...")
    (reagent/render-component [layout/render] (. js/document (getElementById "app")))))

(defn init []
  (secretary/set-config! :prefix "#")
  (secretary/dispatch! "/game")
  (on-js-reload))

(defonce start
  (init))
