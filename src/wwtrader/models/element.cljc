(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.element
  "Element represents something that can be placed on the map/county")

(defprotocol Element
  (id [elem] "Gets an unique identifier for this element")
  (priority [elem] "Gets the turn run priority")
  (target-value [elem] "Gets how much of a target this element is")
  (coord [elem] [elem coord] "Gets/Sets the coordinate of this element")
  (process-turn [elem game] "Processes the turn for this element")
  (interact-with [elem other game] "Processes an interaction with 'other' element"))

