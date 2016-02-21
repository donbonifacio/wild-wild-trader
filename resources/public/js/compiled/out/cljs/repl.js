// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4653__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4653__auto__)){
var ns = temp__4653__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24206_24220 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24207_24221 = null;
var count__24208_24222 = (0);
var i__24209_24223 = (0);
while(true){
if((i__24209_24223 < count__24208_24222)){
var f_24224 = cljs.core._nth.call(null,chunk__24207_24221,i__24209_24223);
cljs.core.println.call(null,"  ",f_24224);

var G__24225 = seq__24206_24220;
var G__24226 = chunk__24207_24221;
var G__24227 = count__24208_24222;
var G__24228 = (i__24209_24223 + (1));
seq__24206_24220 = G__24225;
chunk__24207_24221 = G__24226;
count__24208_24222 = G__24227;
i__24209_24223 = G__24228;
continue;
} else {
var temp__4653__auto___24229 = cljs.core.seq.call(null,seq__24206_24220);
if(temp__4653__auto___24229){
var seq__24206_24230__$1 = temp__4653__auto___24229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24206_24230__$1)){
var c__17719__auto___24231 = cljs.core.chunk_first.call(null,seq__24206_24230__$1);
var G__24232 = cljs.core.chunk_rest.call(null,seq__24206_24230__$1);
var G__24233 = c__17719__auto___24231;
var G__24234 = cljs.core.count.call(null,c__17719__auto___24231);
var G__24235 = (0);
seq__24206_24220 = G__24232;
chunk__24207_24221 = G__24233;
count__24208_24222 = G__24234;
i__24209_24223 = G__24235;
continue;
} else {
var f_24236 = cljs.core.first.call(null,seq__24206_24230__$1);
cljs.core.println.call(null,"  ",f_24236);

var G__24237 = cljs.core.next.call(null,seq__24206_24230__$1);
var G__24238 = null;
var G__24239 = (0);
var G__24240 = (0);
seq__24206_24220 = G__24237;
chunk__24207_24221 = G__24238;
count__24208_24222 = G__24239;
i__24209_24223 = G__24240;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24241 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16916__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16916__auto__)){
return or__16916__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24241);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24241)))?cljs.core.second.call(null,arglists_24241):arglists_24241));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24210 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24211 = null;
var count__24212 = (0);
var i__24213 = (0);
while(true){
if((i__24213 < count__24212)){
var vec__24214 = cljs.core._nth.call(null,chunk__24211,i__24213);
var name = cljs.core.nth.call(null,vec__24214,(0),null);
var map__24215 = cljs.core.nth.call(null,vec__24214,(1),null);
var map__24215__$1 = ((((!((map__24215 == null)))?((((map__24215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24215):map__24215);
var doc = cljs.core.get.call(null,map__24215__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24215__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24242 = seq__24210;
var G__24243 = chunk__24211;
var G__24244 = count__24212;
var G__24245 = (i__24213 + (1));
seq__24210 = G__24242;
chunk__24211 = G__24243;
count__24212 = G__24244;
i__24213 = G__24245;
continue;
} else {
var temp__4653__auto__ = cljs.core.seq.call(null,seq__24210);
if(temp__4653__auto__){
var seq__24210__$1 = temp__4653__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24210__$1)){
var c__17719__auto__ = cljs.core.chunk_first.call(null,seq__24210__$1);
var G__24246 = cljs.core.chunk_rest.call(null,seq__24210__$1);
var G__24247 = c__17719__auto__;
var G__24248 = cljs.core.count.call(null,c__17719__auto__);
var G__24249 = (0);
seq__24210 = G__24246;
chunk__24211 = G__24247;
count__24212 = G__24248;
i__24213 = G__24249;
continue;
} else {
var vec__24217 = cljs.core.first.call(null,seq__24210__$1);
var name = cljs.core.nth.call(null,vec__24217,(0),null);
var map__24218 = cljs.core.nth.call(null,vec__24217,(1),null);
var map__24218__$1 = ((((!((map__24218 == null)))?((((map__24218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24218):map__24218);
var doc = cljs.core.get.call(null,map__24218__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24218__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24250 = cljs.core.next.call(null,seq__24210__$1);
var G__24251 = null;
var G__24252 = (0);
var G__24253 = (0);
seq__24210 = G__24250;
chunk__24211 = G__24251;
count__24212 = G__24252;
i__24213 = G__24253;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1450953133879