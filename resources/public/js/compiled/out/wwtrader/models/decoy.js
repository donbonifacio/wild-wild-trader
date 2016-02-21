// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.models.decoy');
goog.require('cljs.core');
goog.require('wwtrader.models.element');
goog.require('wwtrader.models.target');
goog.require('wwtrader.models.coordinate');
goog.require('wwtrader.models.game');
/**
 * Gives money from trader
 */
wwtrader.models.decoy.give_money = (function wwtrader$models$decoy$give_money(elem,money){
return cljs.core.assoc.call(null,elem,new cljs.core.Keyword(null,"money","money",250333921),(new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(elem) + money));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {wwtrader.models.element.Element}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {wwtrader.models.target.Target}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
wwtrader.models.decoy.Decoy = (function (id,coord,visual,value,__meta,__extmap,__hash){
this.id = id;
this.coord = coord;
this.visual = visual;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
wwtrader.models.decoy.Decoy.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

wwtrader.models.decoy.Decoy.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k18119,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__18121 = (((k18119 instanceof cljs.core.Keyword))?k18119.fqn:null);
switch (G__18121) {
case "id":
return self__.id;

break;
case "coord":
return self__.coord;

break;
case "visual":
return self__.visual;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18119,else__17533__auto__);

}
});

wwtrader.models.decoy.Decoy.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#wwtrader.models.decoy.Decoy{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coord","coord",-1453656639),self__.coord],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"visual","visual",942787224),self__.visual],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

wwtrader.models.decoy.Decoy.prototype.cljs$core$IIterable$ = true;

wwtrader.models.decoy.Decoy.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18118){
var self__ = this;
var G__18118__$1 = this;
return (new cljs.core.RecordIter((0),G__18118__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"visual","visual",942787224),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

wwtrader.models.decoy.Decoy.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

wwtrader.models.decoy.Decoy.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new wwtrader.models.decoy.Decoy(self__.id,self__.coord,self__.visual,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

wwtrader.models.decoy.Decoy.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

wwtrader.models.decoy.Decoy.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
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

wwtrader.models.decoy.Decoy.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
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

wwtrader.models.decoy.Decoy.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coord","coord",-1453656639),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"visual","visual",942787224),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new wwtrader.models.decoy.Decoy(self__.id,self__.coord,self__.visual,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

wwtrader.models.decoy.Decoy.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__18118){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__18122 = cljs.core.keyword_identical_QMARK_;
var expr__18123 = k__17538__auto__;
if(cljs.core.truth_(pred__18122.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__18123))){
return (new wwtrader.models.decoy.Decoy(G__18118,self__.coord,self__.visual,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18122.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639),expr__18123))){
return (new wwtrader.models.decoy.Decoy(self__.id,G__18118,self__.visual,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18122.call(null,new cljs.core.Keyword(null,"visual","visual",942787224),expr__18123))){
return (new wwtrader.models.decoy.Decoy(self__.id,self__.coord,G__18118,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18122.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__18123))){
return (new wwtrader.models.decoy.Decoy(self__.id,self__.coord,self__.visual,G__18118,self__.__meta,self__.__extmap,null));
} else {
return (new wwtrader.models.decoy.Decoy(self__.id,self__.coord,self__.visual,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__18118),null));
}
}
}
}
});

wwtrader.models.decoy.Decoy.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coord","coord",-1453656639),self__.coord],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"visual","visual",942787224),self__.visual],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

wwtrader.models.decoy.Decoy.prototype.wwtrader$models$element$Element$ = true;

wwtrader.models.decoy.Decoy.prototype.wwtrader$models$element$Element$id$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return self__.id;
});

wwtrader.models.decoy.Decoy.prototype.wwtrader$models$element$Element$priority$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return (5000);
});

wwtrader.models.decoy.Decoy.prototype.wwtrader$models$element$Element$coord$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return self__.coord;
});

wwtrader.models.decoy.Decoy.prototype.wwtrader$models$element$Element$coord$arity$2 = (function (elem,coord__$1){
var self__ = this;
var elem__$1 = this;
return cljs.core.assoc.call(null,elem__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639),coord__$1);
});

