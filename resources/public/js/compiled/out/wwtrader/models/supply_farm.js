// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.models.supply_farm');
goog.require('cljs.core');
goog.require('wwtrader.models.element');
goog.require('wwtrader.models.trader');
goog.require('wwtrader.models.coordinate');
goog.require('wwtrader.models.game');
/**
 * Processes the turn from given actions
 */
wwtrader.models.supply_farm.process = (function wwtrader$models$supply_farm$process(elem,result){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(result)], null);
});
/**
 * Interacts with another element
 */
wwtrader.models.supply_farm.interact_with = (function wwtrader$models$supply_farm$interact_with(farm,other,game){
if(cljs.core.truth_(wwtrader.models.trader.cargo_space_available_QMARK_.call(null,other))){
var cost = new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(farm);
var trader = wwtrader.models.trader.take_money.call(null,wwtrader.models.trader.add_cargo.call(null,other,"supplies"),cost);
var game__$1 = wwtrader.models.game.swap_element.call(null,game,other,trader);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"got-resource","got-resource",606594387),"supplies",new cljs.core.Keyword(null,"cost","cost",-1094861735),cost,new cljs.core.Keyword(null,"game","game",-441523833),game__$1], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"note","note",1426297904),new cljs.core.Keyword(null,"cargo-full","cargo-full",-207539956),new cljs.core.Keyword(null,"game","game",-441523833),game], null);
}
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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
wwtrader.models.supply_farm.SupplyFarm = (function (id,coord,cost,__meta,__extmap,__hash){
this.id = id;
this.coord = coord;
this.cost = cost;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
wwtrader.models.supply_farm.SupplyFarm.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

wwtrader.models.supply_farm.SupplyFarm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k18421,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__18423 = (((k18421 instanceof cljs.core.Keyword))?k18421.fqn:null);
switch (G__18423) {
case "id":
return self__.id;

break;
case "coord":
return self__.coord;

break;
case "cost":
return self__.cost;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18421,else__17533__auto__);

}
});

wwtrader.models.supply_farm.SupplyFarm.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#wwtrader.models.supply-farm.SupplyFarm{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coord","coord",-1453656639),self__.coord],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cost","cost",-1094861735),self__.cost],null))], null),self__.__extmap));
});

wwtrader.models.supply_farm.SupplyFarm.prototype.cljs$core$IIterable$ = true;

wwtrader.models.supply_farm.SupplyFarm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18420){
var self__ = this;
var G__18420__$1 = this;
return (new cljs.core.RecordIter((0),G__18420__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"cost","cost",-1094861735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

wwtrader.models.supply_farm.SupplyFarm.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

wwtrader.models.supply_farm.SupplyFarm.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new wwtrader.models.supply_farm.SupplyFarm(self__.id,self__.coord,self__.cost,self__.__meta,self__.__extmap,self__.__hash));
});

wwtrader.models.supply_farm.SupplyFarm.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

wwtrader.models.supply_farm.SupplyFarm.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
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

wwtrader.models.supply_farm.SupplyFarm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
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

wwtrader.models.supply_farm.SupplyFarm.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"coord","coord",-1453656639),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"cost","cost",-1094861735),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new wwtrader.models.supply_farm.SupplyFarm(self__.id,self__.coord,self__.cost,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

wwtrader.models.supply_farm.SupplyFarm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__18420){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__18424 = cljs.core.keyword_identical_QMARK_;
var expr__18425 = k__17538__auto__;
if(cljs.core.truth_(pred__18424.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__18425))){
return (new wwtrader.models.supply_farm.SupplyFarm(G__18420,self__.coord,self__.cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18424.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639),expr__18425))){
return (new wwtrader.models.supply_farm.SupplyFarm(self__.id,G__18420,self__.cost,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18424.call(null,new cljs.core.Keyword(null,"cost","cost",-1094861735),expr__18425))){
return (new wwtrader.models.supply_farm.SupplyFarm(self__.id,self__.coord,G__18420,self__.__meta,self__.__extmap,null));
} else {
return (new wwtrader.models.supply_farm.SupplyFarm(self__.id,self__.coord,self__.cost,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__18420),null));
}
}
}
});

