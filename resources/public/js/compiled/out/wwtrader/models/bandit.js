// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.models.bandit');
goog.require('cljs.core');
goog.require('wwtrader.models.target');
goog.require('wwtrader.models.coordinate');
goog.require('wwtrader.models.trader');
goog.require('wwtrader.models.action');
goog.require('wwtrader.models.game');
goog.require('wwtrader.models.element');
goog.require('wwtrader.models.enemy');
/**
 * Finds the next coordinate to move to
 */
wwtrader.models.bandit.resolve_destination = (function wwtrader$models$bandit$resolve_destination(game,trader,elem){
var _PERCENT_ = (function (){var possible = wwtrader.models.game.possible_destinations.call(null,game,elem);
var sorted = wwtrader.models.coordinate.sort_by_distance.call(null,wwtrader.models.element.coord.call(null,trader),possible);
var lucky = cljs.core.first.call(null,sorted);
if(cljs.core.truth_(lucky)){
return lucky;
} else {
return wwtrader.models.element.coord.call(null,elem);
}
})();
if(!((_PERCENT_ == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))].join('')));
}

return _PERCENT_;
});
/**
 * Moves the bandit
 */
wwtrader.models.bandit.move = (function wwtrader$models$bandit$move(game,trader,elem){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.models.game.swap_element.call(null,game,elem,wwtrader.models.element.coord.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,elem,new cljs.core.Keyword(null,"move?","move?",-1908971187),false),new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),false),wwtrader.models.bandit.resolve_destination.call(null,game,trader,elem)))], null);
});
/**
 * Attacks the target
 */
wwtrader.models.bandit.attack = (function wwtrader$models$bandit$attack(game,target,elem){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),true,new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.models.target.take_damage.call(null,target,elem,wwtrader.models.game.swap_element.call(null,game,elem,cljs.core.assoc.call(null,elem,new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),true)))], null);
});
/**
 * True if the bandid has attacked on this turn
 */
wwtrader.models.bandit.attacked_QMARK_ = (function wwtrader$models$bandit$attacked_QMARK_(bandit){
return new cljs.core.Keyword(null,"attacked?","attacked?",2044455986).cljs$core$IFn$_invoke$arity$1(bandit);
});
/**
 * Verifies that the element is dead and removes it from the game. Calls
 *   given process-fn otherwise
 */
wwtrader.models.bandit.process_if_alive = (function wwtrader$models$bandit$process_if_alive(elem,result,process_fn){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(elem))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.models.game.purge.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(result),elem)], null);
} else {
return process_fn.call(null,elem,result);
}
});
/**
 * Processes the actual turn logic
 */
wwtrader.models.bandit.process_turn = (function wwtrader$models$bandit$process_turn(elem,result){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(result);
var target = wwtrader.models.game.find_target.call(null,game);
if(cljs.core.truth_(new cljs.core.Keyword(null,"move?","move?",-1908971187).cljs$core$IFn$_invoke$arity$1(elem))){
if(cljs.core.truth_(wwtrader.models.coordinate.adjacent_perpendicular_QMARK_.call(null,wwtrader.models.element.coord.call(null,target),wwtrader.models.element.coord.call(null,elem)))){
return wwtrader.models.bandit.attack.call(null,game,target,elem);
} else {
return wwtrader.models.bandit.move.call(null,game,target,elem);
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.models.game.swap_element.call(null,game,elem,cljs.core.assoc.call(null,cljs.core.assoc.call(null,elem,new cljs.core.Keyword(null,"move?","move?",-1908971187),true),new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),false))], null);
}
});
/**
 * Processes the turn from given actions
 */
wwtrader.models.bandit.process = (function wwtrader$models$bandit$process(elem,result){
return wwtrader.models.bandit.process_if_alive.call(null,elem,result,wwtrader.models.bandit.process_turn);
});
/**
 * Adds damage to the bandit
 */
