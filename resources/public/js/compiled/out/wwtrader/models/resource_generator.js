// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.models.resource_generator');
goog.require('cljs.core');
goog.require('wwtrader.models.element');
goog.require('wwtrader.models.trader');
goog.require('wwtrader.models.coordinate');
goog.require('wwtrader.models.game');
/**
 * Increments the cooldown to make the resource available
 */
wwtrader.models.resource_generator.increment_cooldown = (function wwtrader$models$resource_generator$increment_cooldown(generator){
var cooldown = ((1) + new cljs.core.Keyword(null,"cooldown","cooldown",-1178127572).cljs$core$IFn$_invoke$arity$1(generator));
if((cooldown >= new cljs.core.Keyword(null,"generation-time","generation-time",-1420400810).cljs$core$IFn$_invoke$arity$1(generator))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,generator,new cljs.core.Keyword(null,"cooldown","cooldown",-1178127572),cooldown),new cljs.core.Keyword(null,"available?","available?",760421264),true);
} else {
return cljs.core.assoc.call(null,generator,new cljs.core.Keyword(null,"cooldown","cooldown",-1178127572),cooldown);
}
});
/**
 * Processes the turn from given actions
 */
wwtrader.models.resource_generator.process = (function wwtrader$models$resource_generator$process(elem,result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"available?","available?",760421264).cljs$core$IFn$_invoke$arity$1(elem))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(result)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"incremented?","incremented?",-551314826),true,new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.models.game.swap_element.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(result),elem,wwtrader.models.resource_generator.increment_cooldown.call(null,elem))], null);
}
});
/**
 * Gets a new random genertion time
 */
wwtrader.models.resource_generator.random_generation_time = (function wwtrader$models$resource_generator$random_generation_time(){
return ((3) + cljs.core.rand_int.call(null,(10)));
});
/**
 * Resets the generator to start building a new resource
 */
wwtrader.models.resource_generator.reset = (function wwtrader$models$resource_generator$reset(generator){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,generator,new cljs.core.Keyword(null,"available?","available?",760421264),false),new cljs.core.Keyword(null,"generation-time","generation-time",-1420400810),wwtrader.models.resource_generator.random_generation_time.call(null)),new cljs.core.Keyword(null,"cooldown","cooldown",-1178127572),(0));
});
/**
 * Interacts with another element
 */
