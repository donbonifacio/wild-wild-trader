// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.models.county');
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
wwtrader.models.county.County = (function (width,height,elements,__meta,__extmap,__hash){
this.width = width;
this.height = height;
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
wwtrader.models.county.County.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

wwtrader.models.county.County.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k18059,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__18061 = (((k18059 instanceof cljs.core.Keyword))?k18059.fqn:null);
switch (G__18061) {
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k18059,else__17533__auto__);

}
});

wwtrader.models.county.County.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#wwtrader.models.county.County{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

wwtrader.models.county.County.prototype.cljs$core$IIterable$ = true;

wwtrader.models.county.County.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18058){
var self__ = this;
var G__18058__$1 = this;
return (new cljs.core.RecordIter((0),G__18058__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

wwtrader.models.county.County.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

wwtrader.models.county.County.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new wwtrader.models.county.County(self__.width,self__.height,self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

wwtrader.models.county.County.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

wwtrader.models.county.County.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
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

wwtrader.models.county.County.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
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

wwtrader.models.county.County.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"elements","elements",657646735),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new wwtrader.models.county.County(self__.width,self__.height,self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

wwtrader.models.county.County.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__18058){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__18062 = cljs.core.keyword_identical_QMARK_;
var expr__18063 = k__17538__auto__;
if(cljs.core.truth_(pred__18062.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__18063))){
return (new wwtrader.models.county.County(G__18058,self__.height,self__.elements,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18062.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__18063))){
return (new wwtrader.models.county.County(self__.width,G__18058,self__.elements,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__18062.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__18063))){
return (new wwtrader.models.county.County(self__.width,self__.height,G__18058,self__.__meta,self__.__extmap,null));
} else {
return (new wwtrader.models.county.County(self__.width,self__.height,self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__18058),null));
}
}
}
});

wwtrader.models.county.County.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

wwtrader.models.county.County.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__18058){
var self__ = this;
var this__17529__auto____$1 = this;
return (new wwtrader.models.county.County(self__.width,self__.height,self__.elements,G__18058,self__.__extmap,self__.__hash));
});

wwtrader.models.county.County.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

wwtrader.models.county.County.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

wwtrader.models.county.County.cljs$lang$type = true;

wwtrader.models.county.County.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"wwtrader.models.county/County");
});

wwtrader.models.county.County.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"wwtrader.models.county/County");
});

wwtrader.models.county.__GT_County = (function wwtrader$models$county$__GT_County(width,height,elements){
return (new wwtrader.models.county.County(width,height,elements,null,null,null));
});

wwtrader.models.county.map__GT_County = (function wwtrader$models$county$map__GT_County(G__18060){
return (new wwtrader.models.county.County(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__18060),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__18060),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__18060),null,cljs.core.dissoc.call(null,G__18060,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

/**
 * Creates a new County
 */
wwtrader.models.county.create = (function wwtrader$models$county$create(w,h){
return wwtrader.models.county.__GT_County.call(null,w,h,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Gets the county's width
 */
wwtrader.models.county.width = (function wwtrader$models$county$width(county){
return new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(county);
});
/**
 * Gets the county's height
 */
wwtrader.models.county.height = (function wwtrader$models$county$height(county){
return new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(county);
});
/**
 * Registers a new element on a given coordinate
 */
wwtrader.models.county.register = (function wwtrader$models$county$register(county,coord,elem){
var current_elements = new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(county);
return cljs.core.assoc.call(null,county,new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.assoc.call(null,current_elements,coord,elem));
});
/**
 * Removes the given element from the game
 */
wwtrader.models.county.purge = (function wwtrader$models$county$purge(county,coord,elem){
var current_elements = new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(county);
return cljs.core.assoc.call(null,county,new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.dissoc.call(null,current_elements,coord));
});
/**
 * Gets the element, if any, at the given coordinate
 */
wwtrader.models.county.at = (function wwtrader$models$county$at(county,coord){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(county),coord);
});
/**
 * Gets all the elements at this county
 */
wwtrader.models.county.elements = (function wwtrader$models$county$elements(county){
return new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(county);
});

//# sourceMappingURL=county.js.map?rel=1450953125961