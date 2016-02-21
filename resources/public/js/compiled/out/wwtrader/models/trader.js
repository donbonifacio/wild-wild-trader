// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.models.trader');
goog.require('cljs.core');
goog.require('wwtrader.models.target');
goog.require('wwtrader.models.coordinate');
goog.require('wwtrader.models.action');
goog.require('wwtrader.models.game');
goog.require('wwtrader.models.element');
goog.require('wwtrader.models.enemy');
goog.require('wwtrader.models.decoy');
if(typeof wwtrader.models.trader.process_action !== 'undefined'){
} else {
wwtrader.models.trader.process_action = (function (){var method_table__17829__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17830__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17831__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17832__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17833__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"wwtrader.models.trader","process-action"),((function (method_table__17829__auto__,prefer_table__17830__auto__,method_cache__17831__auto__,cached_hierarchy__17832__auto__,hierarchy__17833__auto__){
return (function (action,elem,game){
return new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(action);
});})(method_table__17829__auto__,prefer_table__17830__auto__,method_cache__17831__auto__,cached_hierarchy__17832__auto__,hierarchy__17833__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17833__auto__,method_table__17829__auto__,prefer_table__17830__auto__,method_cache__17831__auto__,cached_hierarchy__17832__auto__));
})();
}
if(typeof wwtrader.models.trader.process_move_action !== 'undefined'){
} else {
wwtrader.models.trader.process_move_action = (function (){var method_table__17829__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17830__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17831__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17832__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17833__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"wwtrader.models.trader","process-move-action"),((function (method_table__17829__auto__,prefer_table__17830__auto__,method_cache__17831__auto__,cached_hierarchy__17832__auto__,hierarchy__17833__auto__){
return (function (action,elem,game,previous_coord){
return new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(action);
});})(method_table__17829__auto__,prefer_table__17830__auto__,method_cache__17831__auto__,cached_hierarchy__17832__auto__,hierarchy__17833__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17833__auto__,method_table__17829__auto__,prefer_table__17830__auto__,method_cache__17831__auto__,cached_hierarchy__17832__auto__));
})();
}
/**
 * Interacts with another element
 */
wwtrader.models.trader.interact = (function wwtrader$models$trader$interact(game,elem,new_coord){
return wwtrader.models.element.interact_with.call(null,wwtrader.models.game.at.call(null,game,new_coord),elem,game);
});
/**
 * Handles the trader's hitpoints
 */
wwtrader.models.trader.hitpoints = (function wwtrader$models$trader$hitpoints(var_args){
var args18135 = [];
var len__17974__auto___18138 = arguments.length;
var i__17975__auto___18139 = (0);
while(true){
if((i__17975__auto___18139 < len__17974__auto___18138)){
args18135.push((arguments[i__17975__auto___18139]));

var G__18140 = (i__17975__auto___18139 + (1));
i__17975__auto___18139 = G__18140;
continue;
} else {
}
break;
}

var G__18137 = args18135.length;
switch (G__18137) {
case 1:
return wwtrader.models.trader.hitpoints.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wwtrader.models.trader.hitpoints.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18135.length)].join('')));

}
});

wwtrader.models.trader.hitpoints.cljs$core$IFn$_invoke$arity$1 = (function (trader){
return new cljs.core.Keyword(null,"hitpoints","hitpoints",-575579159).cljs$core$IFn$_invoke$arity$1(trader);
});

wwtrader.models.trader.hitpoints.cljs$core$IFn$_invoke$arity$2 = (function (trader,new_hitpoints){
return cljs.core.assoc.call(null,trader,new cljs.core.Keyword(null,"hitpoints","hitpoints",-575579159),new_hitpoints);
});

wwtrader.models.trader.hitpoints.cljs$lang$maxFixedArity = 2;
/**
 * Handles the trader's energy
 */
wwtrader.models.trader.energy = (function wwtrader$models$trader$energy(var_args){
var args18142 = [];
var len__17974__auto___18145 = arguments.length;
var i__17975__auto___18146 = (0);
while(true){
if((i__17975__auto___18146 < len__17974__auto___18145)){
args18142.push((arguments[i__17975__auto___18146]));

var G__18147 = (i__17975__auto___18146 + (1));
i__17975__auto___18146 = G__18147;
continue;
} else {
}
break;
}

var G__18144 = args18142.length;
switch (G__18144) {
case 1:
return wwtrader.models.trader.energy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wwtrader.models.trader.energy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18142.length)].join('')));

}
});

wwtrader.models.trader.energy.cljs$core$IFn$_invoke$arity$1 = (function (trader){
return new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(trader);
});

wwtrader.models.trader.energy.cljs$core$IFn$_invoke$arity$2 = (function (trader,new_energy){
return cljs.core.assoc.call(null,trader,new cljs.core.Keyword(null,"energy","energy",129856526),new_energy);
});

