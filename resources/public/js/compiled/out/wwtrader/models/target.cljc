(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.target
  "Represents an element that can be targeted/attacked by others")

(defprotocol Target
  (target-value [elem] "Gets how much of a target this element is")
  (take-damage [elem attacker game] "Processes damage taken by other element")
  (stolen [elem thief game] "Processes when something is stealed"))

