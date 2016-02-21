(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.county
  "Represents a map that should be visible with several elements")

(defrecord County [width height elements])

(defn create
  "Creates a new County"
  [w h]
  (->County w h {}))

(defn width "Gets the county's width" [county] (:width county))
(defn height "Gets the county's height" [county] (:height county))

(defn register
  "Registers a new element on a given coordinate"
  [county coord elem]
  (let [current-elements (-> county :elements)]
    (assoc county :elements (assoc current-elements coord elem))))

(defn purge
  "Removes the given element from the game"
  [county coord elem]
  (let [current-elements (-> county :elements)]
    (assoc county :elements (dissoc current-elements coord))))

(defn at
  "Gets the element, if any, at the given coordinate"
  [county coord]
  (-> county
      :elements
      (get coord)))

(defn elements
  "Gets all the elements at this county"
  [county]
  (:elements county))