wwtrader.models.trader.energy.cljs$lang$maxFixedArity = 2;
/**
 * Removes energy from the trader
 */
wwtrader.models.trader.take_energy = (function wwtrader$models$trader$take_energy(trader,taken_energy){
return cljs.core.assoc.call(null,trader,new cljs.core.Keyword(null,"energy","energy",129856526),(wwtrader.models.trader.energy.call(null,trader) - taken_energy));
});
/**
 * Adds damage to the trader
 */
wwtrader.models.trader.add_damage = (function wwtrader$models$trader$add_damage(trader){
return cljs.core.update.call(null,cljs.core.update.call(null,trader,new cljs.core.Keyword(null,"hitpoints","hitpoints",-575579159),cljs.core.dec),new cljs.core.Keyword(null,"damage-taken","damage-taken",-199035312),cljs.core.inc);
});
/**
 * Damage taken on the turn
 */
wwtrader.models.trader.damage_taken = (function wwtrader$models$trader$damage_taken(trader){
return new cljs.core.Keyword(null,"damage-taken","damage-taken",-199035312).cljs$core$IFn$_invoke$arity$1(trader);
});
/**
 * Sets an action that will be run when the trader moves
 */
wwtrader.models.trader.on_move_action = (function wwtrader$models$trader$on_move_action(var_args){
var args18149 = [];
var len__17974__auto___18152 = arguments.length;
var i__17975__auto___18153 = (0);
while(true){
if((i__17975__auto___18153 < len__17974__auto___18152)){
args18149.push((arguments[i__17975__auto___18153]));

var G__18154 = (i__17975__auto___18153 + (1));
i__17975__auto___18153 = G__18154;
continue;
} else {
}
break;
}

var G__18151 = args18149.length;
switch (G__18151) {
case 1:
return wwtrader.models.trader.on_move_action.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wwtrader.models.trader.on_move_action.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18149.length)].join('')));

}
});

wwtrader.models.trader.on_move_action.cljs$core$IFn$_invoke$arity$1 = (function (trader){
return new cljs.core.Keyword(null,"on-move-action","on-move-action",1643367780).cljs$core$IFn$_invoke$arity$1(trader);
});

wwtrader.models.trader.on_move_action.cljs$core$IFn$_invoke$arity$2 = (function (trader,action){
return cljs.core.assoc.call(null,trader,new cljs.core.Keyword(null,"on-move-action","on-move-action",1643367780),action);
});

wwtrader.models.trader.on_move_action.cljs$lang$maxFixedArity = 2;
/**
 * Removes on-move-action
 */
wwtrader.models.trader.clear_on_move_action = (function wwtrader$models$trader$clear_on_move_action(trader){
return cljs.core.assoc.call(null,trader,new cljs.core.Keyword(null,"on-move-action","on-move-action",1643367780),null);
});
/**
 * Checks if the trader has an on-move-action and runs it
 */
wwtrader.models.trader.process_on_move_action = (function wwtrader$models$trader$process_on_move_action(game,trader,previous_coord){
var temp__4651__auto__ = wwtrader.models.trader.on_move_action.call(null,trader);
if(cljs.core.truth_(temp__4651__auto__)){
var action = temp__4651__auto__;
return wwtrader.models.trader.process_move_action.call(null,action,trader,game,previous_coord);
} else {
return game;
}
});
/**
 * Processes movement for the trader
 */
wwtrader.models.trader.move_trader = (function wwtrader$models$trader$move_trader(game,trader,new_coord){
var new_trader = wwtrader.models.element.coord.call(null,trader,new_coord);
return wwtrader.models.trader.process_on_move_action.call(null,wwtrader.models.game.swap_element.call(null,game,trader,new_trader),new_trader,wwtrader.models.element.coord.call(null,trader));
});
/**
 * Resets trader info
 */
wwtrader.models.trader.cleanup = (function wwtrader$models$trader$cleanup(result,elem){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(result);
var elem__$1 = wwtrader.models.game.at.call(null,game,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(result));
var trader = cljs.core.assoc.call(null,cljs.core.assoc.call(null,elem__$1,new cljs.core.Keyword(null,"damage-taken","damage-taken",-199035312),(0)),new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),false);
if(cljs.core.truth_(elem__$1)){
return cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.models.game.swap_element.call(null,game,elem__$1,trader));
} else {
return result;
}
});
/**
 * Processes the turn from given actions
 */
