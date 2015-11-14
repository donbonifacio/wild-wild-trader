(ns ^{:added "0.1.0" :author "Pedro Santos"}
  wwtrader.models.skill-giver
  "Gives a skill to the player"
  (:require [wwtrader.models.element :as e]
            [wwtrader.models.target :as t]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.game :as game]))

(defrecord SkillGiver [id coord visual skill]
  e/Element
  (id [elem] id)
  (priority [elem] 5000)
  (coord [elem] coord)
  (coord [elem coord] (assoc elem :coord coord))
  (process-turn [elem result] {:success true :game (:game result)})
  (interact-with [elem trader game]
    (println (trader/add-skill trader skill))
    {:success true :game (-> (game/purge game elem)
                             (game/swap-element trader (trader/add-skill trader skill)))}))

(def elem-type SkillGiver)

(defn create
  "Creates a new SkillGiver"
  ([coord]
   (create coord :heal))
  ([coord skill]
   (->SkillGiver (gensym) coord nil skill)))
