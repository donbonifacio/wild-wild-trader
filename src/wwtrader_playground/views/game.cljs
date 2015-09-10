(ns wwtrader-playground.views.game
  (:require [wwtrader-playground.state :as state]
            [wwtrader.game-loop :as game-loop]
            [wwtrader.models.game :as game]
            [wwtrader.models.action :as action]
            [wwtrader.models.coordinate :as coord]
            [wwtrader.models.element :as element]
            [wwtrader.models.trader :as trader]
            [wwtrader.models.market :as market]
            [wwtrader.models.resource-generator :as resource-generator]
            [wwtrader.models.county :as county]))

(def cell-size 50)

(defmulti render-element
  "Renders the given element in HTML"
  (fn [element] (type element)))

(defn- raw-render
  "Renders an element"
  [elem specific-style specific-content]
  (let [pos (element/coord elem)
        id (element/id elem)
        x (coord/x pos)
        y (+ (coord/y pos) 1)]
    [:div {:key id
           :id id
           :style (merge {:position "absolute"
                          :transition "0.35s"
                          :width cell-size
                          :height cell-size
                          :left (str (* x 12.5) "%")
                          :bottom (str (* (- 8 y) 12.5) "%")
                          :border "1px dotted"}
                         specific-style)}
     specific-content]))

(defmethod render-element trader/Trader [trader]
  (raw-render trader {} "Trader"))

(defmethod render-element market/Market [market]
  (raw-render market
    {:border "1px solid"
     :color "blue"
     :border-color "blue"}
    "Market"))

(defmethod render-element resource-generator/ResourceGenerator [generator]
  (let [available? (resource-generator/available? generator)
        color (if available? "green" "black")]
    (raw-render generator
      {:border "1px solid"
       :color color
       :border-color color}
      [:div "Gen" [:br]
       (if available?
         (resource-generator/resource generator)
         "Empty")])))

(defn register-action!
  "Registers the player action"
  [action]
  (let [result (-> (state/get-page-data)
                   :game
                   (game/player-action action)
                   (game-loop/process-turn))]
    (state/set-page-data! result)))

(defn on-key-press
  "Handles on key pressed"
  [e]
  (condp some [(.-keyCode e)]
    #{39} (register-action! action/right)
    #{37} (register-action! action/left)
    #{38} (register-action! action/up)
    #{40} (register-action! action/down)
    (println "Ignoring key" (.-keyCode e))))

(defn- board
  "Renders the game board"
  [game]
  (let [county (game/county game)
        sx (* cell-size (county/width county))
        sy (* cell-size (county/height county))]
    [:div.board {:style {:position "relative"
                         :width (str sx "px")
                         :height (str sy "px")
                         :border "1px solid"}}
     (map render-element (game/elements game))]
  ))

(defn debug-info
  "Renders debug-info"
  [result game]
  [:div
   [:h3 {:style {:margin 0}} "Data"]
   [:ul
    (if-let [action (game/player-action game)]
      [:li [:b "Player Action"] " " (pr-str action)]
      [:li [:b "Player Action"] " None"])
    [:li [:b "Result"] " " (pr-str (dissoc result :game))]
   ]
   [:h3 {:style {:margin 0}} "Elements"]
   [:ul
    (map (fn [element]
           [:li {:key (element/id element)} (pr-str element)])
         (game/elements game))]])

(defn- get-page-data
  "Gets the page data given the global state"
  [state]
  (:game state))

(defn- hud
  "Shows the player's data"
  [game]
  (let [trader (first (filter #(instance? trader/Trader %) (game/elements game)))]
    [:div
     [:h3 "Trader"]
     [:h6 "Cargo"]
     [:ul
      (map-indexed (fn [idx cargo-item]
                     [:li {:key idx} cargo-item])
                   (trader/cargo trader))]]))

(defn render
  [state]
  (let [result (get-page-data state)
        game (:game result)]
    (. js/document (addEventListener "keydown" on-key-press))
    [:div
     [:div
      [:div {:style {:float "left"}} (board game)]
      [:div {:style {:float "left" :margin-left "10px"}} (hud game)]]
      [:div {:style {:clear "both"}} (debug-info result game)]]))