wwtrader.models.resource_generator.interact_with = (function wwtrader$models$resource_generator$interact_with(generator,other,game){
if(cljs.core.truth_(new cljs.core.Keyword(null,"available?","available?",760421264).cljs$core$IFn$_invoke$arity$1(generator))){
if(cljs.core.truth_(wwtrader.models.trader.cargo_space_available_QMARK_.call(null,other))){
var resource = new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(generator);
var trader = wwtrader.models.trader.add_cargo.call(null,other,resource);
var game__$1 = wwtrader.models.game.swap_element.call(null,wwtrader.models.game.swap_element.call(null,game,generator,wwtrader.models.resource_generator.reset.call(null,generator)),other,trader);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"got-resource","got-resource",606594387),resource,new cljs.core.Keyword(null,"generator-empty?","generator-empty?",636639087),false,new cljs.core.Keyword(null,"game","game",-441523833),game__$1], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"note","note",1426297904),new cljs.core.Keyword(null,"cargo-full","cargo-full",-207539956),new cljs.core.Keyword(null,"generator-empty?","generator-empty?",636639087),false,new cljs.core.Keyword(null,"game","game",-441523833),game], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"generator-empty?","generator-empty?",636639087),true,new cljs.core.Keyword(null,"game","game",-441523833),game], null);
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
wwtrader.models.resource_generator.ResourceGenerator = (function (id,coord,resource,available_QMARK_,cooldown,generation_time,__meta,__extmap,__hash){
this.id = id;
this.coord = coord;
this.resource = resource;
this.available_QMARK_ = available_QMARK_;
this.cooldown = cooldown;
this.generation_time = generation_time;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
wwtrader.models.resource_generator.ResourceGenerator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k22307,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__22309 = (((k22307 instanceof cljs.core.Keyword))?k22307.fqn:null);
switch (G__22309) {
case "id":
return self__.id;

break;
case "coord":
return self__.coord;

break;
case "resource":
return self__.resource;

break;
case "available?":
return self__.available_QMARK_;

break;
case "cooldown":
return self__.cooldown;

break;
case "generation-time":
return self__.generation_time;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22307,else__17533__auto__);

}
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#wwtrader.models.resource-generator.ResourceGenerator{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coord","coord",-1453656639),self__.coord],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resource","resource",251898836),self__.resource],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"available?","available?",760421264),self__.available_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cooldown","cooldown",-1178127572),self__.cooldown],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generation-time","generation-time",-1420400810),self__.generation_time],null))], null),self__.__extmap));
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.cljs$core$IIterable$ = true;

wwtrader.models.resource_generator.ResourceGenerator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22306){
var self__ = this;
var G__22306__$1 = this;
return (new cljs.core.RecordIter((0),G__22306__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"available?","available?",760421264),new cljs.core.Keyword(null,"cooldown","cooldown",-1178127572),new cljs.core.Keyword(null,"generation-time","generation-time",-1420400810)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new wwtrader.models.resource_generator.ResourceGenerator(self__.id,self__.coord,self__.resource,self__.available_QMARK_,self__.cooldown,self__.generation_time,self__.__meta,self__.__extmap,self__.__hash));
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
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

wwtrader.models.resource_generator.ResourceGenerator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
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

wwtrader.models.resource_generator.ResourceGenerator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"coord","coord",-1453656639),null,new cljs.core.Keyword(null,"cooldown","cooldown",-1178127572),null,new cljs.core.Keyword(null,"available?","available?",760421264),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"resource","resource",251898836),null,new cljs.core.Keyword(null,"generation-time","generation-time",-1420400810),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new wwtrader.models.resource_generator.ResourceGenerator(self__.id,self__.coord,self__.resource,self__.available_QMARK_,self__.cooldown,self__.generation_time,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__22306){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__22310 = cljs.core.keyword_identical_QMARK_;
var expr__22311 = k__17538__auto__;
if(cljs.core.truth_(pred__22310.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__22311))){
return (new wwtrader.models.resource_generator.ResourceGenerator(G__22306,self__.coord,self__.resource,self__.available_QMARK_,self__.cooldown,self__.generation_time,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22310.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639),expr__22311))){
return (new wwtrader.models.resource_generator.ResourceGenerator(self__.id,G__22306,self__.resource,self__.available_QMARK_,self__.cooldown,self__.generation_time,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22310.call(null,new cljs.core.Keyword(null,"resource","resource",251898836),expr__22311))){
return (new wwtrader.models.resource_generator.ResourceGenerator(self__.id,self__.coord,G__22306,self__.available_QMARK_,self__.cooldown,self__.generation_time,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22310.call(null,new cljs.core.Keyword(null,"available?","available?",760421264),expr__22311))){
return (new wwtrader.models.resource_generator.ResourceGenerator(self__.id,self__.coord,self__.resource,G__22306,self__.cooldown,self__.generation_time,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22310.call(null,new cljs.core.Keyword(null,"cooldown","cooldown",-1178127572),expr__22311))){
return (new wwtrader.models.resource_generator.ResourceGenerator(self__.id,self__.coord,self__.resource,self__.available_QMARK_,G__22306,self__.generation_time,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22310.call(null,new cljs.core.Keyword(null,"generation-time","generation-time",-1420400810),expr__22311))){
return (new wwtrader.models.resource_generator.ResourceGenerator(self__.id,self__.coord,self__.resource,self__.available_QMARK_,self__.cooldown,G__22306,self__.__meta,self__.__extmap,null));
} else {
return (new wwtrader.models.resource_generator.ResourceGenerator(self__.id,self__.coord,self__.resource,self__.available_QMARK_,self__.cooldown,self__.generation_time,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__22306),null));
}
}
}
}
}
}
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coord","coord",-1453656639),self__.coord],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resource","resource",251898836),self__.resource],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"available?","available?",760421264),self__.available_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cooldown","cooldown",-1178127572),self__.cooldown],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generation-time","generation-time",-1420400810),self__.generation_time],null))], null),self__.__extmap));
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.wwtrader$models$element$Element$ = true;