wwtrader.models.bandit.add_damage = (function wwtrader$models$bandit$add_damage(bandit,game,damage){
return wwtrader.models.game.swap_element.call(null,game,bandit,cljs.core.assoc.call(null,bandit,new cljs.core.Keyword(null,"dead?","dead?",990391228),true,new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),true));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {wwtrader.models.element.Element}
 * @implements {wwtrader.models.enemy.Enemy}
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
wwtrader.models.bandit.Bandit = (function (id,coord,energy,move_QMARK_,attacked_QMARK_,__meta,__extmap,__hash){
this.id = id;
this.coord = coord;
this.energy = energy;
this.move_QMARK_ = move_QMARK_;
this.attacked_QMARK_ = attacked_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
wwtrader.models.bandit.Bandit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

wwtrader.models.bandit.Bandit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k18431,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__18433 = (((k18431 instanceof cljs.core.Keyword))?k18431.fqn:null);
switch (G__18433) {
case "id":
return self__.id;

break;
case "coord":
return self__.coord;

break;
case "energy":
return self__.energy;

break;
case "move?":
return self__.move_QMARK_;

break;
case "attacked?":
return self__.attacked_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18431,else__17533__auto__);

}
});

wwtrader.models.bandit.Bandit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#wwtrader.models.bandit.Bandit{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coord","coord",-1453656639),self__.coord],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"energy","energy",129856526),self__.energy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"move?","move?",-1908971187),self__.move_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),self__.attacked_QMARK_],null))], null),self__.__extmap));
});

wwtrader.models.bandit.Bandit.prototype.cljs$core$IIterable$ = true;

wwtrader.models.bandit.Bandit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18430){
var self__ = this;
var G__18430__$1 = this;
return (new cljs.core.RecordIter((0),G__18430__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"energy","energy",129856526),new cljs.core.Keyword(null,"move?","move?",-1908971187),new cljs.core.Keyword(null,"attacked?","attacked?",2044455986)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

wwtrader.models.bandit.Bandit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

wwtrader.models.bandit.Bandit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new wwtrader.models.bandit.Bandit(self__.id,self__.coord,self__.energy,self__.move_QMARK_,self__.attacked_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

wwtrader.models.bandit.Bandit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

wwtrader.models.bandit.Bandit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
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

wwtrader.models.bandit.Bandit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
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

wwtrader.models.bandit.Bandit.prototype.wwtrader$models$enemy$Enemy$ = true;

wwtrader.models.bandit.Bandit.prototype.wwtrader$models$enemy$Enemy$add_damage$arity$3 = (function (enemy,game,damage){
var self__ = this;
var enemy__$1 = this;
return wwtrader.models.bandit.add_damage.call(null,enemy__$1,game,damage);
});

wwtrader.models.bandit.Bandit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"coord","coord",-1453656639),null,new cljs.core.Keyword(null,"move?","move?",-1908971187),null,new cljs.core.Keyword(null,"energy","energy",129856526),null,new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new wwtrader.models.bandit.Bandit(self__.id,self__.coord,self__.energy,self__.move_QMARK_,self__.attacked_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

wwtrader.models.bandit.Bandit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__18430){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__18434 = cljs.core.keyword_identical_QMARK_;
var expr__18435 = k__17538__auto__;
if(cljs.core.truth_(pred__18434.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__18435))){
return (new wwtrader.models.bandit.Bandit(G__18430,self__.coord,self__.energy,self__.move_QMARK_,self__.attacked_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18434.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639),expr__18435))){
return (new wwtrader.models.bandit.Bandit(self__.id,G__18430,self__.energy,self__.move_QMARK_,self__.attacked_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18434.call(null,new cljs.core.Keyword(null,"energy","energy",129856526),expr__18435))){
return (new wwtrader.models.bandit.Bandit(self__.id,self__.coord,G__18430,self__.move_QMARK_,self__.attacked_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18434.call(null,new cljs.core.Keyword(null,"move?","move?",-1908971187),expr__18435))){
return (new wwtrader.models.bandit.Bandit(self__.id,self__.coord,self__.energy,G__18430,self__.attacked_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18434.call(null,new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),expr__18435))){
return (new wwtrader.models.bandit.Bandit(self__.id,self__.coord,self__.energy,self__.move_QMARK_,G__18430,self__.__meta,self__.__extmap,null));
} else {
return (new wwtrader.models.bandit.Bandit(self__.id,self__.coord,self__.energy,self__.move_QMARK_,self__.attacked_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__18430),null));
}
}
}
}
}
});

