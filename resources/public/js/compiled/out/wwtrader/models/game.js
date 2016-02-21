// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.models.game');
goog.require('cljs.core');
goog.require('wwtrader.models.element');
goog.require('wwtrader.models.target');
goog.require('wwtrader.models.coordinate');
goog.require('wwtrader.models.county');

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
wwtrader.models.game.Game = (function (county,player_action,turn,camera,__meta,__extmap,__hash){
this.county = county;
this.player_action = player_action;
this.turn = turn;
this.camera = camera;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
wwtrader.models.game.Game.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

wwtrader.models.game.Game.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k18071,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__18073 = (((k18071 instanceof cljs.core.Keyword))?k18071.fqn:null);
switch (G__18073) {
case "county":
return self__.county;

break;
case "player-action":
return self__.player_action;

break;
case "turn":
return self__.turn;

break;
case "camera":
return self__.camera;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18071,else__17533__auto__);

}
});

wwtrader.models.game.Game.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#wwtrader.models.game.Game{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"county","county",-1347113013),self__.county],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"player-action","player-action",1765283357),self__.player_action],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"turn","turn",75759344),self__.turn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null))], null),self__.__extmap));
});

wwtrader.models.game.Game.prototype.cljs$core$IIterable$ = true;

wwtrader.models.game.Game.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18070){
var self__ = this;
var G__18070__$1 = this;
return (new cljs.core.RecordIter((0),G__18070__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"county","county",-1347113013),new cljs.core.Keyword(null,"player-action","player-action",1765283357),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"camera","camera",-1190348585)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

wwtrader.models.game.Game.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

wwtrader.models.game.Game.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new wwtrader.models.game.Game(self__.county,self__.player_action,self__.turn,self__.camera,self__.__meta,self__.__extmap,self__.__hash));
});

wwtrader.models.game.Game.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

wwtrader.models.game.Game.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
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

wwtrader.models.game.Game.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
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

wwtrader.models.game.Game.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"county","county",-1347113013),null,new cljs.core.Keyword(null,"turn","turn",75759344),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null,new cljs.core.Keyword(null,"player-action","player-action",1765283357),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new wwtrader.models.game.Game(self__.county,self__.player_action,self__.turn,self__.camera,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

wwtrader.models.game.Game.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__18070){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__18074 = cljs.core.keyword_identical_QMARK_;
var expr__18075 = k__17538__auto__;
if(cljs.core.truth_(pred__18074.call(null,new cljs.core.Keyword(null,"county","county",-1347113013),expr__18075))){
return (new wwtrader.models.game.Game(G__18070,self__.player_action,self__.turn,self__.camera,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18074.call(null,new cljs.core.Keyword(null,"player-action","player-action",1765283357),expr__18075))){
return (new wwtrader.models.game.Game(self__.county,G__18070,self__.turn,self__.camera,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18074.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__18075))){
return (new wwtrader.models.game.Game(self__.county,self__.player_action,G__18070,self__.camera,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18074.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__18075))){
return (new wwtrader.models.game.Game(self__.county,self__.player_action,self__.turn,G__18070,self__.__meta,self__.__extmap,null));
} else {
return (new wwtrader.models.game.Game(self__.county,self__.player_action,self__.turn,self__.camera,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__18070),null));
}
}
}
}
});

wwtrader.models.game.Game.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"county","county",-1347113013),self__.county],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"player-action","player-action",1765283357),self__.player_action],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"turn","turn",75759344),self__.turn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null))], null),self__.__extmap));
});

wwtrader.models.game.Game.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__18070){
var self__ = this;
var this__17529__auto____$1 = this;
return (new wwtrader.models.game.Game(self__.county,self__.player_action,self__.turn,self__.camera,G__18070,self__.__extmap,self__.__hash));
});

wwtrader.models.game.Game.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

wwtrader.models.game.Game.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"county","county",293418514,null),new cljs.core.Symbol(null,"player-action","player-action",-889152412,null),new cljs.core.Symbol(null,"turn","turn",1716290871,null),new cljs.core.Symbol(null,"camera","camera",450182942,null)], null);
});

wwtrader.models.game.Game.cljs$lang$type = true;