wwtrader.models.resource_generator.ResourceGenerator.prototype.wwtrader$models$element$Element$id$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return self__.id;
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.wwtrader$models$element$Element$priority$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return (1000);
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.wwtrader$models$element$Element$coord$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return self__.coord;
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.wwtrader$models$element$Element$coord$arity$2 = (function (elem,coord__$1){
var self__ = this;
var elem__$1 = this;
return cljs.core.assoc.call(null,elem__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639),coord__$1);
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.wwtrader$models$element$Element$process_turn$arity$2 = (function (elem,game){
var self__ = this;
var elem__$1 = this;
return wwtrader.models.resource_generator.process.call(null,elem__$1,game);
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.wwtrader$models$element$Element$interact_with$arity$3 = (function (elem,other,game){
var self__ = this;
var elem__$1 = this;
return wwtrader.models.resource_generator.interact_with.call(null,elem__$1,other,game);
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__22306){
var self__ = this;
var this__17529__auto____$1 = this;
return (new wwtrader.models.resource_generator.ResourceGenerator(self__.id,self__.coord,self__.resource,self__.available_QMARK_,self__.cooldown,self__.generation_time,G__22306,self__.__extmap,self__.__hash));
});

wwtrader.models.resource_generator.ResourceGenerator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

wwtrader.models.resource_generator.ResourceGenerator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"resource","resource",1892430363,null),new cljs.core.Symbol(null,"available?","available?",-1894014505,null),new cljs.core.Symbol(null,"cooldown","cooldown",462403955,null),new cljs.core.Symbol(null,"generation-time","generation-time",220130717,null)], null);
});

wwtrader.models.resource_generator.ResourceGenerator.cljs$lang$type = true;

wwtrader.models.resource_generator.ResourceGenerator.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"wwtrader.models.resource-generator/ResourceGenerator");
});

wwtrader.models.resource_generator.ResourceGenerator.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"wwtrader.models.resource-generator/ResourceGenerator");
});

wwtrader.models.resource_generator.__GT_ResourceGenerator = (function wwtrader$models$resource_generator$__GT_ResourceGenerator(id,coord,resource,available_QMARK_,cooldown,generation_time){
return (new wwtrader.models.resource_generator.ResourceGenerator(id,coord,resource,available_QMARK_,cooldown,generation_time,null,null,null));
});

wwtrader.models.resource_generator.map__GT_ResourceGenerator = (function wwtrader$models$resource_generator$map__GT_ResourceGenerator(G__22308){
return (new wwtrader.models.resource_generator.ResourceGenerator(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__22308),new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(G__22308),new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(G__22308),new cljs.core.Keyword(null,"available?","available?",760421264).cljs$core$IFn$_invoke$arity$1(G__22308),new cljs.core.Keyword(null,"cooldown","cooldown",-1178127572).cljs$core$IFn$_invoke$arity$1(G__22308),new cljs.core.Keyword(null,"generation-time","generation-time",-1420400810).cljs$core$IFn$_invoke$arity$1(G__22308),null,cljs.core.dissoc.call(null,G__22308,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"available?","available?",760421264),new cljs.core.Keyword(null,"cooldown","cooldown",-1178127572),new cljs.core.Keyword(null,"generation-time","generation-time",-1420400810)),null));
});

/**
 * Creates a new ResourceGenerator
 */
wwtrader.models.resource_generator.create = (function wwtrader$models$resource_generator$create(var_args){
var args22314 = [];
var len__17974__auto___22317 = arguments.length;
var i__17975__auto___22318 = (0);
while(true){
if((i__17975__auto___22318 < len__17974__auto___22317)){
args22314.push((arguments[i__17975__auto___22318]));

var G__22319 = (i__17975__auto___22318 + (1));
i__17975__auto___22318 = G__22319;
continue;
} else {
}
break;
}

var G__22316 = args22314.length;
switch (G__22316) {
case 1:
return wwtrader.models.resource_generator.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wwtrader.models.resource_generator.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22314.length)].join('')));

}
});

wwtrader.models.resource_generator.create.cljs$core$IFn$_invoke$arity$1 = (function (coord){
return wwtrader.models.resource_generator.create.call(null,coord,"gem");
});

wwtrader.models.resource_generator.create.cljs$core$IFn$_invoke$arity$2 = (function (coord,resource){
return wwtrader.models.resource_generator.__GT_ResourceGenerator.call(null,cljs.core.gensym.call(null),coord,resource,true,(3),wwtrader.models.resource_generator.random_generation_time.call(null));
});

wwtrader.models.resource_generator.create.cljs$lang$maxFixedArity = 2;
/**
 * Gets the resource that this generator is processing
 */
wwtrader.models.resource_generator.resource = (function wwtrader$models$resource_generator$resource(generator){
return new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(generator);
});
/**
 * True if this generator has a resource available
 */
wwtrader.models.resource_generator.available_QMARK_ = (function wwtrader$models$resource_generator$available_QMARK_(generator){
return new cljs.core.Keyword(null,"available?","available?",760421264).cljs$core$IFn$_invoke$arity$1(generator);
});

//# sourceMappingURL=resource_generator.js.map?rel=1450953131412