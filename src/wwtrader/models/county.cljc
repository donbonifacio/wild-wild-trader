(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.county
  "Represents a map that should be visible with several elements")

(defrecord County [with height elements])

(defn create
  "Creates a new County"
  [w h]
  (->County w h {}))

(defn register
  "Registers a new element on a given coordinate"
  [county coord elem]
  (let [current-elements (-> county :elements)]
    (assoc county :elements (assoc current-elements coord elem))))

(defn at
  "Gets the element, if any, at the given coordinate"
  [county coord]
  (-> county
      :elements
      (get coord)))