wwtrader.models.bandit.Bandit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coord","coord",-1453656639),self__.coord],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"energy","energy",129856526),self__.energy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"move?","move?",-1908971187),self__.move_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),self__.attacked_QMARK_],null))], null),self__.__extmap));
});

wwtrader.models.bandit.Bandit.prototype.wwtrader$models$element$Element$ = true;

wwtrader.models.bandit.Bandit.prototype.wwtrader$models$element$Element$id$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return self__.id;
});

wwtrader.models.bandit.Bandit.prototype.wwtrader$models$element$Element$priority$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return (100);
});

wwtrader.models.bandit.Bandit.prototype.wwtrader$models$element$Element$coord$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return self__.coord;
});

wwtrader.models.bandit.Bandit.prototype.wwtrader$models$element$Element$coord$arity$2 = (function (elem,coord__$1){
var self__ = this;
var elem__$1 = this;
return cljs.core.assoc.call(null,elem__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639),coord__$1);
});

wwtrader.models.bandit.Bandit.prototype.wwtrader$models$element$Element$process_turn$arity$2 = (function (elem,game){
var self__ = this;
var elem__$1 = this;
return wwtrader.models.bandit.process.call(null,elem__$1,game);
});

wwtrader.models.bandit.Bandit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__18430){
var self__ = this;
var this__17529__auto____$1 = this;
return (new wwtrader.models.bandit.Bandit(self__.id,self__.coord,self__.energy,self__.move_QMARK_,self__.attacked_QMARK_,G__18430,self__.__extmap,self__.__hash));
});

wwtrader.models.bandit.Bandit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

wwtrader.models.bandit.Bandit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"energy","energy",1770388053,null),new cljs.core.Symbol(null,"move?","move?",-268439660,null),new cljs.core.Symbol(null,"attacked?","attacked?",-609979783,null)], null);
});

wwtrader.models.bandit.Bandit.cljs$lang$type = true;

wwtrader.models.bandit.Bandit.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"wwtrader.models.bandit/Bandit");
});

wwtrader.models.bandit.Bandit.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"wwtrader.models.bandit/Bandit");
});

wwtrader.models.bandit.__GT_Bandit = (function wwtrader$models$bandit$__GT_Bandit(id,coord,energy,move_QMARK_,attacked_QMARK_){
return (new wwtrader.models.bandit.Bandit(id,coord,energy,move_QMARK_,attacked_QMARK_,null,null,null));
});

wwtrader.models.bandit.map__GT_Bandit = (function wwtrader$models$bandit$map__GT_Bandit(G__18432){
return (new wwtrader.models.bandit.Bandit(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__18432),new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(G__18432),new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(G__18432),new cljs.core.Keyword(null,"move?","move?",-1908971187).cljs$core$IFn$_invoke$arity$1(G__18432),new cljs.core.Keyword(null,"attacked?","attacked?",2044455986).cljs$core$IFn$_invoke$arity$1(G__18432),null,cljs.core.dissoc.call(null,G__18432,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"energy","energy",129856526),new cljs.core.Keyword(null,"move?","move?",-1908971187),new cljs.core.Keyword(null,"attacked?","attacked?",2044455986)),null));
});

wwtrader.models.bandit.bandit_type = wwtrader.models.bandit.Bandit;
/**
 * Creates a new Bandit
 */
wwtrader.models.bandit.create = (function wwtrader$models$bandit$create(coord){
return wwtrader.models.bandit.__GT_Bandit.call(null,cljs.core.gensym.call(null),coord,(100),false,false);
});

//# sourceMappingURL=bandit.js.map?rel=1450953127931