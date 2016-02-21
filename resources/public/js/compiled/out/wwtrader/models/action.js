// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.models.action');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
wwtrader.models.action.Action = (function (action_type,args,__meta,__extmap,__hash){
this.action_type = action_type;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
wwtrader.models.action.Action.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

wwtrader.models.action.Action.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k18027,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__18029 = (((k18027 instanceof cljs.core.Keyword))?k18027.fqn:null);
switch (G__18029) {
case "action-type":
return self__.action_type;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18027,else__17533__auto__);

}
});

wwtrader.models.action.Action.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#wwtrader.models.action.Action{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"action-type","action-type",-1141667361),self__.action_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

wwtrader.models.action.Action.prototype.cljs$core$IIterable$ = true;

wwtrader.models.action.Action.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18026){
var self__ = this;
var G__18026__$1 = this;
return (new cljs.core.RecordIter((0),G__18026__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

wwtrader.models.action.Action.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

wwtrader.models.action.Action.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new wwtrader.models.action.Action(self__.action_type,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

wwtrader.models.action.Action.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

wwtrader.models.action.Action.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
var self__ = this;
var this__17525__auto____$1 = this;
var h__17351__auto__ = self__.__hash;
if(!((h__17351__auto__ == null))){
return h__17351__auto__;
} else {
var h__17351__auto____$1 = cljs.core.hash_imap.call(null,this__17525__auto____$1);
self__.__hash = h__17351__auto____$1;

return h__17351__auto____$1;
}
});

wwtrader.models.action.Action.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
var self__ = this;
var this__17526__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16904__auto__ = other__17527__auto__;
if(cljs.core.truth_(and__16904__auto__)){
var and__16904__auto____$1 = (this__17526__auto____$1.constructor === other__17527__auto__.constructor);
if(and__16904__auto____$1){
return cljs.core.equiv_map.call(null,this__17526__auto____$1,other__17527__auto__);
} else {
return and__16904__auto____$1;
}
} else {
return and__16904__auto__;
}
})())){
return true;
} else {
return false;
}
});

wwtrader.models.action.Action.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"action-type","action-type",-1141667361),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new wwtrader.models.action.Action(self__.action_type,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

wwtrader.models.action.Action.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__18026){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__18030 = cljs.core.keyword_identical_QMARK_;
var expr__18031 = k__17538__auto__;
if(cljs.core.truth_(pred__18030.call(null,new cljs.core.Keyword(null,"action-type","action-type",-1141667361),expr__18031))){
return (new wwtrader.models.action.Action(G__18026,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18030.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__18031))){
return (new wwtrader.models.action.Action(self__.action_type,G__18026,self__.__meta,self__.__extmap,null));
} else {
return (new wwtrader.models.action.Action(self__.action_type,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__18026),null));
}
}
});

wwtrader.models.action.Action.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"action-type","action-type",-1141667361),self__.action_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

wwtrader.models.action.Action.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__18026){
var self__ = this;
var this__17529__auto____$1 = this;
return (new wwtrader.models.action.Action(self__.action_type,self__.args,G__18026,self__.__extmap,self__.__hash));
});

wwtrader.models.action.Action.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

wwtrader.models.action.Action.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"action-type","action-type",498864166,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

wwtrader.models.action.Action.cljs$lang$type = true;

wwtrader.models.action.Action.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"wwtrader.models.action/Action");
});

wwtrader.models.action.Action.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"wwtrader.models.action/Action");
});

wwtrader.models.action.__GT_Action = (function wwtrader$models$action$__GT_Action(action_type,args){
return (new wwtrader.models.action.Action(action_type,args,null,null,null));
});

wwtrader.models.action.map__GT_Action = (function wwtrader$models$action$map__GT_Action(G__18028){
return (new wwtrader.models.action.Action(new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(G__18028),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__18028),null,cljs.core.dissoc.call(null,G__18028,new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});

wwtrader.models.action.left = wwtrader.models.action.map__GT_Action.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null));
wwtrader.models.action.right = wwtrader.models.action.map__GT_Action.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null));
wwtrader.models.action.up = wwtrader.models.action.map__GT_Action.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null));
wwtrader.models.action.down = wwtrader.models.action.map__GT_Action.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null));
wwtrader.models.action.take_supplies = wwtrader.models.action.map__GT_Action.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.Keyword(null,"take-supplies","take-supplies",1480690147)], null));
wwtrader.models.action.heal = wwtrader.models.action.map__GT_Action.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.Keyword(null,"heal","heal",-1734703848),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),(80)], null)], null));
wwtrader.models.action.sleep = wwtrader.models.action.map__GT_Action.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.Keyword(null,"sleep","sleep",-1932665860),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),(20)], null)], null));
wwtrader.models.action.decoy = wwtrader.models.action.map__GT_Action.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action-type","action-type",-1141667361),new cljs.core.Keyword(null,"decoy","decoy",428512436),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),(50)], null)], null));
/**
 * True if the given action translated to moving on x
 */
wwtrader.models.action.moved_x_QMARK_ = (function wwtrader$models$action$moved_x_QMARK_(action){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(action))) && (cljs.core.not_EQ_.call(null,(0),cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(action))));
});
/**
 * True if the given action translated to moving on x
 */
wwtrader.models.action.moved_y_QMARK_ = (function wwtrader$models$action$moved_y_QMARK_(action){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(action))) && (cljs.core.not_EQ_.call(null,(0),cljs.core.last.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(action))));
});

//# sourceMappingURL=action.js.map?rel=1450953125593