wwtrader.models.trader.process = (function wwtrader$models$trader$process(elem,result){
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(result);
return wwtrader.models.trader.cleanup.call(null,(function (){var temp__4651__auto__ = wwtrader.models.game.player_action.call(null,game);
if(cljs.core.truth_(temp__4651__auto__)){
var action = temp__4651__auto__;
return wwtrader.models.trader.process_action.call(null,action,elem,game);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"idle","idle",-2007156861),true,new cljs.core.Keyword(null,"game","game",-441523833),game], null);
}
})(),elem);
});
wwtrader.models.trader.clear_cargo;

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
wwtrader.models.trader.Trader = (function (id,coord,hitpoints,cargo,cargo_limit,money,energy,skills,damage_taken,attacked_QMARK_,on_move_action,__meta,__extmap,__hash){
this.id = id;
this.coord = coord;
this.hitpoints = hitpoints;
this.cargo = cargo;
this.cargo_limit = cargo_limit;
this.money = money;
this.energy = energy;
this.skills = skills;
this.damage_taken = damage_taken;
this.attacked_QMARK_ = attacked_QMARK_;
this.on_move_action = on_move_action;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
wwtrader.models.trader.Trader.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

wwtrader.models.trader.Trader.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k18157,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__18159 = (((k18157 instanceof cljs.core.Keyword))?k18157.fqn:null);
switch (G__18159) {
case "coord":
return self__.coord;

break;
case "money":
return self__.money;

break;
case "on-move-action":
return self__.on_move_action;

break;
case "cargo":
return self__.cargo;

break;
case "hitpoints":
return self__.hitpoints;

break;
case "energy":
return self__.energy;

break;
case "damage-taken":
return self__.damage_taken;

break;
case "attacked?":
return self__.attacked_QMARK_;

break;
case "cargo-limit":
return self__.cargo_limit;

break;
case "skills":
return self__.skills;

break;
case "id":
return self__.id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18157,else__17533__auto__);

}
});

wwtrader.models.trader.Trader.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#wwtrader.models.trader.Trader{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coord","coord",-1453656639),self__.coord],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hitpoints","hitpoints",-575579159),self__.hitpoints],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cargo","cargo",1523239588),self__.cargo],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cargo-limit","cargo-limit",1198505586),self__.cargo_limit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"money","money",250333921),self__.money],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"energy","energy",129856526),self__.energy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"skills","skills",958701426),self__.skills],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"damage-taken","damage-taken",-199035312),self__.damage_taken],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),self__.attacked_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-move-action","on-move-action",1643367780),self__.on_move_action],null))], null),self__.__extmap));
});

wwtrader.models.trader.Trader.prototype.cljs$core$IIterable$ = true;

wwtrader.models.trader.Trader.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18156){
var self__ = this;
var G__18156__$1 = this;
return (new cljs.core.RecordIter((0),G__18156__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"hitpoints","hitpoints",-575579159),new cljs.core.Keyword(null,"cargo","cargo",1523239588),new cljs.core.Keyword(null,"cargo-limit","cargo-limit",1198505586),new cljs.core.Keyword(null,"money","money",250333921),new cljs.core.Keyword(null,"energy","energy",129856526),new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.Keyword(null,"damage-taken","damage-taken",-199035312),new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),new cljs.core.Keyword(null,"on-move-action","on-move-action",1643367780)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

wwtrader.models.trader.Trader.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

wwtrader.models.trader.Trader.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new wwtrader.models.trader.Trader(self__.id,self__.coord,self__.hitpoints,self__.cargo,self__.cargo_limit,self__.money,self__.energy,self__.skills,self__.damage_taken,self__.attacked_QMARK_,self__.on_move_action,self__.__meta,self__.__extmap,self__.__hash));
});

wwtrader.models.trader.Trader.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

wwtrader.models.trader.Trader.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
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

wwtrader.models.trader.Trader.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
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

