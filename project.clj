(defproject wwtrader "0.1.0-SNAPSHOT"
  :description "Roguelike game with trading twists"
  :url "https://github.com/donbonifacio/wild-wild-trader"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.48"]]

  :profiles {

             :clj {
                  :main wwtrader.test-runner
                  :plugins [[com.jakemccrary/lein-test-refresh "0.10.0"]]}

             :cljs-node {
                 :plugins [[lein-cljsbuild "1.0.6"]]
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
