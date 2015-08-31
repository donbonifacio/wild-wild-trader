(defproject wwtrader "0.1.0-SNAPSHOT"
  :description "Roguelike game with trading twists"
  :url "https://github.com/donbonifacio/wild-wild-trader"
  :dependencies [[org.clojure/clojure "1.7.0"]]
  :profiles {:clj {:main wwtrader.test-runner
                   :plugins [[com.jakemccrary/lein-test-refresh "0.10.0"]]}}
  :test-refresh {:quiet true})
