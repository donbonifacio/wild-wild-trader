(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.element
  "Element represents something that can be placed on the map/county")

(defprotocol Element
  (id [elem] "Gets an unique identifier for this element"))

