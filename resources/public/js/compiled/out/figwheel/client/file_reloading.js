// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16916__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16916__auto__){
return or__16916__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16916__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16916__auto__)){
return or__16916__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23182_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23182_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23187 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23188 = null;
var count__23189 = (0);
var i__23190 = (0);
while(true){
if((i__23190 < count__23189)){
var n = cljs.core._nth.call(null,chunk__23188,i__23190);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23191 = seq__23187;
var G__23192 = chunk__23188;
var G__23193 = count__23189;
var G__23194 = (i__23190 + (1));
seq__23187 = G__23191;
chunk__23188 = G__23192;
count__23189 = G__23193;
i__23190 = G__23194;
continue;
} else {
var temp__4653__auto__ = cljs.core.seq.call(null,seq__23187);
if(temp__4653__auto__){
var seq__23187__$1 = temp__4653__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23187__$1)){
var c__17719__auto__ = cljs.core.chunk_first.call(null,seq__23187__$1);
var G__23195 = cljs.core.chunk_rest.call(null,seq__23187__$1);
var G__23196 = c__17719__auto__;
var G__23197 = cljs.core.count.call(null,c__17719__auto__);
var G__23198 = (0);
seq__23187 = G__23195;
chunk__23188 = G__23196;
count__23189 = G__23197;
i__23190 = G__23198;
continue;
} else {
var n = cljs.core.first.call(null,seq__23187__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23199 = cljs.core.next.call(null,seq__23187__$1);
var G__23200 = null;
var G__23201 = (0);
var G__23202 = (0);
seq__23187 = G__23199;
chunk__23188 = G__23200;
count__23189 = G__23201;
i__23190 = G__23202;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23241_23248 = cljs.core.seq.call(null,deps);
var chunk__23242_23249 = null;
var count__23243_23250 = (0);
var i__23244_23251 = (0);
while(true){
if((i__23244_23251 < count__23243_23250)){
var dep_23252 = cljs.core._nth.call(null,chunk__23242_23249,i__23244_23251);
topo_sort_helper_STAR_.call(null,dep_23252,(depth + (1)),state);

var G__23253 = seq__23241_23248;
var G__23254 = chunk__23242_23249;
var G__23255 = count__23243_23250;
var G__23256 = (i__23244_23251 + (1));
seq__23241_23248 = G__23253;
chunk__23242_23249 = G__23254;
count__23243_23250 = G__23255;
i__23244_23251 = G__23256;
continue;
} else {
var temp__4653__auto___23257 = cljs.core.seq.call(null,seq__23241_23248);
if(temp__4653__auto___23257){
var seq__23241_23258__$1 = temp__4653__auto___23257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23241_23258__$1)){
var c__17719__auto___23259 = cljs.core.chunk_first.call(null,seq__23241_23258__$1);
var G__23260 = cljs.core.chunk_rest.call(null,seq__23241_23258__$1);
var G__23261 = c__17719__auto___23259;
var G__23262 = cljs.core.count.call(null,c__17719__auto___23259);
var G__23263 = (0);
seq__23241_23248 = G__23260;
chunk__23242_23249 = G__23261;
count__23243_23250 = G__23262;
i__23244_23251 = G__23263;
continue;
} else {
var dep_23264 = cljs.core.first.call(null,seq__23241_23258__$1);
topo_sort_helper_STAR_.call(null,dep_23264,(depth + (1)),state);

var G__23265 = cljs.core.next.call(null,seq__23241_23258__$1);
var G__23266 = null;
var G__23267 = (0);
var G__23268 = (0);
seq__23241_23248 = G__23265;
chunk__23242_23249 = G__23266;
count__23243_23250 = G__23267;
i__23244_23251 = G__23268;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23245){
var vec__23247 = p__23245;
var x = cljs.core.nth.call(null,vec__23247,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23247,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23247,x,xs,get_deps__$1){
return (function (p1__23203_SHARP_){
return clojure.set.difference.call(null,p1__23203_SHARP_,x);
});})(vec__23247,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23281 = cljs.core.seq.call(null,provides);
var chunk__23282 = null;
var count__23283 = (0);
var i__23284 = (0);
while(true){
if((i__23284 < count__23283)){
var prov = cljs.core._nth.call(null,chunk__23282,i__23284);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23285_23293 = cljs.core.seq.call(null,requires);
var chunk__23286_23294 = null;
var count__23287_23295 = (0);
var i__23288_23296 = (0);
while(true){
if((i__23288_23296 < count__23287_23295)){
var req_23297 = cljs.core._nth.call(null,chunk__23286_23294,i__23288_23296);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23297,prov);

var G__23298 = seq__23285_23293;
var G__23299 = chunk__23286_23294;
var G__23300 = count__23287_23295;
var G__23301 = (i__23288_23296 + (1));
seq__23285_23293 = G__23298;
chunk__23286_23294 = G__23299;
count__23287_23295 = G__23300;
i__23288_23296 = G__23301;
continue;
} else {
var temp__4653__auto___23302 = cljs.core.seq.call(null,seq__23285_23293);
if(temp__4653__auto___23302){
var seq__23285_23303__$1 = temp__4653__auto___23302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23285_23303__$1)){
var c__17719__auto___23304 = cljs.core.chunk_first.call(null,seq__23285_23303__$1);
var G__23305 = cljs.core.chunk_rest.call(null,seq__23285_23303__$1);
var G__23306 = c__17719__auto___23304;
var G__23307 = cljs.core.count.call(null,c__17719__auto___23304);
var G__23308 = (0);
seq__23285_23293 = G__23305;
chunk__23286_23294 = G__23306;
count__23287_23295 = G__23307;
i__23288_23296 = G__23308;
continue;
} else {
var req_23309 = cljs.core.first.call(null,seq__23285_23303__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23309,prov);

var G__23310 = cljs.core.next.call(null,seq__23285_23303__$1);
var G__23311 = null;
var G__23312 = (0);
var G__23313 = (0);
seq__23285_23293 = G__23310;
chunk__23286_23294 = G__23311;
count__23287_23295 = G__23312;
i__23288_23296 = G__23313;
continue;
}
} else {
}
}
break;
}

var G__23314 = seq__23281;
var G__23315 = chunk__23282;
var G__23316 = count__23283;
var G__23317 = (i__23284 + (1));
seq__23281 = G__23314;
chunk__23282 = G__23315;
count__23283 = G__23316;
i__23284 = G__23317;
continue;
} else {
var temp__4653__auto__ = cljs.core.seq.call(null,seq__23281);
if(temp__4653__auto__){
var seq__23281__$1 = temp__4653__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23281__$1)){
var c__17719__auto__ = cljs.core.chunk_first.call(null,seq__23281__$1);
var G__23318 = cljs.core.chunk_rest.call(null,seq__23281__$1);
var G__23319 = c__17719__auto__;
var G__23320 = cljs.core.count.call(null,c__17719__auto__);
var G__23321 = (0);
seq__23281 = G__23318;
chunk__23282 = G__23319;
count__23283 = G__23320;
i__23284 = G__23321;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23281__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23289_23322 = cljs.core.seq.call(null,requires);
var chunk__23290_23323 = null;
var count__23291_23324 = (0);
var i__23292_23325 = (0);
while(true){
if((i__23292_23325 < count__23291_23324)){
var req_23326 = cljs.core._nth.call(null,chunk__23290_23323,i__23292_23325);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23326,prov);

var G__23327 = seq__23289_23322;
var G__23328 = chunk__23290_23323;
var G__23329 = count__23291_23324;
var G__23330 = (i__23292_23325 + (1));
seq__23289_23322 = G__23327;
chunk__23290_23323 = G__23328;
count__23291_23324 = G__23329;
i__23292_23325 = G__23330;
continue;
} else {
var temp__4653__auto___23331__$1 = cljs.core.seq.call(null,seq__23289_23322);
if(temp__4653__auto___23331__$1){
var seq__23289_23332__$1 = temp__4653__auto___23331__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23289_23332__$1)){
var c__17719__auto___23333 = cljs.core.chunk_first.call(null,seq__23289_23332__$1);
var G__23334 = cljs.core.chunk_rest.call(null,seq__23289_23332__$1);
var G__23335 = c__17719__auto___23333;
var G__23336 = cljs.core.count.call(null,c__17719__auto___23333);
var G__23337 = (0);
seq__23289_23322 = G__23334;
chunk__23290_23323 = G__23335;
count__23291_23324 = G__23336;
i__23292_23325 = G__23337;
continue;
} else {
var req_23338 = cljs.core.first.call(null,seq__23289_23332__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23338,prov);

var G__23339 = cljs.core.next.call(null,seq__23289_23332__$1);
var G__23340 = null;
var G__23341 = (0);
var G__23342 = (0);
seq__23289_23322 = G__23339;
chunk__23290_23323 = G__23340;
count__23291_23324 = G__23341;
i__23292_23325 = G__23342;
continue;
}
} else {
}
}
break;
}

var G__23343 = cljs.core.next.call(null,seq__23281__$1);
var G__23344 = null;
var G__23345 = (0);
var G__23346 = (0);
seq__23281 = G__23343;
chunk__23282 = G__23344;
count__23283 = G__23345;
i__23284 = G__23346;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23351_23355 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23352_23356 = null;
var count__23353_23357 = (0);
var i__23354_23358 = (0);
while(true){
if((i__23354_23358 < count__23353_23357)){
var ns_23359 = cljs.core._nth.call(null,chunk__23352_23356,i__23354_23358);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23359);

var G__23360 = seq__23351_23355;
var G__23361 = chunk__23352_23356;
var G__23362 = count__23353_23357;
var G__23363 = (i__23354_23358 + (1));
seq__23351_23355 = G__23360;
chunk__23352_23356 = G__23361;
count__23353_23357 = G__23362;
i__23354_23358 = G__23363;
continue;
} else {
var temp__4653__auto___23364 = cljs.core.seq.call(null,seq__23351_23355);
if(temp__4653__auto___23364){
var seq__23351_23365__$1 = temp__4653__auto___23364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23351_23365__$1)){
var c__17719__auto___23366 = cljs.core.chunk_first.call(null,seq__23351_23365__$1);
var G__23367 = cljs.core.chunk_rest.call(null,seq__23351_23365__$1);
var G__23368 = c__17719__auto___23366;
var G__23369 = cljs.core.count.call(null,c__17719__auto___23366);
var G__23370 = (0);
seq__23351_23355 = G__23367;
chunk__23352_23356 = G__23368;
count__23353_23357 = G__23369;
i__23354_23358 = G__23370;
continue;
} else {
var ns_23371 = cljs.core.first.call(null,seq__23351_23365__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23371);

var G__23372 = cljs.core.next.call(null,seq__23351_23365__$1);
var G__23373 = null;
var G__23374 = (0);
var G__23375 = (0);
seq__23351_23355 = G__23372;
chunk__23352_23356 = G__23373;
count__23353_23357 = G__23374;
i__23354_23358 = G__23375;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16916__auto__ = goog.require__;
if(cljs.core.truth_(or__16916__auto__)){
return or__16916__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23376__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23376 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23377__i = 0, G__23377__a = new Array(arguments.length -  0);
while (G__23377__i < G__23377__a.length) {G__23377__a[G__23377__i] = arguments[G__23377__i + 0]; ++G__23377__i;}
  args = new cljs.core.IndexedSeq(G__23377__a,0);
} 
return G__23376__delegate.call(this,args);};
G__23376.cljs$lang$maxFixedArity = 0;
G__23376.cljs$lang$applyTo = (function (arglist__23378){
var args = cljs.core.seq(arglist__23378);
return G__23376__delegate(args);
});
G__23376.cljs$core$IFn$_invoke$arity$variadic = G__23376__delegate;
return G__23376;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23380 = cljs.core._EQ_;
var expr__23381 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23380.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23381))){
var path_parts = ((function (pred__23380,expr__23381){
return (function (p1__23379_SHARP_){
return clojure.string.split.call(null,p1__23379_SHARP_,/[\/\\]/);
});})(pred__23380,expr__23381))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23380,expr__23381){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23383){if((e23383 instanceof Error)){
var e = e23383;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23383;

}
}})());
});
;})(path_parts,sep,root,pred__23380,expr__23381))
} else {
if(cljs.core.truth_(pred__23380.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23381))){
return ((function (pred__23380,expr__23381){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23380,expr__23381){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23380,expr__23381))
);

return deferred.addErrback(((function (deferred,pred__23380,expr__23381){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23380,expr__23381))
);
});
;})(pred__23380,expr__23381))
} else {
return ((function (pred__23380,expr__23381){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23380,expr__23381))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23384,callback){
var map__23387 = p__23384;
var map__23387__$1 = ((((!((map__23387 == null)))?((((map__23387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23387):map__23387);
var file_msg = map__23387__$1;
var request_url = cljs.core.get.call(null,map__23387__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23387,map__23387__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23387,map__23387__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__){
return (function (state_23411){
var state_val_23412 = (state_23411[(1)]);
if((state_val_23412 === (7))){
var inst_23407 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
var statearr_23413_23433 = state_23411__$1;
(statearr_23413_23433[(2)] = inst_23407);

(statearr_23413_23433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (1))){
var state_23411__$1 = state_23411;
var statearr_23414_23434 = state_23411__$1;
(statearr_23414_23434[(2)] = null);

(statearr_23414_23434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (4))){
var inst_23391 = (state_23411[(7)]);
var inst_23391__$1 = (state_23411[(2)]);
var state_23411__$1 = (function (){var statearr_23415 = state_23411;
(statearr_23415[(7)] = inst_23391__$1);

return statearr_23415;
})();
if(cljs.core.truth_(inst_23391__$1)){
var statearr_23416_23435 = state_23411__$1;
(statearr_23416_23435[(1)] = (5));

} else {
var statearr_23417_23436 = state_23411__$1;
(statearr_23417_23436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (6))){
var state_23411__$1 = state_23411;
var statearr_23418_23437 = state_23411__$1;
(statearr_23418_23437[(2)] = null);

(statearr_23418_23437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (3))){
var inst_23409 = (state_23411[(2)]);
var state_23411__$1 = state_23411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23411__$1,inst_23409);
} else {
if((state_val_23412 === (2))){
var state_23411__$1 = state_23411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23411__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23412 === (11))){
var inst_23403 = (state_23411[(2)]);
var state_23411__$1 = (function (){var statearr_23419 = state_23411;
(statearr_23419[(8)] = inst_23403);

return statearr_23419;
})();
var statearr_23420_23438 = state_23411__$1;
(statearr_23420_23438[(2)] = null);

(statearr_23420_23438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (9))){
var inst_23395 = (state_23411[(9)]);
var inst_23397 = (state_23411[(10)]);
var inst_23399 = inst_23397.call(null,inst_23395);
var state_23411__$1 = state_23411;
var statearr_23421_23439 = state_23411__$1;
(statearr_23421_23439[(2)] = inst_23399);

(statearr_23421_23439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (5))){
var inst_23391 = (state_23411[(7)]);
var inst_23393 = figwheel.client.file_reloading.blocking_load.call(null,inst_23391);
var state_23411__$1 = state_23411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23411__$1,(8),inst_23393);
} else {
if((state_val_23412 === (10))){
var inst_23395 = (state_23411[(9)]);
var inst_23401 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23395);
var state_23411__$1 = state_23411;
var statearr_23422_23440 = state_23411__$1;
(statearr_23422_23440[(2)] = inst_23401);

(statearr_23422_23440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23412 === (8))){
var inst_23391 = (state_23411[(7)]);
var inst_23397 = (state_23411[(10)]);
var inst_23395 = (state_23411[(2)]);
var inst_23396 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23397__$1 = cljs.core.get.call(null,inst_23396,inst_23391);
var state_23411__$1 = (function (){var statearr_23423 = state_23411;
(statearr_23423[(9)] = inst_23395);

(statearr_23423[(10)] = inst_23397__$1);

return statearr_23423;
})();
if(cljs.core.truth_(inst_23397__$1)){
var statearr_23424_23441 = state_23411__$1;
(statearr_23424_23441[(1)] = (9));

} else {
var statearr_23425_23442 = state_23411__$1;
(statearr_23425_23442[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__19515__auto__))
;
return ((function (switch__19403__auto__,c__19515__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19404__auto__ = null;
var figwheel$client$file_reloading$state_machine__19404__auto____0 = (function (){
var statearr_23429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23429[(0)] = figwheel$client$file_reloading$state_machine__19404__auto__);

(statearr_23429[(1)] = (1));

return statearr_23429;
});
var figwheel$client$file_reloading$state_machine__19404__auto____1 = (function (state_23411){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_23411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e23430){if((e23430 instanceof Object)){
var ex__19407__auto__ = e23430;
var statearr_23431_23443 = state_23411;
(statearr_23431_23443[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23444 = state_23411;
state_23411 = G__23444;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19404__auto__ = function(state_23411){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19404__auto____1.call(this,state_23411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19404__auto____0;
figwheel$client$file_reloading$state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19404__auto____1;
return figwheel$client$file_reloading$state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__))
})();
var state__19517__auto__ = (function (){var statearr_23432 = f__19516__auto__.call(null);
(statearr_23432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_23432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__))
);

return c__19515__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23445,callback){
var map__23448 = p__23445;
var map__23448__$1 = ((((!((map__23448 == null)))?((((map__23448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23448):map__23448);
var file_msg = map__23448__$1;
var namespace = cljs.core.get.call(null,map__23448__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23448,map__23448__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23448,map__23448__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23450){
var map__23453 = p__23450;
var map__23453__$1 = ((((!((map__23453 == null)))?((((map__23453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23453):map__23453);
var file_msg = map__23453__$1;
var namespace = cljs.core.get.call(null,map__23453__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16904__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16904__auto__){
var or__16916__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16916__auto__)){
return or__16916__auto__;
} else {
var or__16916__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16916__auto____$1)){
return or__16916__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16904__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23455,callback){
var map__23458 = p__23455;
var map__23458__$1 = ((((!((map__23458 == null)))?((((map__23458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23458):map__23458);
var file_msg = map__23458__$1;
var request_url = cljs.core.get.call(null,map__23458__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23458__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19515__auto___23546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___23546,out){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___23546,out){
return (function (state_23528){
var state_val_23529 = (state_23528[(1)]);
if((state_val_23529 === (1))){
var inst_23506 = cljs.core.nth.call(null,files,(0),null);
var inst_23507 = cljs.core.nthnext.call(null,files,(1));
var inst_23508 = files;
var state_23528__$1 = (function (){var statearr_23530 = state_23528;
(statearr_23530[(7)] = inst_23506);

(statearr_23530[(8)] = inst_23507);

(statearr_23530[(9)] = inst_23508);

return statearr_23530;
})();
var statearr_23531_23547 = state_23528__$1;
(statearr_23531_23547[(2)] = null);

(statearr_23531_23547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23529 === (2))){
var inst_23511 = (state_23528[(10)]);
var inst_23508 = (state_23528[(9)]);
var inst_23511__$1 = cljs.core.nth.call(null,inst_23508,(0),null);
var inst_23512 = cljs.core.nthnext.call(null,inst_23508,(1));
var inst_23513 = (inst_23511__$1 == null);
var inst_23514 = cljs.core.not.call(null,inst_23513);
var state_23528__$1 = (function (){var statearr_23532 = state_23528;
(statearr_23532[(11)] = inst_23512);

(statearr_23532[(10)] = inst_23511__$1);

return statearr_23532;
})();
if(inst_23514){
var statearr_23533_23548 = state_23528__$1;
(statearr_23533_23548[(1)] = (4));

} else {
var statearr_23534_23549 = state_23528__$1;
(statearr_23534_23549[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23529 === (3))){
var inst_23526 = (state_23528[(2)]);
var state_23528__$1 = state_23528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23528__$1,inst_23526);
} else {
if((state_val_23529 === (4))){
var inst_23511 = (state_23528[(10)]);
var inst_23516 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23511);
var state_23528__$1 = state_23528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23528__$1,(7),inst_23516);
} else {
if((state_val_23529 === (5))){
var inst_23522 = cljs.core.async.close_BANG_.call(null,out);
var state_23528__$1 = state_23528;
var statearr_23535_23550 = state_23528__$1;
(statearr_23535_23550[(2)] = inst_23522);

(statearr_23535_23550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23529 === (6))){
var inst_23524 = (state_23528[(2)]);
var state_23528__$1 = state_23528;
var statearr_23536_23551 = state_23528__$1;
(statearr_23536_23551[(2)] = inst_23524);

(statearr_23536_23551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23529 === (7))){
var inst_23512 = (state_23528[(11)]);
var inst_23518 = (state_23528[(2)]);
var inst_23519 = cljs.core.async.put_BANG_.call(null,out,inst_23518);
var inst_23508 = inst_23512;
var state_23528__$1 = (function (){var statearr_23537 = state_23528;
(statearr_23537[(12)] = inst_23519);

(statearr_23537[(9)] = inst_23508);

return statearr_23537;
})();
var statearr_23538_23552 = state_23528__$1;
(statearr_23538_23552[(2)] = null);

(statearr_23538_23552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19515__auto___23546,out))
;
return ((function (switch__19403__auto__,c__19515__auto___23546,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto____0 = (function (){
var statearr_23542 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23542[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto__);

(statearr_23542[(1)] = (1));

return statearr_23542;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto____1 = (function (state_23528){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_23528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e23543){if((e23543 instanceof Object)){
var ex__19407__auto__ = e23543;
var statearr_23544_23553 = state_23528;
(statearr_23544_23553[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23554 = state_23528;
state_23528 = G__23554;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto__ = function(state_23528){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto____1.call(this,state_23528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___23546,out))
})();
var state__19517__auto__ = (function (){var statearr_23545 = f__19516__auto__.call(null);
(statearr_23545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___23546);

return statearr_23545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___23546,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23555,opts){
var map__23559 = p__23555;
var map__23559__$1 = ((((!((map__23559 == null)))?((((map__23559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23559):map__23559);
var eval_body__$1 = cljs.core.get.call(null,map__23559__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23559__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16904__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16904__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16904__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23561){var e = e23561;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4651__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23562_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23562_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4651__auto__)){
var file_msg = temp__4651__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23567){
var vec__23568 = p__23567;
var k = cljs.core.nth.call(null,vec__23568,(0),null);
var v = cljs.core.nth.call(null,vec__23568,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23569){
var vec__23570 = p__23569;
var k = cljs.core.nth.call(null,vec__23570,(0),null);
var v = cljs.core.nth.call(null,vec__23570,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23574,p__23575){
var map__23822 = p__23574;
var map__23822__$1 = ((((!((map__23822 == null)))?((((map__23822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23822):map__23822);
var opts = map__23822__$1;
var before_jsload = cljs.core.get.call(null,map__23822__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23822__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23822__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23823 = p__23575;
var map__23823__$1 = ((((!((map__23823 == null)))?((((map__23823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23823):map__23823);
var msg = map__23823__$1;
var files = cljs.core.get.call(null,map__23823__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23823__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23823__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23976){
var state_val_23977 = (state_23976[(1)]);
if((state_val_23977 === (7))){
var inst_23839 = (state_23976[(7)]);
var inst_23840 = (state_23976[(8)]);
var inst_23838 = (state_23976[(9)]);
var inst_23837 = (state_23976[(10)]);
var inst_23845 = cljs.core._nth.call(null,inst_23838,inst_23840);
var inst_23846 = figwheel.client.file_reloading.eval_body.call(null,inst_23845,opts);
var inst_23847 = (inst_23840 + (1));
var tmp23978 = inst_23839;
var tmp23979 = inst_23838;
var tmp23980 = inst_23837;
var inst_23837__$1 = tmp23980;
var inst_23838__$1 = tmp23979;
var inst_23839__$1 = tmp23978;
var inst_23840__$1 = inst_23847;
var state_23976__$1 = (function (){var statearr_23981 = state_23976;
(statearr_23981[(7)] = inst_23839__$1);

(statearr_23981[(8)] = inst_23840__$1);

(statearr_23981[(9)] = inst_23838__$1);

(statearr_23981[(10)] = inst_23837__$1);

(statearr_23981[(11)] = inst_23846);

return statearr_23981;
})();
var statearr_23982_24068 = state_23976__$1;
(statearr_23982_24068[(2)] = null);

(statearr_23982_24068[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (20))){
var inst_23880 = (state_23976[(12)]);
var inst_23888 = figwheel.client.file_reloading.sort_files.call(null,inst_23880);
var state_23976__$1 = state_23976;
var statearr_23983_24069 = state_23976__$1;
(statearr_23983_24069[(2)] = inst_23888);

(statearr_23983_24069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (27))){
var state_23976__$1 = state_23976;
var statearr_23984_24070 = state_23976__$1;
(statearr_23984_24070[(2)] = null);

(statearr_23984_24070[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (1))){
var inst_23829 = (state_23976[(13)]);
var inst_23826 = before_jsload.call(null,files);
var inst_23827 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23828 = (function (){return ((function (inst_23829,inst_23826,inst_23827,state_val_23977,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23571_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23571_SHARP_);
});
;})(inst_23829,inst_23826,inst_23827,state_val_23977,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23829__$1 = cljs.core.filter.call(null,inst_23828,files);
var inst_23830 = cljs.core.not_empty.call(null,inst_23829__$1);
var state_23976__$1 = (function (){var statearr_23985 = state_23976;
(statearr_23985[(14)] = inst_23827);

(statearr_23985[(13)] = inst_23829__$1);

(statearr_23985[(15)] = inst_23826);

return statearr_23985;
})();
if(cljs.core.truth_(inst_23830)){
var statearr_23986_24071 = state_23976__$1;
(statearr_23986_24071[(1)] = (2));

} else {
var statearr_23987_24072 = state_23976__$1;
(statearr_23987_24072[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (24))){
var state_23976__$1 = state_23976;
var statearr_23988_24073 = state_23976__$1;
(statearr_23988_24073[(2)] = null);

(statearr_23988_24073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (39))){
var inst_23930 = (state_23976[(16)]);
var state_23976__$1 = state_23976;
var statearr_23989_24074 = state_23976__$1;
(statearr_23989_24074[(2)] = inst_23930);

(statearr_23989_24074[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (46))){
var inst_23971 = (state_23976[(2)]);
var state_23976__$1 = state_23976;
var statearr_23990_24075 = state_23976__$1;
(statearr_23990_24075[(2)] = inst_23971);

(statearr_23990_24075[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (4))){
var inst_23874 = (state_23976[(2)]);
var inst_23875 = cljs.core.List.EMPTY;
var inst_23876 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23875);
var inst_23877 = (function (){return ((function (inst_23874,inst_23875,inst_23876,state_val_23977,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23572_SHARP_){
var and__16904__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23572_SHARP_);
if(cljs.core.truth_(and__16904__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23572_SHARP_));
} else {
return and__16904__auto__;
}
});
;})(inst_23874,inst_23875,inst_23876,state_val_23977,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23878 = cljs.core.filter.call(null,inst_23877,files);
var inst_23879 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23880 = cljs.core.concat.call(null,inst_23878,inst_23879);
var state_23976__$1 = (function (){var statearr_23991 = state_23976;
(statearr_23991[(12)] = inst_23880);

(statearr_23991[(17)] = inst_23876);

(statearr_23991[(18)] = inst_23874);

return statearr_23991;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23992_24076 = state_23976__$1;
(statearr_23992_24076[(1)] = (16));

} else {
var statearr_23993_24077 = state_23976__$1;
(statearr_23993_24077[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (15))){
var inst_23864 = (state_23976[(2)]);
var state_23976__$1 = state_23976;
var statearr_23994_24078 = state_23976__$1;
(statearr_23994_24078[(2)] = inst_23864);

(statearr_23994_24078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (21))){
var inst_23890 = (state_23976[(19)]);
var inst_23890__$1 = (state_23976[(2)]);
var inst_23891 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23890__$1);
var state_23976__$1 = (function (){var statearr_23995 = state_23976;
(statearr_23995[(19)] = inst_23890__$1);

return statearr_23995;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23976__$1,(22),inst_23891);
} else {
if((state_val_23977 === (31))){
var inst_23974 = (state_23976[(2)]);
var state_23976__$1 = state_23976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23976__$1,inst_23974);
} else {
if((state_val_23977 === (32))){
var inst_23930 = (state_23976[(16)]);
var inst_23935 = inst_23930.cljs$lang$protocol_mask$partition0$;
var inst_23936 = (inst_23935 & (64));
var inst_23937 = inst_23930.cljs$core$ISeq$;
var inst_23938 = (inst_23936) || (inst_23937);
var state_23976__$1 = state_23976;
if(cljs.core.truth_(inst_23938)){
var statearr_23996_24079 = state_23976__$1;
(statearr_23996_24079[(1)] = (35));

} else {
var statearr_23997_24080 = state_23976__$1;
(statearr_23997_24080[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (40))){
var inst_23951 = (state_23976[(20)]);
var inst_23950 = (state_23976[(2)]);
var inst_23951__$1 = cljs.core.get.call(null,inst_23950,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23952 = cljs.core.get.call(null,inst_23950,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23953 = cljs.core.not_empty.call(null,inst_23951__$1);
var state_23976__$1 = (function (){var statearr_23998 = state_23976;
(statearr_23998[(21)] = inst_23952);

(statearr_23998[(20)] = inst_23951__$1);

return statearr_23998;
})();
if(cljs.core.truth_(inst_23953)){
var statearr_23999_24081 = state_23976__$1;
(statearr_23999_24081[(1)] = (41));

} else {
var statearr_24000_24082 = state_23976__$1;
(statearr_24000_24082[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (33))){
var state_23976__$1 = state_23976;
var statearr_24001_24083 = state_23976__$1;
(statearr_24001_24083[(2)] = false);

(statearr_24001_24083[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (13))){
var inst_23850 = (state_23976[(22)]);
var inst_23854 = cljs.core.chunk_first.call(null,inst_23850);
var inst_23855 = cljs.core.chunk_rest.call(null,inst_23850);
var inst_23856 = cljs.core.count.call(null,inst_23854);
var inst_23837 = inst_23855;
var inst_23838 = inst_23854;
var inst_23839 = inst_23856;
var inst_23840 = (0);
var state_23976__$1 = (function (){var statearr_24002 = state_23976;
(statearr_24002[(7)] = inst_23839);

(statearr_24002[(8)] = inst_23840);

(statearr_24002[(9)] = inst_23838);

(statearr_24002[(10)] = inst_23837);

return statearr_24002;
})();
var statearr_24003_24084 = state_23976__$1;
(statearr_24003_24084[(2)] = null);

(statearr_24003_24084[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (22))){
var inst_23894 = (state_23976[(23)]);
var inst_23898 = (state_23976[(24)]);
var inst_23890 = (state_23976[(19)]);
var inst_23893 = (state_23976[(25)]);
var inst_23893__$1 = (state_23976[(2)]);
var inst_23894__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23893__$1);
var inst_23895 = (function (){var all_files = inst_23890;
var res_SINGLEQUOTE_ = inst_23893__$1;
var res = inst_23894__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23894,inst_23898,inst_23890,inst_23893,inst_23893__$1,inst_23894__$1,state_val_23977,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23573_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23573_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23894,inst_23898,inst_23890,inst_23893,inst_23893__$1,inst_23894__$1,state_val_23977,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23896 = cljs.core.filter.call(null,inst_23895,inst_23893__$1);
var inst_23897 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23898__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23897);
var inst_23899 = cljs.core.not_empty.call(null,inst_23898__$1);
var state_23976__$1 = (function (){var statearr_24004 = state_23976;
(statearr_24004[(23)] = inst_23894__$1);

(statearr_24004[(24)] = inst_23898__$1);

(statearr_24004[(26)] = inst_23896);

(statearr_24004[(25)] = inst_23893__$1);

return statearr_24004;
})();
if(cljs.core.truth_(inst_23899)){
var statearr_24005_24085 = state_23976__$1;
(statearr_24005_24085[(1)] = (23));

} else {
var statearr_24006_24086 = state_23976__$1;
(statearr_24006_24086[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (36))){
var state_23976__$1 = state_23976;
var statearr_24007_24087 = state_23976__$1;
(statearr_24007_24087[(2)] = false);

(statearr_24007_24087[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (41))){
var inst_23951 = (state_23976[(20)]);
var inst_23955 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23956 = cljs.core.map.call(null,inst_23955,inst_23951);
var inst_23957 = cljs.core.pr_str.call(null,inst_23956);
var inst_23958 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23957)].join('');
var inst_23959 = figwheel.client.utils.log.call(null,inst_23958);
var state_23976__$1 = state_23976;
var statearr_24008_24088 = state_23976__$1;
(statearr_24008_24088[(2)] = inst_23959);

(statearr_24008_24088[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (43))){
var inst_23952 = (state_23976[(21)]);
var inst_23962 = (state_23976[(2)]);
var inst_23963 = cljs.core.not_empty.call(null,inst_23952);
var state_23976__$1 = (function (){var statearr_24009 = state_23976;
(statearr_24009[(27)] = inst_23962);

return statearr_24009;
})();
if(cljs.core.truth_(inst_23963)){
var statearr_24010_24089 = state_23976__$1;
(statearr_24010_24089[(1)] = (44));

} else {
var statearr_24011_24090 = state_23976__$1;
(statearr_24011_24090[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (29))){
var inst_23894 = (state_23976[(23)]);
var inst_23898 = (state_23976[(24)]);
var inst_23930 = (state_23976[(16)]);
var inst_23896 = (state_23976[(26)]);
var inst_23890 = (state_23976[(19)]);
var inst_23893 = (state_23976[(25)]);
var inst_23926 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23929 = (function (){var all_files = inst_23890;
var res_SINGLEQUOTE_ = inst_23893;
var res = inst_23894;
var files_not_loaded = inst_23896;
var dependencies_that_loaded = inst_23898;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23894,inst_23898,inst_23930,inst_23896,inst_23890,inst_23893,inst_23926,state_val_23977,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23928){
var map__24012 = p__23928;
var map__24012__$1 = ((((!((map__24012 == null)))?((((map__24012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24012):map__24012);
var namespace = cljs.core.get.call(null,map__24012__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23894,inst_23898,inst_23930,inst_23896,inst_23890,inst_23893,inst_23926,state_val_23977,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23930__$1 = cljs.core.group_by.call(null,inst_23929,inst_23896);
var inst_23932 = (inst_23930__$1 == null);
var inst_23933 = cljs.core.not.call(null,inst_23932);
var state_23976__$1 = (function (){var statearr_24014 = state_23976;
(statearr_24014[(16)] = inst_23930__$1);

(statearr_24014[(28)] = inst_23926);

return statearr_24014;
})();
if(inst_23933){
var statearr_24015_24091 = state_23976__$1;
(statearr_24015_24091[(1)] = (32));

} else {
var statearr_24016_24092 = state_23976__$1;
(statearr_24016_24092[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (44))){
var inst_23952 = (state_23976[(21)]);
var inst_23965 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23952);
var inst_23966 = cljs.core.pr_str.call(null,inst_23965);
var inst_23967 = [cljs.core.str("not required: "),cljs.core.str(inst_23966)].join('');
var inst_23968 = figwheel.client.utils.log.call(null,inst_23967);
var state_23976__$1 = state_23976;
var statearr_24017_24093 = state_23976__$1;
(statearr_24017_24093[(2)] = inst_23968);

(statearr_24017_24093[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (6))){
var inst_23871 = (state_23976[(2)]);
var state_23976__$1 = state_23976;
var statearr_24018_24094 = state_23976__$1;
(statearr_24018_24094[(2)] = inst_23871);

(statearr_24018_24094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (28))){
var inst_23896 = (state_23976[(26)]);
var inst_23923 = (state_23976[(2)]);
var inst_23924 = cljs.core.not_empty.call(null,inst_23896);
var state_23976__$1 = (function (){var statearr_24019 = state_23976;
(statearr_24019[(29)] = inst_23923);

return statearr_24019;
})();
if(cljs.core.truth_(inst_23924)){
var statearr_24020_24095 = state_23976__$1;
(statearr_24020_24095[(1)] = (29));

} else {
var statearr_24021_24096 = state_23976__$1;
(statearr_24021_24096[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (25))){
var inst_23894 = (state_23976[(23)]);
var inst_23910 = (state_23976[(2)]);
var inst_23911 = cljs.core.not_empty.call(null,inst_23894);
var state_23976__$1 = (function (){var statearr_24022 = state_23976;
(statearr_24022[(30)] = inst_23910);

return statearr_24022;
})();
if(cljs.core.truth_(inst_23911)){
var statearr_24023_24097 = state_23976__$1;
(statearr_24023_24097[(1)] = (26));

} else {
var statearr_24024_24098 = state_23976__$1;
(statearr_24024_24098[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (34))){
var inst_23945 = (state_23976[(2)]);
var state_23976__$1 = state_23976;
if(cljs.core.truth_(inst_23945)){
var statearr_24025_24099 = state_23976__$1;
(statearr_24025_24099[(1)] = (38));

} else {
var statearr_24026_24100 = state_23976__$1;
(statearr_24026_24100[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (17))){
var state_23976__$1 = state_23976;
var statearr_24027_24101 = state_23976__$1;
(statearr_24027_24101[(2)] = recompile_dependents);

(statearr_24027_24101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (3))){
var state_23976__$1 = state_23976;
var statearr_24028_24102 = state_23976__$1;
(statearr_24028_24102[(2)] = null);

(statearr_24028_24102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (12))){
var inst_23867 = (state_23976[(2)]);
var state_23976__$1 = state_23976;
var statearr_24029_24103 = state_23976__$1;
(statearr_24029_24103[(2)] = inst_23867);

(statearr_24029_24103[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (2))){
var inst_23829 = (state_23976[(13)]);
var inst_23836 = cljs.core.seq.call(null,inst_23829);
var inst_23837 = inst_23836;
var inst_23838 = null;
var inst_23839 = (0);
var inst_23840 = (0);
var state_23976__$1 = (function (){var statearr_24030 = state_23976;
(statearr_24030[(7)] = inst_23839);

(statearr_24030[(8)] = inst_23840);

(statearr_24030[(9)] = inst_23838);

(statearr_24030[(10)] = inst_23837);

return statearr_24030;
})();
var statearr_24031_24104 = state_23976__$1;
(statearr_24031_24104[(2)] = null);

(statearr_24031_24104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (23))){
var inst_23894 = (state_23976[(23)]);
var inst_23898 = (state_23976[(24)]);
var inst_23896 = (state_23976[(26)]);
var inst_23890 = (state_23976[(19)]);
var inst_23893 = (state_23976[(25)]);
var inst_23901 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23903 = (function (){var all_files = inst_23890;
var res_SINGLEQUOTE_ = inst_23893;
var res = inst_23894;
var files_not_loaded = inst_23896;
var dependencies_that_loaded = inst_23898;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23894,inst_23898,inst_23896,inst_23890,inst_23893,inst_23901,state_val_23977,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23902){
var map__24032 = p__23902;
var map__24032__$1 = ((((!((map__24032 == null)))?((((map__24032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24032):map__24032);
var request_url = cljs.core.get.call(null,map__24032__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23894,inst_23898,inst_23896,inst_23890,inst_23893,inst_23901,state_val_23977,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23904 = cljs.core.reverse.call(null,inst_23898);
var inst_23905 = cljs.core.map.call(null,inst_23903,inst_23904);
var inst_23906 = cljs.core.pr_str.call(null,inst_23905);
var inst_23907 = figwheel.client.utils.log.call(null,inst_23906);
var state_23976__$1 = (function (){var statearr_24034 = state_23976;
(statearr_24034[(31)] = inst_23901);

return statearr_24034;
})();
var statearr_24035_24105 = state_23976__$1;
(statearr_24035_24105[(2)] = inst_23907);

(statearr_24035_24105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (35))){
var state_23976__$1 = state_23976;
var statearr_24036_24106 = state_23976__$1;
(statearr_24036_24106[(2)] = true);

(statearr_24036_24106[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (19))){
var inst_23880 = (state_23976[(12)]);
var inst_23886 = figwheel.client.file_reloading.expand_files.call(null,inst_23880);
var state_23976__$1 = state_23976;
var statearr_24037_24107 = state_23976__$1;
(statearr_24037_24107[(2)] = inst_23886);

(statearr_24037_24107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (11))){
var state_23976__$1 = state_23976;
var statearr_24038_24108 = state_23976__$1;
(statearr_24038_24108[(2)] = null);

(statearr_24038_24108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (9))){
var inst_23869 = (state_23976[(2)]);
var state_23976__$1 = state_23976;
var statearr_24039_24109 = state_23976__$1;
(statearr_24039_24109[(2)] = inst_23869);

(statearr_24039_24109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (5))){
var inst_23839 = (state_23976[(7)]);
var inst_23840 = (state_23976[(8)]);
var inst_23842 = (inst_23840 < inst_23839);
var inst_23843 = inst_23842;
var state_23976__$1 = state_23976;
if(cljs.core.truth_(inst_23843)){
var statearr_24040_24110 = state_23976__$1;
(statearr_24040_24110[(1)] = (7));

} else {
var statearr_24041_24111 = state_23976__$1;
(statearr_24041_24111[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (14))){
var inst_23850 = (state_23976[(22)]);
var inst_23859 = cljs.core.first.call(null,inst_23850);
var inst_23860 = figwheel.client.file_reloading.eval_body.call(null,inst_23859,opts);
var inst_23861 = cljs.core.next.call(null,inst_23850);
var inst_23837 = inst_23861;
var inst_23838 = null;
var inst_23839 = (0);
var inst_23840 = (0);
var state_23976__$1 = (function (){var statearr_24042 = state_23976;
(statearr_24042[(7)] = inst_23839);

(statearr_24042[(8)] = inst_23840);

(statearr_24042[(9)] = inst_23838);

(statearr_24042[(10)] = inst_23837);

(statearr_24042[(32)] = inst_23860);

return statearr_24042;
})();
var statearr_24043_24112 = state_23976__$1;
(statearr_24043_24112[(2)] = null);

(statearr_24043_24112[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (45))){
var state_23976__$1 = state_23976;
var statearr_24044_24113 = state_23976__$1;
(statearr_24044_24113[(2)] = null);

(statearr_24044_24113[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (26))){
var inst_23894 = (state_23976[(23)]);
var inst_23898 = (state_23976[(24)]);
var inst_23896 = (state_23976[(26)]);
var inst_23890 = (state_23976[(19)]);
var inst_23893 = (state_23976[(25)]);
var inst_23913 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23915 = (function (){var all_files = inst_23890;
var res_SINGLEQUOTE_ = inst_23893;
var res = inst_23894;
var files_not_loaded = inst_23896;
var dependencies_that_loaded = inst_23898;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23894,inst_23898,inst_23896,inst_23890,inst_23893,inst_23913,state_val_23977,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23914){
var map__24045 = p__23914;
var map__24045__$1 = ((((!((map__24045 == null)))?((((map__24045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24045):map__24045);
var namespace = cljs.core.get.call(null,map__24045__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24045__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23894,inst_23898,inst_23896,inst_23890,inst_23893,inst_23913,state_val_23977,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23916 = cljs.core.map.call(null,inst_23915,inst_23894);
var inst_23917 = cljs.core.pr_str.call(null,inst_23916);
var inst_23918 = figwheel.client.utils.log.call(null,inst_23917);
var inst_23919 = (function (){var all_files = inst_23890;
var res_SINGLEQUOTE_ = inst_23893;
var res = inst_23894;
var files_not_loaded = inst_23896;
var dependencies_that_loaded = inst_23898;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23894,inst_23898,inst_23896,inst_23890,inst_23893,inst_23913,inst_23915,inst_23916,inst_23917,inst_23918,state_val_23977,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23894,inst_23898,inst_23896,inst_23890,inst_23893,inst_23913,inst_23915,inst_23916,inst_23917,inst_23918,state_val_23977,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23920 = setTimeout(inst_23919,(10));
var state_23976__$1 = (function (){var statearr_24047 = state_23976;
(statearr_24047[(33)] = inst_23913);

(statearr_24047[(34)] = inst_23918);

return statearr_24047;
})();
var statearr_24048_24114 = state_23976__$1;
(statearr_24048_24114[(2)] = inst_23920);

(statearr_24048_24114[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (16))){
var state_23976__$1 = state_23976;
var statearr_24049_24115 = state_23976__$1;
(statearr_24049_24115[(2)] = reload_dependents);

(statearr_24049_24115[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (38))){
var inst_23930 = (state_23976[(16)]);
var inst_23947 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23930);
var state_23976__$1 = state_23976;
var statearr_24050_24116 = state_23976__$1;
(statearr_24050_24116[(2)] = inst_23947);

(statearr_24050_24116[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (30))){
var state_23976__$1 = state_23976;
var statearr_24051_24117 = state_23976__$1;
(statearr_24051_24117[(2)] = null);

(statearr_24051_24117[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (10))){
var inst_23850 = (state_23976[(22)]);
var inst_23852 = cljs.core.chunked_seq_QMARK_.call(null,inst_23850);
var state_23976__$1 = state_23976;
if(inst_23852){
var statearr_24052_24118 = state_23976__$1;
(statearr_24052_24118[(1)] = (13));

} else {
var statearr_24053_24119 = state_23976__$1;
(statearr_24053_24119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (18))){
var inst_23884 = (state_23976[(2)]);
var state_23976__$1 = state_23976;
if(cljs.core.truth_(inst_23884)){
var statearr_24054_24120 = state_23976__$1;
(statearr_24054_24120[(1)] = (19));

} else {
var statearr_24055_24121 = state_23976__$1;
(statearr_24055_24121[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (42))){
var state_23976__$1 = state_23976;
var statearr_24056_24122 = state_23976__$1;
(statearr_24056_24122[(2)] = null);

(statearr_24056_24122[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (37))){
var inst_23942 = (state_23976[(2)]);
var state_23976__$1 = state_23976;
var statearr_24057_24123 = state_23976__$1;
(statearr_24057_24123[(2)] = inst_23942);

(statearr_24057_24123[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23977 === (8))){
var inst_23837 = (state_23976[(10)]);
var inst_23850 = (state_23976[(22)]);
var inst_23850__$1 = cljs.core.seq.call(null,inst_23837);
var state_23976__$1 = (function (){var statearr_24058 = state_23976;
(statearr_24058[(22)] = inst_23850__$1);

return statearr_24058;
})();
if(inst_23850__$1){
var statearr_24059_24124 = state_23976__$1;
(statearr_24059_24124[(1)] = (10));

} else {
var statearr_24060_24125 = state_23976__$1;
(statearr_24060_24125[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});})(c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19403__auto__,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto____0 = (function (){
var statearr_24064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24064[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto__);

(statearr_24064[(1)] = (1));

return statearr_24064;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto____1 = (function (state_23976){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_23976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e24065){if((e24065 instanceof Object)){
var ex__19407__auto__ = e24065;
var statearr_24066_24126 = state_23976;
(statearr_24066_24126[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24127 = state_23976;
state_23976 = G__24127;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto__ = function(state_23976){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto____1.call(this,state_23976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19517__auto__ = (function (){var statearr_24067 = f__19516__auto__.call(null);
(statearr_24067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_24067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__,map__23822,map__23822__$1,opts,before_jsload,on_jsload,reload_dependents,map__23823,map__23823__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19515__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24130,link){
var map__24133 = p__24130;
var map__24133__$1 = ((((!((map__24133 == null)))?((((map__24133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24133):map__24133);
var file = cljs.core.get.call(null,map__24133__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4653__auto__ = link.href;
if(cljs.core.truth_(temp__4653__auto__)){
var link_href = temp__4653__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4653__auto__,map__24133,map__24133__$1,file){
return (function (p1__24128_SHARP_,p2__24129_SHARP_){
if(cljs.core._EQ_.call(null,p1__24128_SHARP_,p2__24129_SHARP_)){
return p1__24128_SHARP_;
} else {
return false;
}
});})(link_href,temp__4653__auto__,map__24133,map__24133__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4653__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24139){
var map__24140 = p__24139;
var map__24140__$1 = ((((!((map__24140 == null)))?((((map__24140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24140):map__24140);
var match_length = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24140__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24135_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24135_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4653__auto__)){
var res = temp__4653__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24142 = [];
var len__17974__auto___24145 = arguments.length;
var i__17975__auto___24146 = (0);
while(true){
if((i__17975__auto___24146 < len__17974__auto___24145)){
args24142.push((arguments[i__17975__auto___24146]));

var G__24147 = (i__17975__auto___24146 + (1));
i__17975__auto___24146 = G__24147;
continue;
} else {
}
break;
}

var G__24144 = args24142.length;
switch (G__24144) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24142.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24149_SHARP_,p2__24150_SHARP_){
return cljs.core.assoc.call(null,p1__24149_SHARP_,cljs.core.get.call(null,p2__24150_SHARP_,key),p2__24150_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24151){
var map__24154 = p__24151;
var map__24154__$1 = ((((!((map__24154 == null)))?((((map__24154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24154):map__24154);
var f_data = map__24154__$1;
var file = cljs.core.get.call(null,map__24154__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4653__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4653__auto__)){
var link = temp__4653__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24156,files_msg){
var map__24163 = p__24156;
var map__24163__$1 = ((((!((map__24163 == null)))?((((map__24163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24163):map__24163);
var opts = map__24163__$1;
var on_cssload = cljs.core.get.call(null,map__24163__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24165_24169 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24166_24170 = null;
var count__24167_24171 = (0);
var i__24168_24172 = (0);
while(true){
if((i__24168_24172 < count__24167_24171)){
var f_24173 = cljs.core._nth.call(null,chunk__24166_24170,i__24168_24172);
figwheel.client.file_reloading.reload_css_file.call(null,f_24173);

var G__24174 = seq__24165_24169;
var G__24175 = chunk__24166_24170;
var G__24176 = count__24167_24171;
var G__24177 = (i__24168_24172 + (1));
seq__24165_24169 = G__24174;
chunk__24166_24170 = G__24175;
count__24167_24171 = G__24176;
i__24168_24172 = G__24177;
continue;
} else {
var temp__4653__auto___24178 = cljs.core.seq.call(null,seq__24165_24169);
if(temp__4653__auto___24178){
var seq__24165_24179__$1 = temp__4653__auto___24178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24165_24179__$1)){
var c__17719__auto___24180 = cljs.core.chunk_first.call(null,seq__24165_24179__$1);
var G__24181 = cljs.core.chunk_rest.call(null,seq__24165_24179__$1);
var G__24182 = c__17719__auto___24180;
var G__24183 = cljs.core.count.call(null,c__17719__auto___24180);
var G__24184 = (0);
seq__24165_24169 = G__24181;
chunk__24166_24170 = G__24182;
count__24167_24171 = G__24183;
i__24168_24172 = G__24184;
continue;
} else {
var f_24185 = cljs.core.first.call(null,seq__24165_24179__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24185);

var G__24186 = cljs.core.next.call(null,seq__24165_24179__$1);
var G__24187 = null;
var G__24188 = (0);
var G__24189 = (0);
seq__24165_24169 = G__24186;
chunk__24166_24170 = G__24187;
count__24167_24171 = G__24188;
i__24168_24172 = G__24189;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24163,map__24163__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24163,map__24163__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1450953133800