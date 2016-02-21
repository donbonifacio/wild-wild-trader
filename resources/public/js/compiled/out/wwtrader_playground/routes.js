// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader_playground.routes');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('wwtrader.game_generator');
goog.require('wwtrader_playground.state');
var action__22951__auto___28133 = (function (params__22952__auto__){
if(cljs.core.map_QMARK_.call(null,params__22952__auto__)){
var map__28130 = params__22952__auto__;
var map__28130__$1 = ((((!((map__28130 == null)))?((((map__28130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28130):map__28130);
return wwtrader_playground.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"game","game",-441523833));
} else {
if(cljs.core.vector_QMARK_.call(null,params__22952__auto__)){
var vec__28132 = params__22952__auto__;
return wwtrader_playground.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"game","game",-441523833));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/game",action__22951__auto___28133);


//# sourceMappingURL=routes.js.map?rel=1450975830607