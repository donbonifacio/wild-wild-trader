// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.models.coordinate');
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
wwtrader.models.coordinate.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
wwtrader.models.coordinate.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

wwtrader.models.coordinate.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k18046,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__18048 = (((k18046 instanceof cljs.core.Keyword))?k18046.fqn:null);
switch (G__18048) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18046,else__17533__auto__);

}
});

wwtrader.models.coordinate.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#wwtrader.models.coordinate.Coordinate{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

wwtrader.models.coordinate.Coordinate.prototype.cljs$core$IIterable$ = true;

wwtrader.models.coordinate.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18045){
var self__ = this;
var G__18045__$1 = this;
return (new cljs.core.RecordIter((0),G__18045__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

wwtrader.models.coordinate.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

wwtrader.models.coordinate.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new wwtrader.models.coordinate.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

wwtrader.models.coordinate.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

wwtrader.models.coordinate.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
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

wwtrader.models.coordinate.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
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

wwtrader.models.coordinate.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new wwtrader.models.coordinate.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

wwtrader.models.coordinate.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__18045){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__18049 = cljs.core.keyword_identical_QMARK_;
var expr__18050 = k__17538__auto__;
if(cljs.core.truth_(pred__18049.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18050))){
return (new wwtrader.models.coordinate.Coordinate(G__18045,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18049.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18050))){
return (new wwtrader.models.coordinate.Coordinate(self__.x,G__18045,self__.__meta,self__.__extmap,null));
} else {
return (new wwtrader.models.coordinate.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__18045),null));
}
}
});

wwtrader.models.coordinate.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

wwtrader.models.coordinate.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__18045){
var self__ = this;
var this__17529__auto____$1 = this;
return (new wwtrader.models.coordinate.Coordinate(self__.x,self__.y,G__18045,self__.__extmap,self__.__hash));
});

wwtrader.models.coordinate.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

wwtrader.models.coordinate.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

wwtrader.models.coordinate.Coordinate.cljs$lang$type = true;

wwtrader.models.coordinate.Coordinate.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"wwtrader.models.coordinate/Coordinate");
});

wwtrader.models.coordinate.Coordinate.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"wwtrader.models.coordinate/Coordinate");
});

wwtrader.models.coordinate.__GT_Coordinate = (function wwtrader$models$coordinate$__GT_Coordinate(x,y){
return (new wwtrader.models.coordinate.Coordinate(x,y,null,null,null));
});

wwtrader.models.coordinate.map__GT_Coordinate = (function wwtrader$models$coordinate$map__GT_Coordinate(G__18047){
return (new wwtrader.models.coordinate.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18047),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18047),null,cljs.core.dissoc.call(null,G__18047,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),null));
});

/**
 * Creates a new coordinate
 */
wwtrader.models.coordinate.create = (function wwtrader$models$coordinate$create(x,y){
return wwtrader.models.coordinate.__GT_Coordinate.call(null,x,y);
});
/**
 * Handles the x value
 */
wwtrader.models.coordinate.x = (function wwtrader$models$coordinate$x(coord){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(coord);
});
/**
 * Handles the y value
 */
wwtrader.models.coordinate.y = (function wwtrader$models$coordinate$y(coord){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(coord);
});
/**
 * Moves the coordinate based on the given offset
 */
wwtrader.models.coordinate.offset = (function wwtrader$models$coordinate$offset(coord,p__18053){
var vec__18055 = p__18053;
var ox = cljs.core.nth.call(null,vec__18055,(0),null);
var oy = cljs.core.nth.call(null,vec__18055,(1),null);
return wwtrader.models.coordinate.create.call(null,(wwtrader.models.coordinate.x.call(null,coord) + ox),(wwtrader.models.coordinate.y.call(null,coord) + oy));
});
/**
 * Checks if two coordinates are adjacent
 */
wwtrader.models.coordinate.adjacent_QMARK_ = (function wwtrader$models$coordinate$adjacent_QMARK_(c1,c2){
var dx = (wwtrader.models.coordinate.x.call(null,c1) - wwtrader.models.coordinate.x.call(null,c2));
var dy = (wwtrader.models.coordinate.y.call(null,c1) - wwtrader.models.coordinate.y.call(null,c2));
return (((-2) < dx)) && (((2) > dx)) && (((-2) < dy)) && (((2) > dy));
});
/**
 * True if the coordinates are perpendicular
 */