wwtrader.models.trader.Trader.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"coord","coord",-1453656639),null,new cljs.core.Keyword(null,"money","money",250333921),null,new cljs.core.Keyword(null,"on-move-action","on-move-action",1643367780),null,new cljs.core.Keyword(null,"cargo","cargo",1523239588),null,new cljs.core.Keyword(null,"hitpoints","hitpoints",-575579159),null,new cljs.core.Keyword(null,"energy","energy",129856526),null,new cljs.core.Keyword(null,"damage-taken","damage-taken",-199035312),null,new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),null,new cljs.core.Keyword(null,"cargo-limit","cargo-limit",1198505586),null,new cljs.core.Keyword(null,"skills","skills",958701426),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new wwtrader.models.trader.Trader(self__.id,self__.coord,self__.hitpoints,self__.cargo,self__.cargo_limit,self__.money,self__.energy,self__.skills,self__.damage_taken,self__.attacked_QMARK_,self__.on_move_action,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

wwtrader.models.trader.Trader.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__18156){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__18160 = cljs.core.keyword_identical_QMARK_;
var expr__18161 = k__17538__auto__;
if(cljs.core.truth_(pred__18160.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__18161))){
return (new wwtrader.models.trader.Trader(G__18156,self__.coord,self__.hitpoints,self__.cargo,self__.cargo_limit,self__.money,self__.energy,self__.skills,self__.damage_taken,self__.attacked_QMARK_,self__.on_move_action,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18160.call(null,new cljs.core.Keyword(null,"coord","coord",-1453656639),expr__18161))){
return (new wwtrader.models.trader.Trader(self__.id,G__18156,self__.hitpoints,self__.cargo,self__.cargo_limit,self__.money,self__.energy,self__.skills,self__.damage_taken,self__.attacked_QMARK_,self__.on_move_action,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18160.call(null,new cljs.core.Keyword(null,"hitpoints","hitpoints",-575579159),expr__18161))){
return (new wwtrader.models.trader.Trader(self__.id,self__.coord,G__18156,self__.cargo,self__.cargo_limit,self__.money,self__.energy,self__.skills,self__.damage_taken,self__.attacked_QMARK_,self__.on_move_action,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18160.call(null,new cljs.core.Keyword(null,"cargo","cargo",1523239588),expr__18161))){
return (new wwtrader.models.trader.Trader(self__.id,self__.coord,self__.hitpoints,G__18156,self__.cargo_limit,self__.money,self__.energy,self__.skills,self__.damage_taken,self__.attacked_QMARK_,self__.on_move_action,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18160.call(null,new cljs.core.Keyword(null,"cargo-limit","cargo-limit",1198505586),expr__18161))){
return (new wwtrader.models.trader.Trader(self__.id,self__.coord,self__.hitpoints,self__.cargo,G__18156,self__.money,self__.energy,self__.skills,self__.damage_taken,self__.attacked_QMARK_,self__.on_move_action,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18160.call(null,new cljs.core.Keyword(null,"money","money",250333921),expr__18161))){
return (new wwtrader.models.trader.Trader(self__.id,self__.coord,self__.hitpoints,self__.cargo,self__.cargo_limit,G__18156,self__.energy,self__.skills,self__.damage_taken,self__.attacked_QMARK_,self__.on_move_action,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18160.call(null,new cljs.core.Keyword(null,"energy","energy",129856526),expr__18161))){
return (new wwtrader.models.trader.Trader(self__.id,self__.coord,self__.hitpoints,self__.cargo,self__.cargo_limit,self__.money,G__18156,self__.skills,self__.damage_taken,self__.attacked_QMARK_,self__.on_move_action,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18160.call(null,new cljs.core.Keyword(null,"skills","skills",958701426),expr__18161))){
return (new wwtrader.models.trader.Trader(self__.id,self__.coord,self__.hitpoints,self__.cargo,self__.cargo_limit,self__.money,self__.energy,G__18156,self__.damage_taken,self__.attacked_QMARK_,self__.on_move_action,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18160.call(null,new cljs.core.Keyword(null,"damage-taken","damage-taken",-199035312),expr__18161))){
return (new wwtrader.models.trader.Trader(self__.id,self__.coord,self__.hitpoints,self__.cargo,self__.cargo_limit,self__.money,self__.energy,self__.skills,G__18156,self__.attacked_QMARK_,self__.on_move_action,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18160.call(null,new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),expr__18161))){
return (new wwtrader.models.trader.Trader(self__.id,self__.coord,self__.hitpoints,self__.cargo,self__.cargo_limit,self__.money,self__.energy,self__.skills,self__.damage_taken,G__18156,self__.on_move_action,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18160.call(null,new cljs.core.Keyword(null,"on-move-action","on-move-action",1643367780),expr__18161))){
return (new wwtrader.models.trader.Trader(self__.id,self__.coord,self__.hitpoints,self__.cargo,self__.cargo_limit,self__.money,self__.energy,self__.skills,self__.damage_taken,self__.attacked_QMARK_,G__18156,self__.__meta,self__.__extmap,null));
} else {
return (new wwtrader.models.trader.Trader(self__.id,self__.coord,self__.hitpoints,self__.cargo,self__.cargo_limit,self__.money,self__.energy,self__.skills,self__.damage_taken,self__.attacked_QMARK_,self__.on_move_action,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__18156),null));
}
}
}
}
}
}
}
}
}
}
}
});

wwtrader.models.trader.Trader.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"coord","coord",-1453656639),self__.coord],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hitpoints","hitpoints",-575579159),self__.hitpoints],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cargo","cargo",1523239588),self__.cargo],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cargo-limit","cargo-limit",1198505586),self__.cargo_limit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"money","money",250333921),self__.money],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"energy","energy",129856526),self__.energy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"skills","skills",958701426),self__.skills],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"damage-taken","damage-taken",-199035312),self__.damage_taken],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),self__.attacked_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-move-action","on-move-action",1643367780),self__.on_move_action],null))], null),self__.__extmap));
});