wwtrader.models.game.Game.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"wwtrader.models.game/Game");
});

wwtrader.models.game.Game.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"wwtrader.models.game/Game");
});

wwtrader.models.game.__GT_Game = (function wwtrader$models$game$__GT_Game(county,player_action,turn,camera){
return (new wwtrader.models.game.Game(county,player_action,turn,camera,null,null,null));
});

wwtrader.models.game.map__GT_Game = (function wwtrader$models$game$map__GT_Game(G__18072){
return (new wwtrader.models.game.Game(new cljs.core.Keyword(null,"county","county",-1347113013).cljs$core$IFn$_invoke$arity$1(G__18072),new cljs.core.Keyword(null,"player-action","player-action",1765283357).cljs$core$IFn$_invoke$arity$1(G__18072),new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(G__18072),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__18072),null,cljs.core.dissoc.call(null,G__18072,new cljs.core.Keyword(null,"county","county",-1347113013),new cljs.core.Keyword(null,"player-action","player-action",1765283357),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"camera","camera",-1190348585)),null));
});

/**
 * Creates a new game
 */
wwtrader.models.game.create = (function wwtrader$models$game$create(var_args){
var args18078 = [];
var len__17974__auto___18081 = arguments.length;
var i__17975__auto___18082 = (0);
while(true){
if((i__17975__auto___18082 < len__17974__auto___18081)){
args18078.push((arguments[i__17975__auto___18082]));

var G__18083 = (i__17975__auto___18082 + (1));
i__17975__auto___18082 = G__18083;
continue;
} else {
}
break;
}

var G__18080 = args18078.length;
switch (G__18080) {
case 0:
return wwtrader.models.game.create.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return wwtrader.models.game.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18078.length)].join('')));

}
});

wwtrader.models.game.create.cljs$core$IFn$_invoke$arity$0 = (function (){
return wwtrader.models.game.create.call(null,(3),(3));
});

wwtrader.models.game.create.cljs$core$IFn$_invoke$arity$2 = (function (w,h){
return wwtrader.models.game.map__GT_Game.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"county","county",-1347113013),wwtrader.models.county.create.call(null,w,h),new cljs.core.Keyword(null,"turn","turn",75759344),(0)], null));
});

wwtrader.models.game.create.cljs$lang$maxFixedArity = 2;
/**
 * Gets/sets the current camera
 */
wwtrader.models.game.camera = (function wwtrader$models$game$camera(var_args){
var args18085 = [];
var len__17974__auto___18088 = arguments.length;
var i__17975__auto___18089 = (0);
while(true){
if((i__17975__auto___18089 < len__17974__auto___18088)){
args18085.push((arguments[i__17975__auto___18089]));

var G__18090 = (i__17975__auto___18089 + (1));
i__17975__auto___18089 = G__18090;
continue;
} else {
}
break;
}

var G__18087 = args18085.length;
switch (G__18087) {
case 1:
return wwtrader.models.game.camera.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wwtrader.models.game.camera.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18085.length)].join('')));

}
});

wwtrader.models.game.camera.cljs$core$IFn$_invoke$arity$1 = (function (game){
return new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(game);
});

wwtrader.models.game.camera.cljs$core$IFn$_invoke$arity$2 = (function (game,camera){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera);
});

wwtrader.models.game.camera.cljs$lang$maxFixedArity = 2;
/**
 * Increments the turn
 */
wwtrader.models.game.inc_turn = (function wwtrader$models$game$inc_turn(game){
return cljs.core.update.call(null,game,new cljs.core.Keyword(null,"turn","turn",75759344),cljs.core.inc);
});
/**
 * Gets the game's current turn
 */
wwtrader.models.game.turn = (function wwtrader$models$game$turn(game){
return new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(game);
});
/**
 * Gets the county
 */
wwtrader.models.game.county = (function wwtrader$models$game$county(game){
return new cljs.core.Keyword(null,"county","county",-1347113013).cljs$core$IFn$_invoke$arity$1(game);
});
/**
 * Gets all elements on the map
 */