wwtrader.models.coordinate.perpendicular_QMARK_ = (function wwtrader$models$coordinate$perpendicular_QMARK_(c1,c2){
return (cljs.core._EQ_.call(null,wwtrader.models.coordinate.x.call(null,c1),wwtrader.models.coordinate.x.call(null,c2))) || (cljs.core._EQ_.call(null,wwtrader.models.coordinate.y.call(null,c1),wwtrader.models.coordinate.y.call(null,c2)));
});
/**
 * True if the given coords are perpendicular and adjacent
 */
wwtrader.models.coordinate.adjacent_perpendicular_QMARK_ = (function wwtrader$models$coordinate$adjacent_perpendicular_QMARK_(c1,c2){
var and__16904__auto__ = wwtrader.models.coordinate.perpendicular_QMARK_.call(null,c1,c2);
if(cljs.core.truth_(and__16904__auto__)){
return wwtrader.models.coordinate.adjacent_QMARK_.call(null,c1,c2);
} else {
return and__16904__auto__;
}
});
wwtrader.models.coordinate.abs = (function wwtrader$models$coordinate$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
/**
 * Sorts the given coords by distance to the reference
 */
wwtrader.models.coordinate.sort_by_distance = (function wwtrader$models$coordinate$sort_by_distance(reference_coord,coords){
return cljs.core.sort_by.call(null,(function (c){
var dx = wwtrader.models.coordinate.abs.call(null,(wwtrader.models.coordinate.x.call(null,c) - wwtrader.models.coordinate.x.call(null,reference_coord)));
var dy = wwtrader.models.coordinate.abs.call(null,(wwtrader.models.coordinate.y.call(null,c) - wwtrader.models.coordinate.y.call(null,reference_coord)));
return (dx + dy);
}),coords);
});
wwtrader.models.coordinate.c0_0 = wwtrader.models.coordinate.create.call(null,(0),(0));
wwtrader.models.coordinate.c0_1 = wwtrader.models.coordinate.create.call(null,(0),(1));
wwtrader.models.coordinate.c1_0 = wwtrader.models.coordinate.create.call(null,(1),(0));
wwtrader.models.coordinate.c1_1 = wwtrader.models.coordinate.create.call(null,(1),(1));
wwtrader.models.coordinate.c1_2 = wwtrader.models.coordinate.create.call(null,(1),(2));
wwtrader.models.coordinate.c1_6 = wwtrader.models.coordinate.create.call(null,(1),(6));
wwtrader.models.coordinate.c2_1 = wwtrader.models.coordinate.create.call(null,(2),(1));
wwtrader.models.coordinate.c2_2 = wwtrader.models.coordinate.create.call(null,(2),(2));
wwtrader.models.coordinate.c2_3 = wwtrader.models.coordinate.create.call(null,(2),(3));
wwtrader.models.coordinate.c2_4 = wwtrader.models.coordinate.create.call(null,(2),(4));
wwtrader.models.coordinate.c3_1 = wwtrader.models.coordinate.create.call(null,(3),(1));
wwtrader.models.coordinate.c3_3 = wwtrader.models.coordinate.create.call(null,(3),(3));
wwtrader.models.coordinate.c4_5 = wwtrader.models.coordinate.create.call(null,(4),(5));
wwtrader.models.coordinate.c5_1 = wwtrader.models.coordinate.create.call(null,(5),(1));
wwtrader.models.coordinate.c5_5 = wwtrader.models.coordinate.create.call(null,(5),(5));
wwtrader.models.coordinate.c5_6 = wwtrader.models.coordinate.create.call(null,(5),(6));
wwtrader.models.coordinate.c6_1 = wwtrader.models.coordinate.create.call(null,(6),(1));
wwtrader.models.coordinate.c6_5 = wwtrader.models.coordinate.create.call(null,(6),(5));
wwtrader.models.coordinate.c7_7 = wwtrader.models.coordinate.create.call(null,(7),(7));
wwtrader.models.coordinate.c8_8 = wwtrader.models.coordinate.create.call(null,(8),(8));
wwtrader.models.coordinate.c9_9 = wwtrader.models.coordinate.create.call(null,(9),(9));

//# sourceMappingURL=coordinate.js.map?rel=1450953125872