wwtrader.models.trader.Trader.prototype.wwtrader$models$element$Element$ = true;

wwtrader.models.trader.Trader.prototype.wwtrader$models$element$Element$id$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return self__.id;
});

wwtrader.models.trader.Trader.prototype.wwtrader$models$element$Element$priority$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return (1);
});

wwtrader.models.trader.Trader.prototype.wwtrader$models$element$Element$coord$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return self__.coord;
});

wwtrader.models.trader.Trader.prototype.wwtrader$models$element$Element$coord$arity$2 = (function (elem,coord__$1){
var self__ = this;
var elem__$1 = this;
return cljs.core.assoc.call(null,elem__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639),coord__$1);
});

wwtrader.models.trader.Trader.prototype.wwtrader$models$element$Element$process_turn$arity$2 = (function (elem,game){
var self__ = this;
var elem__$1 = this;
return wwtrader.models.trader.process.call(null,elem__$1,game);
});

wwtrader.models.trader.Trader.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__18156){
var self__ = this;
var this__17529__auto____$1 = this;
return (new wwtrader.models.trader.Trader(self__.id,self__.coord,self__.hitpoints,self__.cargo,self__.cargo_limit,self__.money,self__.energy,self__.skills,self__.damage_taken,self__.attacked_QMARK_,self__.on_move_action,G__18156,self__.__extmap,self__.__hash));
});

wwtrader.models.trader.Trader.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

wwtrader.models.trader.Trader.prototype.wwtrader$models$target$Target$ = true;

wwtrader.models.trader.Trader.prototype.wwtrader$models$target$Target$target_value$arity$1 = (function (elem){
var self__ = this;
var elem__$1 = this;
return (1);
});

wwtrader.models.trader.Trader.prototype.wwtrader$models$target$Target$take_damage$arity$3 = (function (elem,other,game){
var self__ = this;
var elem__$1 = this;
return wwtrader.models.game.swap_element.call(null,game,elem__$1,wwtrader.models.trader.add_damage.call(null,elem__$1));
});

wwtrader.models.trader.Trader.prototype.wwtrader$models$target$Target$stolen$arity$3 = (function (elem,thief,game){
var self__ = this;
var elem__$1 = this;
return wwtrader.models.game.swap_element.call(null,game,elem__$1,wwtrader.models.trader.clear_cargo.call(null,elem__$1));
});

wwtrader.models.trader.Trader.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"coord","coord",186874888,null),new cljs.core.Symbol(null,"hitpoints","hitpoints",1064952368,null),new cljs.core.Symbol(null,"cargo","cargo",-1131196181,null),new cljs.core.Symbol(null,"cargo-limit","cargo-limit",-1455930183,null),new cljs.core.Symbol(null,"money","money",1890865448,null),new cljs.core.Symbol(null,"energy","energy",1770388053,null),new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.Symbol(null,"damage-taken","damage-taken",1441496215,null),new cljs.core.Symbol(null,"attacked?","attacked?",-609979783,null),new cljs.core.Symbol(null,"on-move-action","on-move-action",-1011067989,null)], null);
});

wwtrader.models.trader.Trader.cljs$lang$type = true;

wwtrader.models.trader.Trader.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"wwtrader.models.trader/Trader");
});

wwtrader.models.trader.Trader.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"wwtrader.models.trader/Trader");
});

wwtrader.models.trader.__GT_Trader = (function wwtrader$models$trader$__GT_Trader(id,coord,hitpoints,cargo,cargo_limit,money,energy,skills,damage_taken,attacked_QMARK_,on_move_action){
return (new wwtrader.models.trader.Trader(id,coord,hitpoints,cargo,cargo_limit,money,energy,skills,damage_taken,attacked_QMARK_,on_move_action,null,null,null));
});