wwtrader.models.game.elements = (function wwtrader$models$game$elements(game){
return cljs.core.vals.call(null,wwtrader.models.county.elements.call(null,new cljs.core.Keyword(null,"county","county",-1347113013).cljs$core$IFn$_invoke$arity$1(game)));
});
/**
 * Registers a new element on a given coordinate
 */
wwtrader.models.game.register = (function wwtrader$models$game$register(game,elem){
var current_county = new cljs.core.Keyword(null,"county","county",-1347113013).cljs$core$IFn$_invoke$arity$1(game);
var coord = wwtrader.models.element.coord.call(null,elem);
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"county","county",-1347113013),wwtrader.models.county.register.call(null,current_county,coord,elem));
});
/**
 * Removes the given element from the game
 */
wwtrader.models.game.purge = (function wwtrader$models$game$purge(game,elem){
var current_county = new cljs.core.Keyword(null,"county","county",-1347113013).cljs$core$IFn$_invoke$arity$1(game);
var coord = wwtrader.models.element.coord.call(null,elem);
if(cljs.core.truth_(coord)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Trying to purge element without coordinate "),cljs.core.str(cljs.core.pr_str.call(null,elem)),cljs.core.str(cljs.core.pr_str.call(null,game))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"coord","coord",186874888,null)))].join('')));
}

return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"county","county",-1347113013),wwtrader.models.county.purge.call(null,current_county,coord,elem));
});
/**
 * Gets the element, if any, at the given coordinate
 */
wwtrader.models.game.at = (function wwtrader$models$game$at(game,coord){
if(cljs.core.truth_(coord)){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"county","county",-1347113013).cljs$core$IFn$_invoke$arity$1(game)),coord);
} else {
return null;
}
});
/**
 * Sets the player action on the current game
 */
wwtrader.models.game.player_action = (function wwtrader$models$game$player_action(var_args){
var args18092 = [];
var len__17974__auto___18095 = arguments.length;
var i__17975__auto___18096 = (0);
while(true){
if((i__17975__auto___18096 < len__17974__auto___18095)){
args18092.push((arguments[i__17975__auto___18096]));

var G__18097 = (i__17975__auto___18096 + (1));
i__17975__auto___18096 = G__18097;
continue;
} else {
}
break;
}

var G__18094 = args18092.length;
switch (G__18094) {
case 1:
return wwtrader.models.game.player_action.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wwtrader.models.game.player_action.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18092.length)].join('')));

}
});

wwtrader.models.game.player_action.cljs$core$IFn$_invoke$arity$1 = (function (game){
return new cljs.core.Keyword(null,"player-action","player-action",1765283357).cljs$core$IFn$_invoke$arity$1(game);
});

wwtrader.models.game.player_action.cljs$core$IFn$_invoke$arity$2 = (function (game,player_action){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"player-action","player-action",1765283357),player_action);
});

wwtrader.models.game.player_action.cljs$lang$maxFixedArity = 2;
/**
 * Swaps an element for another
 */
wwtrader.models.game.swap_element = (function wwtrader$models$game$swap_element(game,elem,new_elem){
return wwtrader.models.game.register.call(null,wwtrader.models.game.purge.call(null,game,elem),new_elem);
});
/**
 * True if the given coordinate is not possible to move into
 */
wwtrader.models.game.invalid_destination_QMARK_ = (function wwtrader$models$game$invalid_destination_QMARK_(game,coord){
var x = wwtrader.models.coordinate.x.call(null,coord);
var y = wwtrader.models.coordinate.y.call(null,coord);
var county = wwtrader.models.game.county.call(null,game);
var w = wwtrader.models.county.width.call(null,county);
var h = wwtrader.models.county.height.call(null,county);
return ((x < (0))) || ((y < (0))) || ((x >= w)) || ((y >= h));
});
/**
 * Finds elements by type
 */
wwtrader.models.game.find_elements = (function wwtrader$models$game$find_elements(game,elem_type){
return cljs.core.filter.call(null,(function (p1__18099_SHARP_){
return (p1__18099_SHARP_ instanceof elem_type);
}),wwtrader.models.game.elements.call(null,game));
});
/**
 * Finds elements that satisfy pred
 */