wwtrader.models.decoy.Decoy.prototype.wwtrader$models$element$Element$process_turn$arity$2 = (function (elem,result){
var self__ = this;
var elem__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(result)], null);
});

wwtrader.models.decoy.Decoy.prototype.wwtrader$models$element$Element$interact_with$arity$3 = (function (elem,trader,game){
var self__ = this;
var elem__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.models.game.swap_element.call(null,wwtrader.models.game.purge.call(null,game,elem__$1),trader,wwtrader.models.decoy.give_money.call(null,trader,self__.value))], null);
});

wwtrader.models.decoy.Decoy.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__18118){
var self__ = this;
var this__17529__auto____$1 = this;
return (new wwtrader.models.decoy.Decoy(self__.id,self__.coord,self__.visual,self__.value,G__18118,self__.__extmap,self__.__hash));
});

wwtrader.models.decoy.Decoy.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

wwtrader.models.decoy.Decoy.prototype.wwtrader$models$target$Target$ = true;

wwtrader.models.decoy.Decoy.prototype.wwtrader$models$target$Target$target_value$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return self__.value;
});

wwtrader.models.decoy.Decoy.prototype.wwtrader$models$target$Target$take_damage$arity$3 = (function (elem,other,game){
var self__ = this;
var elem__$1 = this;
return wwtrader.models.game.purge.call(null,game,elem__$1);
});

wwtrader.models.decoy.Decoy.prototype.wwtrader$models$target$Target$stolen$arity$3 = (function (elem,thief,game){
var self__ = this;
var elem__$1 = this;
return wwtrader.models.game.purge.call(null,game,elem__$1);
});

wwtrader.models.decoy.Decoy.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"visual","visual",-1711648545,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

wwtrader.models.decoy.Decoy.cljs$lang$type = true;

wwtrader.models.decoy.Decoy.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"wwtrader.models.decoy/Decoy");
});

wwtrader.models.decoy.Decoy.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"wwtrader.models.decoy/Decoy");
});

wwtrader.models.decoy.__GT_Decoy = (function wwtrader$models$decoy$__GT_Decoy(id,coord,visual,value){
return (new wwtrader.models.decoy.Decoy(id,coord,visual,value,null,null,null));
});

wwtrader.models.decoy.map__GT_Decoy = (function wwtrader$models$decoy$map__GT_Decoy(G__18120){
return (new wwtrader.models.decoy.Decoy(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__18120),new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(G__18120),new cljs.core.Keyword(null,"visual","visual",942787224).cljs$core$IFn$_invoke$arity$1(G__18120),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__18120),null,cljs.core.dissoc.call(null,G__18120,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"visual","visual",942787224),new cljs.core.Keyword(null,"value","value",305978217)),null));
});

wwtrader.models.decoy.elem_type = wwtrader.models.decoy.Decoy;
/**
 * Creates a new Decoy
 */
wwtrader.models.decoy.create = (function wwtrader$models$decoy$create(var_args){
var args18126 = [];
var len__17974__auto___18129 = arguments.length;
var i__17975__auto___18130 = (0);
while(true){
if((i__17975__auto___18130 < len__17974__auto___18129)){
args18126.push((arguments[i__17975__auto___18130]));

var G__18131 = (i__17975__auto___18130 + (1));
i__17975__auto___18130 = G__18131;
continue;
} else {
}
break;
}

var G__18128 = args18126.length;
switch (G__18128) {
case 1:
return wwtrader.models.decoy.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wwtrader.models.decoy.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18126.length)].join('')));

}
});

wwtrader.models.decoy.create.cljs$core$IFn$_invoke$arity$1 = (function (coord){
return wwtrader.models.decoy.create.call(null,coord,new cljs.core.Keyword(null,"mountain","mountain",-1770530243));
});

wwtrader.models.decoy.create.cljs$core$IFn$_invoke$arity$2 = (function (coord,visual){
return wwtrader.models.decoy.__GT_Decoy.call(null,cljs.core.gensym.call(null),coord,visual,(10));
});

wwtrader.models.decoy.create.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=decoy.js.map?rel=1450953126336