wwtrader.models.trader.map__GT_Trader = (function wwtrader$models$trader$map__GT_Trader(G__18158){
return (new wwtrader.models.trader.Trader(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__18158),new cljs.core.Keyword(null,"coord","coord",-1453656639).cljs$core$IFn$_invoke$arity$1(G__18158),new cljs.core.Keyword(null,"hitpoints","hitpoints",-575579159).cljs$core$IFn$_invoke$arity$1(G__18158),new cljs.core.Keyword(null,"cargo","cargo",1523239588).cljs$core$IFn$_invoke$arity$1(G__18158),new cljs.core.Keyword(null,"cargo-limit","cargo-limit",1198505586).cljs$core$IFn$_invoke$arity$1(G__18158),new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(G__18158),new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(G__18158),new cljs.core.Keyword(null,"skills","skills",958701426).cljs$core$IFn$_invoke$arity$1(G__18158),new cljs.core.Keyword(null,"damage-taken","damage-taken",-199035312).cljs$core$IFn$_invoke$arity$1(G__18158),new cljs.core.Keyword(null,"attacked?","attacked?",2044455986).cljs$core$IFn$_invoke$arity$1(G__18158),new cljs.core.Keyword(null,"on-move-action","on-move-action",1643367780).cljs$core$IFn$_invoke$arity$1(G__18158),null,cljs.core.dissoc.call(null,G__18158,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.Keyword(null,"hitpoints","hitpoints",-575579159),new cljs.core.Keyword(null,"cargo","cargo",1523239588),new cljs.core.Keyword(null,"cargo-limit","cargo-limit",1198505586),new cljs.core.Keyword(null,"money","money",250333921),new cljs.core.Keyword(null,"energy","energy",129856526),new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.Keyword(null,"damage-taken","damage-taken",-199035312),new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),new cljs.core.Keyword(null,"on-move-action","on-move-action",1643367780)),null));
});

wwtrader.models.trader.elem_type = wwtrader.models.trader.Trader;
/**
 * Configures the default skills
 */
wwtrader.models.trader.default_skills = (function wwtrader$models$trader$default_skills(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"take-supplies","take-supplies",1480690147),wwtrader.models.action.take_supplies], null);
});
/**
 * Creates a new Trader
 */
wwtrader.models.trader.create = (function wwtrader$models$trader$create(coord){
return wwtrader.models.trader.__GT_Trader.call(null,cljs.core.gensym.call(null),coord,(3),cljs.core.PersistentVector.EMPTY,(9),(5),(100),wwtrader.models.trader.default_skills.call(null),(0),false,null);
});
/**
 * Gets the trader's cargo
 */
wwtrader.models.trader.cargo = (function wwtrader$models$trader$cargo(trader){
return new cljs.core.Keyword(null,"cargo","cargo",1523239588).cljs$core$IFn$_invoke$arity$1(trader);
});
/**
 * True if this trader has space in cargo
 */
wwtrader.models.trader.cargo_space_available_QMARK_ = (function wwtrader$models$trader$cargo_space_available_QMARK_(trader){
return (new cljs.core.Keyword(null,"cargo-limit","cargo-limit",1198505586).cljs$core$IFn$_invoke$arity$1(trader) > cljs.core.count.call(null,new cljs.core.Keyword(null,"cargo","cargo",1523239588).cljs$core$IFn$_invoke$arity$1(trader)));
});
/**
 * Adds cargo to the trader
 */
wwtrader.models.trader.add_cargo = (function wwtrader$models$trader$add_cargo(trader,cargo_item){
return cljs.core.assoc.call(null,trader,new cljs.core.Keyword(null,"cargo","cargo",1523239588),cljs.core.conj.call(null,new cljs.core.Keyword(null,"cargo","cargo",1523239588).cljs$core$IFn$_invoke$arity$1(trader),cargo_item));
});
/**
 * Removes cargo (all entries for the given item)
 */
wwtrader.models.trader.remove_cargo = (function wwtrader$models$trader$remove_cargo(trader,item){
return cljs.core.assoc.call(null,trader,new cljs.core.Keyword(null,"cargo","cargo",1523239588),cljs.core.remove.call(null,(function (p1__18164_SHARP_){
return cljs.core._EQ_.call(null,p1__18164_SHARP_,item);
}),new cljs.core.Keyword(null,"cargo","cargo",1523239588).cljs$core$IFn$_invoke$arity$1(trader)));
});
/**
 * Removes all cargo from trader
 */
wwtrader.models.trader.clear_cargo = (function wwtrader$models$trader$clear_cargo(trader){
return cljs.core.assoc.call(null,trader,new cljs.core.Keyword(null,"cargo","cargo",1523239588),cljs.core.PersistentVector.EMPTY);
});
/**
 * Removes a single cargo item
 */
wwtrader.models.trader.remove_cargo_once = (function wwtrader$models$trader$remove_cargo_once(trader,item){
var vec__18166 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,item),wwtrader.models.trader.cargo.call(null,trader));
var n = cljs.core.nth.call(null,vec__18166,(0),null);
var m = cljs.core.nth.call(null,vec__18166,(1),null);
var new_cargo = cljs.core.concat.call(null,n,cljs.core.rest.call(null,m));
return cljs.core.assoc.call(null,trader,new cljs.core.Keyword(null,"cargo","cargo",1523239588),new_cargo);
});
/**
 * Handles the trader's money
 */
wwtrader.models.trader.money = (function wwtrader$models$trader$money(trader){
return new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(trader);
});
/**
 * Takes money from trader
 */
