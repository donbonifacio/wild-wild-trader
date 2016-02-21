// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.models.god');
goog.require('cljs.core');
goog.require('wwtrader.models.desperado');
goog.require('wwtrader.models.coordinate');
goog.require('wwtrader.models.apache');
goog.require('wwtrader.models.trader');
goog.require('wwtrader.models.burglar');
goog.require('wwtrader.models.game');
goog.require('wwtrader.models.element');
goog.require('wwtrader.models.enemy');
goog.require('wwtrader.models.decoy');
goog.require('wwtrader.models.bandit');
/**
 * Returns a random enemy type
 */
wwtrader.models.god.random_enemy = (function wwtrader$models$god$random_enemy(){
var lucky = cljs.core.rand_int.call(null,(4));
var G__18471 = lucky;
switch (G__18471) {
case (0):
return wwtrader.models.desperado.create;

break;
case (1):
return wwtrader.models.burglar.create;

break;
case (2):
return wwtrader.models.apache.create;

break;
default:
return wwtrader.models.bandit.create;

}
});
/**
 * Adds a random enemy
 */
wwtrader.models.god.add_random_enemy = (function wwtrader$models$god$add_random_enemy(game){
return wwtrader.models.game.register.call(null,game,wwtrader.models.god.random_enemy.call(null).call(null,wwtrader.models.game.random_empty_coord.call(null,game)));
});
/**
 * The number of enemies to spawn on the given game
 */
wwtrader.models.god.enemies_to_spawn = (function wwtrader$models$god$enemies_to_spawn(game){
var trader = cljs.core.first.call(null,wwtrader.models.game.find_elements.call(null,game,wwtrader.models.trader.elem_type));
var curr_enemies = cljs.core.count.call(null,wwtrader.models.game.filter_elements.call(null,game,((function (trader){
return (function (p1__18473_SHARP_){
if(!((p1__18473_SHARP_ == null))){
if((false) || (p1__18473_SHARP_.wwtrader$models$enemy$Enemy$)){
return true;
} else {
if((!p1__18473_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,wwtrader.models.enemy.Enemy,p1__18473_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,wwtrader.models.enemy.Enemy,p1__18473_SHARP_);
}
});})(trader))
));
var more_enemies = ((1) + cljs.core.count.call(null,wwtrader.models.trader.cargo.call(null,trader)));
var to_generate = (more_enemies - curr_enemies);
return to_generate;
});
/**
 * Adds several enemies
 */
wwtrader.models.god.add_random_enemies = (function wwtrader$models$god$add_random_enemies(game){
var turn = wwtrader.models.game.turn.call(null,game);
if(cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,turn,(10)))){
var n = wwtrader.models.god.enemies_to_spawn.call(null,game);
var game__$1 = game;
while(true){
if((n <= (0))){
return game__$1;
} else {
var G__18476 = (n - (1));
var G__18477 = wwtrader.models.game.register.call(null,game__$1,wwtrader.models.god.random_enemy.call(null).call(null,wwtrader.models.game.random_empty_coord.call(null,game__$1)));
n = G__18476;
game__$1 = G__18477;
continue;
}
break;
}
} else {
return game;
}
});
/**
 * Processes the turn from given actions
 */
wwtrader.models.god.process = (function wwtrader$models$god$process(elem,result){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.models.god.add_random_enemies.call(null,wwtrader.models.game.inc_turn.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(result)))], null);
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
wwtrader.models.god.God = (function (id,__meta,__extmap,__hash){
this.id = id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
wwtrader.models.god.God.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

wwtrader.models.god.God.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k18479,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__18481 = (((k18479 instanceof cljs.core.Keyword))?k18479.fqn:null);
switch (G__18481) {
case "id":
return self__.id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18479,else__17533__auto__);

}
});

wwtrader.models.god.God.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#wwtrader.models.god.God{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

wwtrader.models.god.God.prototype.cljs$core$IIterable$ = true;

wwtrader.models.god.God.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18478){
var self__ = this;
var G__18478__$1 = this;
return (new cljs.core.RecordIter((0),G__18478__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

wwtrader.models.god.God.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

wwtrader.models.god.God.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new wwtrader.models.god.God(self__.id,self__.__meta,self__.__extmap,self__.__hash));
});

wwtrader.models.god.God.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

wwtrader.models.god.God.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
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

wwtrader.models.god.God.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
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

wwtrader.models.god.God.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new wwtrader.models.god.God(self__.id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

wwtrader.models.god.God.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__18478){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__18482 = cljs.core.keyword_identical_QMARK_;
var expr__18483 = k__17538__auto__;
if(cljs.core.truth_(pred__18482.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__18483))){
return (new wwtrader.models.god.God(G__18478,self__.__meta,self__.__extmap,null));
} else {
return (new wwtrader.models.god.God(self__.id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__18478),null));
}
});

wwtrader.models.god.God.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
});

wwtrader.models.god.God.prototype.wwtrader$models$element$Element$ = true;

wwtrader.models.god.God.prototype.wwtrader$models$element$Element$id$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return self__.id;
});

wwtrader.models.god.God.prototype.wwtrader$models$element$Element$priority$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return (10000);
});

wwtrader.models.god.God.prototype.wwtrader$models$element$Element$coord$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return wwtrader.models.coordinate.create.call(null,(-100),(-100));
});

wwtrader.models.god.God.prototype.wwtrader$models$element$Element$coord$arity$2 = (function (elem,coord){
var self__ = this;
var elem__$1 = this;
return elem__$1;
});

wwtrader.models.god.God.prototype.wwtrader$models$element$Element$process_turn$arity$2 = (function (elem,game){
var self__ = this;
var elem__$1 = this;
return wwtrader.models.god.process.call(null,elem__$1,game);
});

wwtrader.models.god.God.prototype.wwtrader$models$element$Element$interact_with$arity$3 = (function (elem,other,game){
var self__ = this;
var elem__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"game","game",-441523833),game], null);
});

wwtrader.models.god.God.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__18478){
var self__ = this;
var this__17529__auto____$1 = this;
return (new wwtrader.models.god.God(self__.id,G__18478,self__.__extmap,self__.__hash));
});

wwtrader.models.god.God.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

wwtrader.models.god.God.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null)], null);
});

wwtrader.models.god.God.cljs$lang$type = true;

wwtrader.models.god.God.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"wwtrader.models.god/God");
});

wwtrader.models.god.God.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"wwtrader.models.god/God");
});

wwtrader.models.god.__GT_God = (function wwtrader$models$god$__GT_God(id){
return (new wwtrader.models.god.God(id,null,null,null));
});

wwtrader.models.god.map__GT_God = (function wwtrader$models$god$map__GT_God(G__18480){
return (new wwtrader.models.god.God(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__18480),null,cljs.core.dissoc.call(null,G__18480,new cljs.core.Keyword(null,"id","id",-1388402092)),null));
});

/**
 * Creates a new God
 */
wwtrader.models.god.create = (function wwtrader$models$god$create(){
return wwtrader.models.god.__GT_God.call(null,cljs.core.gensym.call(null));
});

//# sourceMappingURL=god.js.map?rel=1450953128396