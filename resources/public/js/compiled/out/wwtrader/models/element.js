// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.models.element');
goog.require('cljs.core');

/**
 * @interface
 */
wwtrader.models.element.Element = function(){};

/**
 * Gets an unique identifier for this element
 */
wwtrader.models.element.id = (function wwtrader$models$element$id(elem){
if((!((elem == null))) && (!((elem.wwtrader$models$element$Element$id$arity$1 == null)))){
return elem.wwtrader$models$element$Element$id$arity$1(elem);
} else {
var x__17571__auto__ = (((elem == null))?null:elem);
var m__17572__auto__ = (wwtrader.models.element.id[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,elem);
} else {
var m__17572__auto____$1 = (wwtrader.models.element.id["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,elem);
} else {
throw cljs.core.missing_protocol.call(null,"Element.id",elem);
}
}
}
});

/**
 * Gets the turn run priority
 */
wwtrader.models.element.priority = (function wwtrader$models$element$priority(elem){
if((!((elem == null))) && (!((elem.wwtrader$models$element$Element$priority$arity$1 == null)))){
return elem.wwtrader$models$element$Element$priority$arity$1(elem);
} else {
var x__17571__auto__ = (((elem == null))?null:elem);
var m__17572__auto__ = (wwtrader.models.element.priority[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,elem);
} else {
var m__17572__auto____$1 = (wwtrader.models.element.priority["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,elem);
} else {
throw cljs.core.missing_protocol.call(null,"Element.priority",elem);
}
}
}
});

/**
 * Gets/Sets the coordinate of this element
 */
wwtrader.models.element.coord = (function wwtrader$models$element$coord(var_args){
var args18036 = [];
var len__17974__auto___18039 = arguments.length;
var i__17975__auto___18040 = (0);
while(true){
if((i__17975__auto___18040 < len__17974__auto___18039)){
args18036.push((arguments[i__17975__auto___18040]));

var G__18041 = (i__17975__auto___18040 + (1));
i__17975__auto___18040 = G__18041;
continue;
} else {
}
break;
}

var G__18038 = args18036.length;
switch (G__18038) {
case 1:
return wwtrader.models.element.coord.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wwtrader.models.element.coord.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18036.length)].join('')));

}
});

wwtrader.models.element.coord.cljs$core$IFn$_invoke$arity$1 = (function (elem){
if((!((elem == null))) && (!((elem.wwtrader$models$element$Element$coord$arity$1 == null)))){
return elem.wwtrader$models$element$Element$coord$arity$1(elem);
} else {
var x__17571__auto__ = (((elem == null))?null:elem);
var m__17572__auto__ = (wwtrader.models.element.coord[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,elem);
} else {
var m__17572__auto____$1 = (wwtrader.models.element.coord["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,elem);
} else {
throw cljs.core.missing_protocol.call(null,"Element.coord",elem);
}
}
}
});

wwtrader.models.element.coord.cljs$core$IFn$_invoke$arity$2 = (function (elem,coord){
if((!((elem == null))) && (!((elem.wwtrader$models$element$Element$coord$arity$2 == null)))){
return elem.wwtrader$models$element$Element$coord$arity$2(elem,coord);
} else {
var x__17571__auto__ = (((elem == null))?null:elem);
var m__17572__auto__ = (wwtrader.models.element.coord[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,elem,coord);
} else {
var m__17572__auto____$1 = (wwtrader.models.element.coord["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,elem,coord);
} else {
throw cljs.core.missing_protocol.call(null,"Element.coord",elem);
}
}
}
});

wwtrader.models.element.coord.cljs$lang$maxFixedArity = 2;

/**
 * Processes the turn for this element
 */
wwtrader.models.element.process_turn = (function wwtrader$models$element$process_turn(elem,game){
if((!((elem == null))) && (!((elem.wwtrader$models$element$Element$process_turn$arity$2 == null)))){
return elem.wwtrader$models$element$Element$process_turn$arity$2(elem,game);
} else {
var x__17571__auto__ = (((elem == null))?null:elem);
var m__17572__auto__ = (wwtrader.models.element.process_turn[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,elem,game);
} else {
var m__17572__auto____$1 = (wwtrader.models.element.process_turn["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,elem,game);
} else {
throw cljs.core.missing_protocol.call(null,"Element.process-turn",elem);
}
}
}
});

/**
 * Processes an interaction with 'other' element
 */
wwtrader.models.element.interact_with = (function wwtrader$models$element$interact_with(elem,other,game){
if((!((elem == null))) && (!((elem.wwtrader$models$element$Element$interact_with$arity$3 == null)))){
return elem.wwtrader$models$element$Element$interact_with$arity$3(elem,other,game);
} else {
var x__17571__auto__ = (((elem == null))?null:elem);
var m__17572__auto__ = (wwtrader.models.element.interact_with[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,elem,other,game);
} else {
var m__17572__auto____$1 = (wwtrader.models.element.interact_with["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,elem,other,game);
} else {
throw cljs.core.missing_protocol.call(null,"Element.interact-with",elem);
}
}
}
});


//# sourceMappingURL=element.js.map?rel=1450953125736