wwtrader.models.trader.take_money = (function wwtrader$models$trader$take_money(trader,money){
return cljs.core.assoc.call(null,trader,new cljs.core.Keyword(null,"money","money",250333921),(new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(trader) - money));
});
/**
 * Gives money from trader
 */
wwtrader.models.trader.give_money = (function wwtrader$models$trader$give_money(trader,money){
return cljs.core.assoc.call(null,trader,new cljs.core.Keyword(null,"money","money",250333921),(new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(trader) + money));
});
/**
 * Removes items and stores money
 */
wwtrader.models.trader.remove_items_for_money = (function wwtrader$models$trader$remove_items_for_money(trader,item,money){
return wwtrader.models.trader.give_money.call(null,wwtrader.models.trader.remove_cargo.call(null,trader,item),money);
});
/**
 * Gets the possible skills for this trader
 */
wwtrader.models.trader.skills = (function wwtrader$models$trader$skills(trader){
return new cljs.core.Keyword(null,"skills","skills",958701426).cljs$core$IFn$_invoke$arity$1(trader);
});
/**
 * Registers a new skill
 */
wwtrader.models.trader.add_skill = (function wwtrader$models$trader$add_skill(trader,skill){
return cljs.core.update_in.call(null,trader,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skills","skills",958701426)], null),cljs.core.assoc,new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(skill),skill);
});
/**
 * True if the trader can't see through the element
 */
wwtrader.models.trader.opaque_QMARK_ = (function wwtrader$models$trader$opaque_QMARK_(elem){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"can-see-over?","can-see-over?",132573049).cljs$core$IFn$_invoke$arity$1(elem));
});
/**
 * True if the given coordinate is not on the game's current camera
 */
wwtrader.models.trader.not_in_camera_QMARK_ = (function wwtrader$models$trader$not_in_camera_QMARK_(game,coord){
return cljs.core.not.call(null,wwtrader.models.game.in_camera_QMARK_.call(null,game,coord));
});
/**
 * Gets an enemy in range to attack, if any
 */
wwtrader.models.trader.enemy_in_range = (function wwtrader$models$trader$enemy_in_range(action,elem,game){
var offset = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(action);
var current_coord = wwtrader.models.element.coord.call(null,elem);
var game__$1 = game;
var current_coord__$1 = wwtrader.models.coordinate.offset.call(null,current_coord,offset);
while(true){
var current_element = wwtrader.models.game.at.call(null,game__$1,current_coord__$1);
if(cljs.core.truth_(wwtrader.models.trader.not_in_camera_QMARK_.call(null,game__$1,current_coord__$1))){
return null;
} else {
if(cljs.core.truth_(wwtrader.models.enemy.enemy_QMARK_.call(null,current_element))){
return current_element;
} else {
if(cljs.core.truth_((function (){var and__16904__auto__ = current_element;
if(cljs.core.truth_(and__16904__auto__)){
return wwtrader.models.trader.opaque_QMARK_.call(null,current_element);
} else {
return and__16904__auto__;
}
})())){
return null;
} else {
var next_coord = wwtrader.models.coordinate.offset.call(null,current_coord__$1,offset);
if(cljs.core.truth_(wwtrader.models.game.invalid_destination_QMARK_.call(null,game__$1,next_coord))){
return null;
} else {
var G__18167 = game__$1;
var G__18168 = next_coord;
game__$1 = G__18167;
current_coord__$1 = G__18168;
continue;
}

}
}
}
break;
}
});
/**
 * Attackes another element
 */
wwtrader.models.trader.attack = (function wwtrader$models$trader$attack(game,elem,enemy){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),true,new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.models.game.swap_element.call(null,wwtrader.models.enemy.add_damage.call(null,enemy,game,(100)),elem,cljs.core.assoc.call(null,elem,new cljs.core.Keyword(null,"attacked?","attacked?",2044455986),true))], null);
});
/**
 * True if the trader attacked on this turn
 */
