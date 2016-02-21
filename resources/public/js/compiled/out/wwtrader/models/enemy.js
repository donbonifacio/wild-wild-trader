// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.models.enemy');
goog.require('cljs.core');
goog.require('wwtrader.models.element');
goog.require('wwtrader.models.coordinate');
goog.require('wwtrader.models.game');

/**
 * @interface
 */
wwtrader.models.enemy.Enemy = function(){};

/**
 * Adds damage to the enemy
 */
wwtrader.models.enemy.add_damage = (function wwtrader$models$enemy$add_damage(enemy,game,damage){
if((!((enemy == null))) && (!((enemy.wwtrader$models$enemy$Enemy$add_damage$arity$3 == null)))){
return enemy.wwtrader$models$enemy$Enemy$add_damage$arity$3(enemy,game,damage);
} else {
var x__17571__auto__ = (((enemy == null))?null:enemy);
var m__17572__auto__ = (wwtrader.models.enemy.add_damage[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,enemy,game,damage);
} else {
var m__17572__auto____$1 = (wwtrader.models.enemy.add_damage["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,enemy,game,damage);
} else {
throw cljs.core.missing_protocol.call(null,"Enemy.add-damage",enemy);
}
}
}
});

wwtrader.models.enemy.elem_type = wwtrader.models.enemy.Enemy;
/**
 * True if the element is enemy
 */
wwtrader.models.enemy.enemy_QMARK_ = (function wwtrader$models$enemy$enemy_QMARK_(elem){
if(!((elem == null))){
if((false) || (elem.wwtrader$models$enemy$Enemy$)){
return true;
} else {
if((!elem.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,wwtrader.models.enemy.Enemy,elem);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,wwtrader.models.enemy.Enemy,elem);
}
});

//# sourceMappingURL=enemy.js.map?rel=1450953126245