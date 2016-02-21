// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.camera');
goog.require('cljs.core');
goog.require('wwtrader.models.coordinate');
goog.require('wwtrader.models.trader');
goog.require('wwtrader.models.action');
goog.require('wwtrader.models.game');
goog.require('wwtrader.models.element');
goog.require('wwtrader.models.county');
wwtrader.camera.margin = (3);
/**
 * Getst he width of the camera view
 */
wwtrader.camera.width = (function wwtrader$camera$width(game){
return (8);
});
/**
 * Getst he height of the camera view
 */
wwtrader.camera.height = (function wwtrader$camera$height(game){
return (8);
});
/**
 * Creates a new camera based on left point
 */
wwtrader.camera.init_camera = (function wwtrader$camera$init_camera(game,left){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"right","right",-452581833),wwtrader.models.coordinate.create.call(null,((wwtrader.camera.width.call(null,game) - (1)) + wwtrader.models.coordinate.x.call(null,left)),((wwtrader.camera.height.call(null,game) - (1)) + wwtrader.models.coordinate.y.call(null,left)))], null);
});
/**
 * Sets a new camera given the left top point
 */
wwtrader.camera.set_camera = (function wwtrader$camera$set_camera(game,left){
return wwtrader.models.game.camera.call(null,game,wwtrader.camera.init_camera.call(null,game,left));
});
/**
 * Given a game, returns the element to focus the camera
 */
wwtrader.camera.focus_element = (function wwtrader$camera$focus_element(game){
return cljs.core.first.call(null,wwtrader.models.game.find_elements.call(null,game,wwtrader.models.trader.elem_type));
});
/**
 * Given a camera and a direction, moves the camera
 */
wwtrader.camera.move_camera = (function wwtrader$camera$move_camera(game,camera,p__27797,moved_x_QMARK_,moved_y_QMARK_){
var vec__27799 = p__27797;
var dx = cljs.core.nth.call(null,vec__27799,(0),null);
var dy = cljs.core.nth.call(null,vec__27799,(1),null);
var left = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(camera);
var county = wwtrader.models.game.county.call(null,game);
var x = (wwtrader.models.coordinate.x.call(null,left) + dx);
var y = (wwtrader.models.coordinate.y.call(null,left) + dy);
var end_x = (x + wwtrader.camera.width.call(null,game));
var end_y = (y + wwtrader.camera.height.call(null,game));
if((x < (0))){
return camera;
} else {
if((y < (0))){
return camera;
} else {
if(cljs.core.truth_((function (){var and__16904__auto__ = moved_x_QMARK_;
if(cljs.core.truth_(and__16904__auto__)){
return (end_x > wwtrader.models.county.width.call(null,county));
} else {
return and__16904__auto__;
}
})())){
return camera;
} else {
if(cljs.core.truth_((function (){var and__16904__auto__ = moved_y_QMARK_;
if(cljs.core.truth_(and__16904__auto__)){
return (end_y > wwtrader.models.county.height.call(null,county));
} else {
return and__16904__auto__;
}
})())){
return camera;
} else {
return wwtrader.camera.init_camera.call(null,game,wwtrader.models.coordinate.create.call(null,x,y));

}
}
}
}
});
/**
 * Gets the positions of the current camera
 */
wwtrader.camera.process = (function wwtrader$camera$process(game){
if(cljs.core.truth_((function (){var and__16904__auto__ = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core.truth_(and__16904__auto__)){
return new cljs.core.Keyword(null,"player-action","player-action",1765283357).cljs$core$IFn$_invoke$arity$1(game);
} else {
return and__16904__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Symbol(null,"game","game",1199007694,null)),cljs.core.list(new cljs.core.Keyword(null,"player-action","player-action",1765283357),new cljs.core.Symbol(null,"game","game",1199007694,null)))))].join('')));
}

var previous_camera = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(game);
var camera_left = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(previous_camera);
var camera_right = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(previous_camera);
var focus_elem = wwtrader.camera.focus_element.call(null,game);
var focus_coord = wwtrader.models.element.coord.call(null,focus_elem);
var action = new cljs.core.Keyword(null,"player-action","player-action",1765283357).cljs$core$IFn$_invoke$arity$1(game);
var d_left_x = (wwtrader.models.coordinate.x.call(null,focus_coord) - wwtrader.models.coordinate.x.call(null,camera_left));
var d_left_y = (wwtrader.models.coordinate.y.call(null,focus_coord) - wwtrader.models.coordinate.y.call(null,camera_left));
var d_right_x = (wwtrader.models.coordinate.x.call(null,camera_right) - wwtrader.models.coordinate.x.call(null,focus_coord));
var d_right_y = (wwtrader.models.coordinate.y.call(null,camera_right) - wwtrader.models.coordinate.y.call(null,focus_coord));
var moved_x_QMARK_ = wwtrader.models.action.moved_x_QMARK_.call(null,action);
var moved_y_QMARK_ = wwtrader.models.action.moved_y_QMARK_.call(null,action);
if(cljs.core.truth_((function (){var and__16904__auto__ = moved_x_QMARK_;
if(cljs.core.truth_(and__16904__auto__)){
return (d_left_x < wwtrader.camera.margin);
} else {
return and__16904__auto__;
}
})())){
return wwtrader.camera.move_camera.call(null,game,previous_camera,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),moved_x_QMARK_,moved_y_QMARK_);
} else {
if(cljs.core.truth_((function (){var and__16904__auto__ = moved_x_QMARK_;
if(cljs.core.truth_(and__16904__auto__)){
return (d_right_x < wwtrader.camera.margin);
} else {
return and__16904__auto__;
}
})())){
return wwtrader.camera.move_camera.call(null,game,previous_camera,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),moved_x_QMARK_,moved_y_QMARK_);
} else {
if(cljs.core.truth_((function (){var and__16904__auto__ = moved_y_QMARK_;
if(cljs.core.truth_(and__16904__auto__)){
return (d_left_y < wwtrader.camera.margin);
} else {
return and__16904__auto__;
}
})())){
return wwtrader.camera.move_camera.call(null,game,previous_camera,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),moved_x_QMARK_,moved_y_QMARK_);
} else {
if(cljs.core.truth_((function (){var and__16904__auto__ = moved_y_QMARK_;
if(cljs.core.truth_(and__16904__auto__)){
return (d_right_y < wwtrader.camera.margin);
} else {
return and__16904__auto__;
}
})())){
return wwtrader.camera.move_camera.call(null,game,previous_camera,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),moved_x_QMARK_,moved_y_QMARK_);
} else {
return previous_camera;

}
}
}
}
});
/**
 * Updates the camera on the given game
 */
wwtrader.camera.update_game = (function wwtrader$camera$update_game(game){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"camera","camera",-1190348585),wwtrader.camera.process.call(null,game));
});
/**
 * Prints the camera info, in a simple format
 */
wwtrader.camera.info = (function wwtrader$camera$info(camera){
return [cljs.core.str(wwtrader.models.coordinate.x.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(camera))),cljs.core.str(":"),cljs.core.str(wwtrader.models.coordinate.y.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(camera))),cljs.core.str(" -> "),cljs.core.str(wwtrader.models.coordinate.x.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(camera))),cljs.core.str(":"),cljs.core.str(wwtrader.models.coordinate.y.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(camera)))].join('');
});

//# sourceMappingURL=camera.js.map?rel=1450975829866