wwtrader.models.game.filter_elements = (function wwtrader$models$game$filter_elements(game,pred){
return cljs.core.filter.call(null,pred,wwtrader.models.game.elements.call(null,game));
});
wwtrader.models.game.element_value_sorter = cljs.core.comp.call(null,cljs.core._,wwtrader.models.target.target_value);
/**
 * Finds the current element that all the foes should target
 */
wwtrader.models.game.find_target = (function wwtrader$models$game$find_target(game){
return cljs.core.first.call(null,cljs.core.sort_by.call(null,wwtrader.models.game.element_value_sorter,cljs.core.filter.call(null,(function (p1__18100_SHARP_){
if(!((p1__18100_SHARP_ == null))){
if((false) || (p1__18100_SHARP_.wwtrader$models$target$Target$)){
return true;
} else {
if((!p1__18100_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,wwtrader.models.target.Target,p1__18100_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,wwtrader.models.target.Target,p1__18100_SHARP_);
}
}),wwtrader.models.game.elements.call(null,game))));
});
/**
 * Checks if it's possible to move to the given coordinate
 */
wwtrader.models.game.possible_move_QMARK_ = (function wwtrader$models$game$possible_move_QMARK_(game,coord){
return (cljs.core.not.call(null,wwtrader.models.game.invalid_destination_QMARK_.call(null,game,coord))) && (cljs.core.not.call(null,wwtrader.models.game.at.call(null,game,coord)));
});
/**
 * Gets the possible destinations for a given element
 */
wwtrader.models.game.possible_destinations = (function wwtrader$models$game$possible_destinations(game,elem){
var c = wwtrader.models.element.coord.call(null,elem);
var possible = cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,wwtrader.models.coordinate.offset.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))),wwtrader.models.coordinate.offset.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null))),wwtrader.models.coordinate.offset.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null))),wwtrader.models.coordinate.offset.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)));
return cljs.core.reduce.call(null,((function (c,possible){
return (function (all,curr){
if(cljs.core.truth_(wwtrader.models.game.possible_move_QMARK_.call(null,game,curr))){
return cljs.core.conj.call(null,all,curr);
} else {
return all;
}
});})(c,possible))
,cljs.core.PersistentVector.EMPTY,possible);
});
/**
 * True if the given coordinate in on the game's camera
 */
wwtrader.models.game.in_camera_QMARK_ = (function wwtrader$models$game$in_camera_QMARK_(game,coord){
var temp__4653__auto__ = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core.truth_(temp__4653__auto__)){
var camera = temp__4653__auto__;
var lx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(camera));
var rx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(camera));
var ly = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(camera));
var ry = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(camera));
var map__18105 = coord;
var map__18105__$1 = ((((!((map__18105 == null)))?((((map__18105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18105):map__18105);
var x = cljs.core.get.call(null,map__18105__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__18105__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((x >= lx)) && ((y >= ly)) && ((x <= rx)) && ((y <= ry));
} else {
return null;
}
});
/**
 * Given a random coordinate, will ajust it if a camera is present
 */
wwtrader.models.game.consider_camera = (function wwtrader$models$game$consider_camera(coord,game){
var temp__4651__auto__ = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core.truth_(temp__4651__auto__)){
var camera = temp__4651__auto__;
var map__18109 = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(camera);
var map__18109__$1 = ((((!((map__18109 == null)))?((((map__18109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18109):map__18109);
var x = cljs.core.get.call(null,map__18109__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__18109__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return wwtrader.models.coordinate.offset.call(null,coord,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return coord;
}
});
/**
 * Gets a coordinate that it's empty
 */
wwtrader.models.game.random_empty_coord = (function wwtrader$models$game$random_empty_coord(game){
while(true){
var county = wwtrader.models.game.county.call(null,game);
var w = (8);
var h = (8);
var lucky = wwtrader.models.game.consider_camera.call(null,wwtrader.models.coordinate.create.call(null,cljs.core.rand_int.call(null,h),cljs.core.rand_int.call(null,w)),game);
if(cljs.core.not.call(null,wwtrader.models.game.at.call(null,game,lucky))){
return lucky;
} else {
var G__18111 = game;
game = G__18111;
continue;
}
break;
}
});

//# sourceMappingURL=game.js.map?rel=1450953126202