(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.county
  "Represents a map that should be visible with several elements")

(defrecord County [with height elements])

(defn create
  "Creates a new County"
  [w h]
  (->County w h {}))

