(ns wwtrader-playground.views.game
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.core.async :refer [timeout <!]]
    [wwtrader-playground.state :as state]
    [wwtrader.game-loop :as game-loop]
    [wwtrader.camera :as camera]
    [wwtrader.models.game :as game]
    [wwtrader.models.bandit :as bandit]
    [wwtrader.models.enemy :as enemy]
    [wwtrader.models.desperado :as desperado]
    [wwtrader.models.apache :as apache]
    [wwtrader.models.decoy :as decoy]
    [wwtrader.models.burglar :as burglar]
    [wwtrader.models.action :as action]
    [wwtrader.models.coordinate :as coord]
    [wwtrader.models.element :as element]
    [wwtrader.models.target :as t]
    [wwtrader.models.god :as god]
    [wwtrader.models.trader :as trader]
    [wwtrader.models.obstacle :as obstacle]
    [wwtrader.models.obstacle-with-line-of-sight :as visibility-obstacle]
    [wwtrader.models.market :as market]
    [wwtrader.models.resource-generator :as resource-generator]
    [wwtrader.models.supply-farm :as supply-farm]
    [wwtrader.models.county :as county]))

(def cell-size 50)
(def minimap-cell-size 10)

(def processing?
  "True if the engine is working and no events should be recorded"
  (atom false))

(defn- render-mini-element
  "Renders the given element in html"
  [context elem]
  (let [pos (element/coord elem)
        percent 4.16
        id (element/id elem)
        x (coord/x pos)
        y (+ (coord/y pos) 1)]
    [:div {:key id
           :id id
           :style {:position "absolute"
                   :width minimap-cell-size
                   :height minimap-cell-size
                   :background-color (cond
                                       (instance? trader/elem-type elem) "transparent"
                                       (instance? decoy/elem-type elem) "green"
                                       (instance? market/Market elem) "aqua"
                                       (instance? supply-farm/SupplyFarm elem) "pink"
                                       (instance? god/God elem) "white"
                                       (instance? resource-generator/ResourceGenerator elem) "deeppink"
                                       (instance? visibility-obstacle/ObstacleWithLineOfSight  elem) "blue"
                                       (enemy/enemy? elem) "red"
                                       :else "black")
                   :left (str (* x percent) "%")
                   :bottom (str (* (- 24 y) percent) "%")
                   :border "none"}}]))

(defmulti render-element
  "Renders the given element in HTML"
  (fn [context element] (type element)))

(defn- raw-render
  "Renders an element"
  [context elem specific-style specific-content]
  (let [pos (element/coord elem)
        camera-left (-> context :game game/camera :left)
        camera-right (-> context :game game/camera :right)
        visible? (and (>= (coord/x pos) (coord/x camera-left))
                      (>= (coord/y pos) (coord/y camera-left))
                      (<= (coord/x pos) (coord/x camera-right))
                      (<= (coord/y pos) (coord/y camera-right)))
        id (element/id elem)
        x (- (coord/x pos) (coord/x camera-left))
        y (+ (- (coord/y pos) (coord/y camera-left)) 1)]
    (when visible?
      [:div {:key id
             :id id
             :style (merge {:position "absolute"
                            :transition "0.1s"
                            :width cell-size
                            :height cell-size
                            :left (str (* x 12.5) "%")
                            :bottom (str (* (- 8 y) 12.5) "%")
                            :border "1px dotted"}
                           specific-style)}
     specific-content])))

(defmethod render-element god/God [context god]
  (comment "No render"))

(defmethod render-element obstacle/Obstacle [context obstacle]
  (raw-render context obstacle {:background-color "black"} ""))

(defmethod render-element visibility-obstacle/ObstacleWithLineOfSight [context obstacle]
  (raw-render context obstacle {:background-color "blue" :color "blue"} ""))

(defmethod render-element trader/Trader [context trader]
  (raw-render context trader {}
    [:div "Trader"
     (let [damage (trader/damage-taken trader)]
       (when (not= 0 damage)
         [:div {:style {:color "red"}}
          "-" damage]))
     (when (trader/attacked? trader)
       [:div {:style {:color "pink"}} "shoot!"])]))

(defmethod render-element market/Market [context market]
  (raw-render context market
              {:border "1px solid"
               :color "aqua"
               :border-color "aqua"}
              "Market"))

(defmethod render-element desperado/Desperado [context desperado]
  (let [color "purple"]
    (raw-render context desperado
                {:border "1px dashed"
                 :color color
                 :font-size "12px"
                 :border-color color}
                [:div "Desperado" (when (desperado/attacked? desperado)
                                    [:div {:style {:color "red"}}
                                     "Shoot!"])])))

(defmethod render-element decoy/elem-type [context decoy]
  (let [color "green"]
    (raw-render context decoy
                {:border "1px solid"
                 :color color
                 :font-size "12px"
                 :border-color color}
                [:div "Decoy" [:br] (t/target-value decoy) "$"])))