wwtrader.models.supply_farm.SupplyFarm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coord","coord",-1453656639),self__.coord],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cost","cost",-1094861735),self__.cost],null))], null),self__.__extmap));
});

wwtrader.models.supply_farm.SupplyFarm.prototype.wwtrader$models$element$Element$ = true;

wwtrader.models.supply_farm.SupplyFarm.prototype.wwtrader$models$element$Element$id$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return self__.id;
});

wwtrader.models.supply_farm.SupplyFarm.prototype.wwtrader$models$element$Element$priority$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return (1000);
});

wwtrader.models.supply_farm.SupplyFarm.prototype.wwtrader$models$element$Element$coord$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return self__.coord;
});

wwtrader.models.supply_farm.SupplyFarm.prototype.wwtrader$models$element$Element$coord$arity$2 = (function (elem,coord__$1){
var self__ = this;
var elem__$1 = this;
return cljs.core.assoc.call(null,elem__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639),coord__$1);
});

wwtrader.models.supply_farm.SupplyFarm.prototype.wwtrader$models$element$Element$process_turn$arity$2 = (function (elem,game){
var self__ = this;
var elem__$1 = this;
return wwtrader.models.supply_farm.process.call(null,elem__$1,game);
});

wwtrader.models.supply_farm.SupplyFarm.prototype.wwtrader$models$element$Element$interact_with$arity$3 = (function (elem,other,game){
var self__ = this;
var elem__$1 = this;
return wwtrader.models.supply_farm.interact_with.call(null,elem__$1,other,game);
});

wwtrader.models.supply_farm.SupplyFarm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__18420){
var self__ = this;
var this__17529__auto____$1 = this;
return (new wwtrader.models.supply_farm.SupplyFarm(self__.id,self__.coord,self__.cost,G__18420,self__.__extmap,self__.__hash));
});

wwtrader.models.supply_farm.SupplyFarm.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

wwtrader.models.supply_farm.SupplyFarm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"cost","cost",545669792,null)], null);
});

wwtrader.models.supply_farm.SupplyFarm.cljs$lang$type = true;

wwtrader.models.supply_farm.SupplyFarm.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"wwtrader.models.supply-farm/SupplyFarm");
});

wwtrader.models.supply_farm.SupplyFarm.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"wwtrader.models.supply-farm/SupplyFarm");
});

wwtrader.models.supply_farm.__GT_SupplyFarm = (function wwtrader$models$supply_farm$__GT_SupplyFarm(id,coord,cost){
return (new wwtrader.models.supply_farm.SupplyFarm(id,coord,cost,null,null,null));
});

wwtrader.models.supply_farm.map__GT_SupplyFarm = (function wwtrader$models$supply_farm$map__GT_SupplyFarm(G__18422){
return (new wwtrader.models.supply_farm.SupplyFarm(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__18422),new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(G__18422),new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(G__18422),null,cljs.core.dissoc.call(null,G__18422,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"cost","cost",-1094861735)),null));
});

/**
 * Creates a new SupplyFarm
 */
wwtrader.models.supply_farm.create = (function wwtrader$models$supply_farm$create(coord){
return wwtrader.models.supply_farm.__GT_SupplyFarm.call(null,cljs.core.gensym.call(null),coord,(1));
});
/**
 * Gets the cost of this supply farm
 */
wwtrader.models.supply_farm.cost = (function wwtrader$models$supply_farm$cost(farm){
return new cljs.core.Keyword(null,"cost","cost",-1094861735).cljs$core$IFn$_invoke$arity$1(farm);
});

//# sourceMappingURL=supply_farm.js.map?rel=1450953127777