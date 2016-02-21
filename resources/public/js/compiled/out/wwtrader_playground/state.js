// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader_playground.state');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof wwtrader_playground.state.app_state !== 'undefined'){
} else {
wwtrader_playground.state.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Sets the current page to be displayed
 */
wwtrader_playground.state.set_page_BANG_ = (function wwtrader_playground$state$set_page_BANG_(page){
return cljs.core.swap_BANG_.call(null,wwtrader_playground.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),page);
});
/**
 * Gets the current page
 */
wwtrader_playground.state.current_page = (function wwtrader_playground$state$current_page(){
return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wwtrader_playground.state.app_state));
});
/**
 * Sets data for the current page
 */
wwtrader_playground.state.set_page_data_BANG_ = (function wwtrader_playground$state$set_page_data_BANG_(data){
return cljs.core.swap_BANG_.call(null,wwtrader_playground.state.app_state,cljs.core.assoc,wwtrader_playground.state.current_page.call(null),data);
});
/**
 * Gets the data of the current page
 */
wwtrader_playground.state.get_page_data = (function wwtrader_playground$state$get_page_data(){
return cljs.core.get.call(null,cljs.core.deref.call(null,wwtrader_playground.state.app_state),wwtrader_playground.state.current_page.call(null));
});

//# sourceMappingURL=state.js.map?rel=1450953132379