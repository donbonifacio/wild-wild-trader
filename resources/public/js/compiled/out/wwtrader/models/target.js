// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.models.target');
goog.require('cljs.core');

/**
 * @interface
 */
wwtrader.models.target.Target = function(){};

/**
 * Gets how much of a target this element is
 */
wwtrader.models.target.target_value = (function wwtrader$models$target$target_value(elem){
if((!((elem == null))) && (!((elem.wwtrader$models$target$Target$target_value$arity$1 == null)))){
return elem.wwtrader$models$target$Target$target_value$arity$1(elem);
} else {
var x__17571__auto__ = (((elem == null))?null:elem);
var m__17572__auto__ = (wwtrader.models.target.target_value[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,elem);
} else {
var m__17572__auto____$1 = (wwtrader.models.target.target_value["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,elem);
} else {
throw cljs.core.missing_protocol.call(null,"Target.target-value",elem);
}
}
}
});

/**
 * Processes damage taken by other element
 */
wwtrader.models.target.take_damage = (function wwtrader$models$target$take_damage(elem,attacker,game){
if((!((elem == null))) && (!((elem.wwtrader$models$target$Target$take_damage$arity$3 == null)))){
return elem.wwtrader$models$target$Target$take_damage$arity$3(elem,attacker,game);
} else {
var x__17571__auto__ = (((elem == null))?null:elem);
var m__17572__auto__ = (wwtrader.models.target.take_damage[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,elem,attacker,game);
} else {
var m__17572__auto____$1 = (wwtrader.models.target.take_damage["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,elem,attacker,game);
} else {
throw cljs.core.missing_protocol.call(null,"Target.take-damage",elem);
}
}
}
});

/**
 * Processes when something is stealed
 */
wwtrader.models.target.stolen = (function wwtrader$models$target$stolen(elem,thief,game){
if((!((elem == null))) && (!((elem.wwtrader$models$target$Target$stolen$arity$3 == null)))){
return elem.wwtrader$models$target$Target$stolen$arity$3(elem,thief,game);
} else {
var x__17571__auto__ = (((elem == null))?null:elem);
var m__17572__auto__ = (wwtrader.models.target.stolen[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,elem,thief,game);
} else {
var m__17572__auto____$1 = (wwtrader.models.target.stolen["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,elem,thief,game);
} else {
throw cljs.core.missing_protocol.call(null,"Target.stolen",elem);
}
}
}
});


//# sourceMappingURL=target.js.map?rel=1450953126001