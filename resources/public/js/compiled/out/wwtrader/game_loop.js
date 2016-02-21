// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.game_loop');
goog.require('cljs.core');
goog.require('wwtrader.models.game');
goog.require('wwtrader.camera');
goog.require('wwtrader.models.element');
/**
 * Calls element turn
 */
wwtrader.game_loop.element_turn = (function wwtrader$game_loop$element_turn(result,element){
var temp__4651__auto__ = (function (){var or__16916__auto__ = wwtrader.models.game.at.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(result),wwtrader.models.element.coord.call(null,element));
if(cljs.core.truth_(or__16916__auto__)){
return or__16916__auto__;
} else {
return element;
}
})();
if(cljs.core.truth_(temp__4651__auto__)){
var fresh_element = temp__4651__auto__;
var result__$1 = wwtrader.models.element.process_turn.call(null,fresh_element,result);
if(cljs.core._EQ_.call(null,false,new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result__$1))){
return cljs.core.reduced.call(null,result__$1);
} else {
return result__$1;
}
} else {
return result;
}
});
/**
 * Sorts elements by priority
 */
wwtrader.game_loop.priority_sorter = (function wwtrader$game_loop$priority_sorter(element){
return wwtrader.models.element.priority.call(null,element);
});
/**
 * Gets the elements to process on the turn, ordered by run priority
 */
wwtrader.game_loop.turn_elements = (function wwtrader$game_loop$turn_elements(game){
return cljs.core.sort_by.call(null,wwtrader.game_loop.priority_sorter,wwtrader.models.game.elements.call(null,game));
});
/**
 * Processes the turn just for the given elements
 */
wwtrader.game_loop.process_elements_turn = (function wwtrader$game_loop$process_elements_turn(game,elements){
return cljs.core.reduce.call(null,wwtrader.game_loop.element_turn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game","game",-441523833),game], null),elements);
});
/**
 * Gets the trader of the current game
 */
wwtrader.game_loop.trader = (function wwtrader$game_loop$trader(game){
return cljs.core.first.call(null,cljs.core.take.call(null,(1),wwtrader.game_loop.turn_elements.call(null,game)));
});
/**
 * Processes the trader's turn
 */
wwtrader.game_loop.process_trader_turn = (function wwtrader$game_loop$process_trader_turn(game){
var elements = wwtrader.game_loop.turn_elements.call(null,game);
var trader = cljs.core.take.call(null,(1),elements);
return cljs.core.update.call(null,wwtrader.game_loop.process_elements_turn.call(null,game,trader),new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.camera.update_game);
});
/**
 * Processes the cpu element's turn
 */
wwtrader.game_loop.process_cpu_turn = (function wwtrader$game_loop$process_cpu_turn(game){
var elements = wwtrader.game_loop.turn_elements.call(null,game);
var cpu = cljs.core.rest.call(null,elements);
return wwtrader.game_loop.process_elements_turn.call(null,game,cpu);
});
/**
 * Processes a single turn in the game
 */
wwtrader.game_loop.process_turn = (function wwtrader$game_loop$process_turn(game){
return wwtrader.game_loop.process_elements_turn.call(null,game,wwtrader.game_loop.turn_elements.call(null,game));
});
/**
 * Processes n turns
 */
wwtrader.game_loop.process_turns = (function wwtrader$game_loop$process_turns(game,n){
while(true){
var result = wwtrader.game_loop.process_turn.call(null,game);
if(((n <= (1))) || (cljs.core.not.call(null,new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result)))){
return result;
} else {
var G__27802 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(result);
var G__27803 = (n - (1));
game = G__27802;
n = G__27803;
continue;
}
break;
}
});

//# sourceMappingURL=game_loop.js.map?rel=1450975829906