(defmethod render-element burglar/Burglar [context burglar]
  (let [color "gray"]
    (raw-render context burglar
                {:border "1px dashed"
                 :color color
                 :font-size "12px"
                 :border-color color}
                [:div "Burglar" (when (:robbed? burglar)
                                        [:div {:style {:color "gray"}}
                                         "Got you :)"])
                                (when (:attacked? burglar)
                                        [:div {:style {:color "red"}}
                                         "Outch!"])])))

(defmethod render-element apache/Apache [context apache]
  (let [color "chocolate"]
    (raw-render context apache
                {:border "1px dashed"
                 :color color
                 :font-size "12px"
                 :border-color color}
                [:div "Apache" (when (apache/attacked? apache)
                                        [:div {:style {:color "red"}}
                                         "Shoot!"])])))

(defmethod render-element bandit/Bandit [context bandit]
  (let [color "orange"]
    (raw-render context bandit
                {:border "1px dashed"
                 :color color
                 :font-size "14px"
                 :border-color color}
                [:div "Bandit" (when (bandit/attacked? bandit)
                                 [:div {:style {:color "red"}}
                                  "Shoot!"])])))

(defmethod render-element supply-farm/SupplyFarm [context farm]
  (let [cost (supply-farm/cost farm)
        color "pink"]
    (raw-render context farm
                {:border "1px solid"
                 :color color
                 :font-size "14px"
                 :border-color color}
                [:div "Supplies" [:br] (str cost "$")])))

(defmethod render-element resource-generator/ResourceGenerator [context generator]
  (let [available? (resource-generator/available? generator)
        color (if available? "deeppink" "black")]
    (raw-render context generator
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
  (go
    (let [game (-> (state/get-page-data) :game (game/player-action action))
          trader-result (game-loop/process-trader-turn game)]
      (state/set-page-data! trader-result)
      (<! (timeout 100))
      (when (:success trader-result)
        (state/set-page-data! (game-loop/process-cpu-turn (:game trader-result)))
        (<! (timeout 100)))
      (reset! processing? false))))

(defn on-key-press
  "Handles on key pressed"
  [e]
  (when-not @processing?
    (reset! processing? true)
    (go
      (condp some [(.-keyCode e)]
        #{39 76} (register-action! action/right)
        #{37 72} (register-action! action/left)
        #{38 75} (register-action! action/up)
        #{40 74} (register-action! action/down)
        (do
          (println "Ignoring key" (.-keyCode e))
          (reset! processing? false))))))

(defn- board
  "Renders the game board"
  [game]
  (let [sx (* cell-size (camera/width game))
        sy (* cell-size (camera/height game))
        context {:game game}]
    [:div.board {:style {:position "relative"
                         :width (str sx "px")
                         :height (str sy "px")
                         :border "1px solid"}}
     (map (partial render-element context)
          (game-loop/turn-elements game))]
    ))

(defn- minimap
  "Renders the minimap"
  [game]
  (let [county (game/county game)
        sx (* minimap-cell-size (county/width county))
        sy (* minimap-cell-size (county/height county))
        context {:game game}]
    [:div.board {:style {:position "relative"
                         :width (str sx "px")
                         :height (str sy "px")
                         :border "1px solid"}}
     (map (partial render-mini-element context)
          (game/elements game))]
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
    [:li [:b "Camera"] (pr-str (camera/info (:camera game)))]
    [:li [:b "Result"] " " (pr-str (dissoc result :game))]
    ]
   [:h3 {:style {:margin 0}} "Elements"]
   [:ul
    (map (fn [element]
           [:li {:key (element/id element)} (pr-str element)])
         (game-loop/turn-elements game))]])

(defn- get-page-data
  "Gets the page data given the global state"
  [state]
  (:game state))

(defn- hud
  "Shows the player's data"
  [game]
  (let [trader (first (filter #(instance? trader/Trader %) (game/elements game)))]
    [:div
     [:ul
      [:li "Turn " (game/turn game)]]
     [:h3 "Trader"]
     [:ul
      [:li "Money " (trader/money trader) "$"]
      [:li "Hitpoints " (trader/hitpoints trader)]
      [:li "Energy " (trader/energy trader)]]
     [:h6 "Skills"]
     [:ul
      (map-indexed (fn [idx [k v]]
                     [:li {:key idx}
                      [:button {:on-click (fn [] (register-action! v))} (name k)]])
                   (trader/skills trader))]
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
      [:div {:style {:float "left" :margin-left "10px"}} (hud game)]
      [:div {:style {:float "left" :margin-left "10px"}} (minimap game)]]
     [:div {:style {:clear "both"}} (debug-info result game)]]))
