// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader_playground.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('wwtrader_playground.views.layout');
goog.require('secretary.core');
goog.require('wwtrader.game_generator');
goog.require('wwtrader_playground.state');
cljs.core.enable_console_print_BANG_.call(null);
wwtrader_playground.core.on_js_reload = (function wwtrader_playground$core$on_js_reload(){
try{reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wwtrader_playground.views.layout.render], null),document.getElementById("app"));

return cljs.core.println.call(null,"Reloaded...");
}catch (e28122){var e = e28122;
cljs.core.println.call(null,"Error setting up browser env...");

return cljs.core.println.call(null,e);
}});
wwtrader_playground.core.init = (function wwtrader_playground$core$init(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

wwtrader_playground.state.set_page_BANG_.call(null,new cljs.core.Keyword(null,"game","game",-441523833));

wwtrader_playground.state.set_page_data_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.game_generator.random.call(null)], null));

return wwtrader_playground.core.on_js_reload.call(null);
});
if(typeof wwtrader_playground.core.start !== 'undefined'){
} else {
wwtrader_playground.core.start = wwtrader_playground.core.init.call(null);
}

//# sourceMappingURL=core.js.map?rel=1450975830459