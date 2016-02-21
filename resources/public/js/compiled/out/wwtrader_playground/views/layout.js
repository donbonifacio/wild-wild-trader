// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader_playground.views.layout');
goog.require('cljs.core');
goog.require('wwtrader_playground.state');
goog.require('wwtrader_playground.views.game');
wwtrader_playground.views.layout.current_page = (function wwtrader_playground$views$layout$current_page(state){
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game","game",-441523833),page)){
return wwtrader_playground.views.game.render.call(null,state);
} else {
return wwtrader_playground.views.game.render.call(null,state);

}
});
wwtrader_playground.views.layout.render = (function wwtrader_playground$views$layout$render(var_args){
var args28112 = [];
var len__17974__auto___28115 = arguments.length;
var i__17975__auto___28116 = (0);
while(true){
if((i__17975__auto___28116 < len__17974__auto___28115)){
args28112.push((arguments[i__17975__auto___28116]));

var G__28117 = (i__17975__auto___28116 + (1));
i__17975__auto___28116 = G__28117;
continue;
} else {
}
break;
}

var G__28114 = args28112.length;
switch (G__28114) {
case 0:
return wwtrader_playground.views.layout.render.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return wwtrader_playground.views.layout.render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28112.length)].join('')));

}
});

wwtrader_playground.views.layout.render.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wwtrader_playground.views.layout.render,cljs.core.deref.call(null,wwtrader_playground.state.app_state)], null);
});

wwtrader_playground.views.layout.render.cljs$core$IFn$_invoke$arity$1 = (function (state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Wild Wild Trader : Playground"], null),wwtrader_playground.views.layout.current_page.call(null,state)], null);
});

wwtrader_playground.views.layout.render.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=layout.js.map?rel=1450975830444