wwtrader.models.trader.attacked_QMARK_ = (function wwtrader$models$trader$attacked_QMARK_(trader){
return new cljs.core.Keyword(null,"attacked?","attacked?",2044455986).cljs$core$IFn$_invoke$arity$1(trader);
});
cljs.core._add_method.call(null,wwtrader.models.trader.process_action,new cljs.core.Keyword(null,"move","move",-2110884309),(function (action,elem,game){
var current_coord = wwtrader.models.element.coord.call(null,elem);
var enemy = wwtrader.models.trader.enemy_in_range.call(null,action,elem,game);
var new_coord = wwtrader.models.coordinate.offset.call(null,current_coord,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(action));
if((new cljs.core.Keyword(null,"hitpoints","hitpoints",-575579159).cljs$core$IFn$_invoke$arity$1(elem) <= (0))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"pos","pos",-864607220),current_coord], null);
} else {
if(cljs.core.truth_(wwtrader.models.game.invalid_destination_QMARK_.call(null,game,new_coord))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-destination","invalid-destination",-686620251),new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"pos","pos",-864607220),current_coord], null);
} else {
if(cljs.core.truth_(enemy)){
return wwtrader.models.trader.attack.call(null,game,elem,enemy);
} else {
if(cljs.core.truth_(wwtrader.models.game.at.call(null,game,new_coord))){
return cljs.core.assoc.call(null,wwtrader.models.trader.interact.call(null,game,elem,new_coord),new cljs.core.Keyword(null,"pos","pos",-864607220),current_coord);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"pos","pos",-864607220),new_coord,new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.models.trader.move_trader.call(null,game,elem,new_coord)], null);

}
}
}
}
}));
cljs.core._add_method.call(null,wwtrader.models.trader.process_action,new cljs.core.Keyword(null,"take-supplies","take-supplies",1480690147),(function (action,elem,game){
if(cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["supplies",null], null), null),wwtrader.models.trader.cargo.call(null,elem)))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"no-supplies","no-supplies",539629354),new cljs.core.Keyword(null,"game","game",-441523833),game], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.models.game.swap_element.call(null,game,elem,wwtrader.models.trader.remove_cargo_once.call(null,wwtrader.models.trader.energy.call(null,elem,(100)),"supplies"))], null);

}
}));
/**
 * Runs an action
 */
wwtrader.models.trader.run_action = (function wwtrader$models$trader$run_action(action,trader,game,f){
var required_energy = cljs.core.get_in.call(null,action,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"energy","energy",129856526)], null));
if(((0) >= wwtrader.models.trader.hitpoints.call(null,trader))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"dead","dead",-1946604091),new cljs.core.Keyword(null,"game","game",-441523833),game], null);
} else {
if((required_energy > wwtrader.models.trader.energy.call(null,trader))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"no-energy","no-energy",-34662484),new cljs.core.Keyword(null,"game","game",-441523833),game], null);
} else {
return f.call(null,wwtrader.models.trader.take_energy.call(null,trader,required_energy));

}
}
});
/**
 * Verify that an action can be queued
 */
wwtrader.models.trader.verify_action = (function wwtrader$models$trader$verify_action(action,trader,game,f){
var required_energy = cljs.core.get_in.call(null,action,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"energy","energy",129856526)], null));
if(((0) >= wwtrader.models.trader.hitpoints.call(null,trader))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"dead","dead",-1946604091),new cljs.core.Keyword(null,"game","game",-441523833),game], null);
} else {
if((required_energy > wwtrader.models.trader.energy.call(null,trader))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"no-energy","no-energy",-34662484),new cljs.core.Keyword(null,"game","game",-441523833),game], null);
} else {
return f.call(null,trader);

}
}
});
cljs.core._add_method.call(null,wwtrader.models.trader.process_action,new cljs.core.Keyword(null,"heal","heal",-1734703848),(function (action,trader,game){
return wwtrader.models.trader.run_action.call(null,action,trader,game,(function (trader__$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.models.game.swap_element.call(null,game,trader__$1,wwtrader.models.trader.hitpoints.call(null,trader__$1,(3)))], null);
}));
}));
cljs.core._add_method.call(null,wwtrader.models.trader.process_action,new cljs.core.Keyword(null,"sleep","sleep",-1932665860),(function (action,trader,game){
return wwtrader.models.trader.run_action.call(null,action,trader,game,(function (new_trader){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.models.game.swap_element.call(null,game,trader,new_trader)], null);
}));
}));
cljs.core._add_method.call(null,wwtrader.models.trader.process_action,new cljs.core.Keyword(null,"decoy","decoy",428512436),(function (action,trader,game){
return wwtrader.models.trader.verify_action.call(null,action,trader,game,(function (new_trader){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"on-move-action-stored","on-move-action-stored",-1036925530),new cljs.core.Keyword(null,"game","game",-441523833),wwtrader.models.game.swap_element.call(null,game,trader,wwtrader.models.trader.on_move_action.call(null,new_trader,action))], null);
}));
}));
cljs.core._add_method.call(null,wwtrader.models.trader.process_move_action,new cljs.core.Keyword(null,"decoy","decoy",428512436),(function (action,trader,game,previous_coord){
return wwtrader.models.trader.run_action.call(null,action,trader,game,(function (new_trader){
return wwtrader.models.game.register.call(null,wwtrader.models.game.swap_element.call(null,game,trader,wwtrader.models.trader.clear_on_move_action.call(null,new_trader)),wwtrader.models.decoy.create.call(null,previous_coord));
}));
}));

//# sourceMappingURL=trader.js.map?rel=1450953126672