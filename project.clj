(defproject wwtrader "0.1.0-SNAPSHOT"
  :description "Roguelike game with trading twists"
  :url "https://github.com/donbonifacio/wild-wild-trader"
  :min-lein-version "2.5.1"
  :dependencies [[org.clojure/clojure "1.8.0-beta2"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [reagent "0.5.1"]
                 [mvxcvi/puget "1.0.0"]
                 [secretary "1.2.3"]]

  :profiles {

             :clj {
                   :main wwtrader.test-runner
                   :plugins [[com.jakemccrary/lein-test-refresh "0.10.0"]]}

             :cljs-dev {

                        :plugins [[lein-cljsbuild "1.1.1"]
                                  [org.clojure/clojurescript "1.7.170"]
                                  [lein-figwheel "0.5.0-SNAPSHOT"]]

                        :figwheel {:css-dirs ["resources/public/css"]}

                        :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

                        :cljsbuild {
                            :builds [{:id "dev"
                              :figwheel {:on-jsload "wwtrader-playground.core/on-js-reload"}
                              :source-paths ["src"]
                              :compiler {:main wwtrader-playground.core
                                         :figwheel true
                                         :recompile-dependents true
                                         :asset-path "js/compiled/out"
                                         :output-to "resources/public/js/compiled/wwtrader.js"
                                         :output-dir "resources/public/js/compiled/out"
                                         :source-map-timestamp true}}]}}

             :cljs-node {
                         :plugins [[lein-cljsbuild "1.1.1"]
                                   [org.clojure/clojurescript "1.7.170"]]
                         :cljsbuild {
                                     :test-commands {"test" ["node"  "build/test/out-node.js"]}
                                     :builds [{:id "test"
                                               :source-paths ["src" "test"]
                                               :compiler {:output-to "build/test/out-node.js"
                                                          :output-dir "build/test/out-node"
                                                          :main wwtrader.test-runner
                                                          :target :nodejs
                                                          :language-in :ecmascript5
                                                          :language-out :ecmascript5
                                                          :optimizations :advanced}}]}}}

  :test-refresh {:quiet true})
