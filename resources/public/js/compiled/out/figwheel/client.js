// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24625 = cljs.core._EQ_;
var expr__24626 = (function (){var or__16916__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16916__auto__)){
return or__16916__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24625.call(null,"true",expr__24626))){
return true;
} else {
if(cljs.core.truth_(pred__24625.call(null,"false",expr__24626))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24626)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24628__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24629__i = 0, G__24629__a = new Array(arguments.length -  0);
while (G__24629__i < G__24629__a.length) {G__24629__a[G__24629__i] = arguments[G__24629__i + 0]; ++G__24629__i;}
  args = new cljs.core.IndexedSeq(G__24629__a,0);
} 
return G__24628__delegate.call(this,args);};
G__24628.cljs$lang$maxFixedArity = 0;
G__24628.cljs$lang$applyTo = (function (arglist__24630){
var args = cljs.core.seq(arglist__24630);
return G__24628__delegate(args);
});
G__24628.cljs$core$IFn$_invoke$arity$variadic = G__24628__delegate;
return G__24628;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24631){
var map__24634 = p__24631;
var map__24634__$1 = ((((!((map__24634 == null)))?((((map__24634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24634):map__24634);
var message = cljs.core.get.call(null,map__24634__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24634__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16916__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16916__auto__)){
return or__16916__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16904__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16904__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16904__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19515__auto___24796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___24796,ch){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___24796,ch){
return (function (state_24765){
var state_val_24766 = (state_24765[(1)]);
if((state_val_24766 === (7))){
var inst_24761 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24767_24797 = state_24765__$1;
(statearr_24767_24797[(2)] = inst_24761);

(statearr_24767_24797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (1))){
var state_24765__$1 = state_24765;
var statearr_24768_24798 = state_24765__$1;
(statearr_24768_24798[(2)] = null);

(statearr_24768_24798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (4))){
var inst_24718 = (state_24765[(7)]);
var inst_24718__$1 = (state_24765[(2)]);
var state_24765__$1 = (function (){var statearr_24769 = state_24765;
(statearr_24769[(7)] = inst_24718__$1);

return statearr_24769;
})();
if(cljs.core.truth_(inst_24718__$1)){
var statearr_24770_24799 = state_24765__$1;
(statearr_24770_24799[(1)] = (5));

} else {
var statearr_24771_24800 = state_24765__$1;
(statearr_24771_24800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (15))){
var inst_24725 = (state_24765[(8)]);
var inst_24740 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24725);
var inst_24741 = cljs.core.first.call(null,inst_24740);
var inst_24742 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24741);
var inst_24743 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24742)].join('');
var inst_24744 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24743);
var state_24765__$1 = state_24765;
var statearr_24772_24801 = state_24765__$1;
(statearr_24772_24801[(2)] = inst_24744);

(statearr_24772_24801[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (13))){
var inst_24749 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24773_24802 = state_24765__$1;
(statearr_24773_24802[(2)] = inst_24749);

(statearr_24773_24802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (6))){
var state_24765__$1 = state_24765;
var statearr_24774_24803 = state_24765__$1;
(statearr_24774_24803[(2)] = null);

(statearr_24774_24803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (17))){
var inst_24747 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24775_24804 = state_24765__$1;
(statearr_24775_24804[(2)] = inst_24747);

(statearr_24775_24804[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (3))){
var inst_24763 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24765__$1,inst_24763);
} else {
if((state_val_24766 === (12))){
var inst_24724 = (state_24765[(9)]);
var inst_24738 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24724,opts);
var state_24765__$1 = state_24765;
if(cljs.core.truth_(inst_24738)){
var statearr_24776_24805 = state_24765__$1;
(statearr_24776_24805[(1)] = (15));

} else {
var statearr_24777_24806 = state_24765__$1;
(statearr_24777_24806[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (2))){
var state_24765__$1 = state_24765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24765__$1,(4),ch);
} else {
if((state_val_24766 === (11))){
var inst_24725 = (state_24765[(8)]);
var inst_24730 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24731 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24725);
var inst_24732 = cljs.core.async.timeout.call(null,(1000));
var inst_24733 = [inst_24731,inst_24732];
var inst_24734 = (new cljs.core.PersistentVector(null,2,(5),inst_24730,inst_24733,null));
var state_24765__$1 = state_24765;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24765__$1,(14),inst_24734);
} else {
if((state_val_24766 === (9))){
var inst_24725 = (state_24765[(8)]);
var inst_24751 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24752 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24725);
var inst_24753 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24752);
var inst_24754 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24753)].join('');
var inst_24755 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24754);
var state_24765__$1 = (function (){var statearr_24778 = state_24765;
(statearr_24778[(10)] = inst_24751);

return statearr_24778;
})();
var statearr_24779_24807 = state_24765__$1;
(statearr_24779_24807[(2)] = inst_24755);

(statearr_24779_24807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (5))){
var inst_24718 = (state_24765[(7)]);
var inst_24720 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24721 = (new cljs.core.PersistentArrayMap(null,2,inst_24720,null));
var inst_24722 = (new cljs.core.PersistentHashSet(null,inst_24721,null));
var inst_24723 = figwheel.client.focus_msgs.call(null,inst_24722,inst_24718);
var inst_24724 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24723);
var inst_24725 = cljs.core.first.call(null,inst_24723);
var inst_24726 = figwheel.client.autoload_QMARK_.call(null);
var state_24765__$1 = (function (){var statearr_24780 = state_24765;
(statearr_24780[(9)] = inst_24724);

(statearr_24780[(8)] = inst_24725);

return statearr_24780;
})();
if(cljs.core.truth_(inst_24726)){
var statearr_24781_24808 = state_24765__$1;
(statearr_24781_24808[(1)] = (8));

} else {
var statearr_24782_24809 = state_24765__$1;
(statearr_24782_24809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (14))){
var inst_24736 = (state_24765[(2)]);
var state_24765__$1 = state_24765;
var statearr_24783_24810 = state_24765__$1;
(statearr_24783_24810[(2)] = inst_24736);

(statearr_24783_24810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (16))){
var state_24765__$1 = state_24765;
var statearr_24784_24811 = state_24765__$1;
(statearr_24784_24811[(2)] = null);

(statearr_24784_24811[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (10))){
var inst_24757 = (state_24765[(2)]);
var state_24765__$1 = (function (){var statearr_24785 = state_24765;
(statearr_24785[(11)] = inst_24757);

return statearr_24785;
})();
var statearr_24786_24812 = state_24765__$1;
(statearr_24786_24812[(2)] = null);

(statearr_24786_24812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24766 === (8))){
var inst_24724 = (state_24765[(9)]);
var inst_24728 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24724,opts);
var state_24765__$1 = state_24765;
if(cljs.core.truth_(inst_24728)){
var statearr_24787_24813 = state_24765__$1;
(statearr_24787_24813[(1)] = (11));

} else {
var statearr_24788_24814 = state_24765__$1;
(statearr_24788_24814[(1)] = (12));

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
});})(c__19515__auto___24796,ch))
;
return ((function (switch__19403__auto__,c__19515__auto___24796,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19404__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19404__auto____0 = (function (){
var statearr_24792 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24792[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19404__auto__);

(statearr_24792[(1)] = (1));

return statearr_24792;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19404__auto____1 = (function (state_24765){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_24765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e24793){if((e24793 instanceof Object)){
var ex__19407__auto__ = e24793;
var statearr_24794_24815 = state_24765;
(statearr_24794_24815[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24816 = state_24765;
state_24765 = G__24816;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19404__auto__ = function(state_24765){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19404__auto____1.call(this,state_24765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19404__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19404__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___24796,ch))
})();
var state__19517__auto__ = (function (){var statearr_24795 = f__19516__auto__.call(null);
(statearr_24795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___24796);

return statearr_24795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___24796,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24817_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24817_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24824 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24824){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24822 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24823 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24822,_STAR_print_newline_STAR_24823,base_path_24824){
return (function() { 
var G__24825__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24826__i = 0, G__24826__a = new Array(arguments.length -  0);
while (G__24826__i < G__24826__a.length) {G__24826__a[G__24826__i] = arguments[G__24826__i + 0]; ++G__24826__i;}
  args = new cljs.core.IndexedSeq(G__24826__a,0);
} 
return G__24825__delegate.call(this,args);};
G__24825.cljs$lang$maxFixedArity = 0;
G__24825.cljs$lang$applyTo = (function (arglist__24827){
var args = cljs.core.seq(arglist__24827);
return G__24825__delegate(args);
});
G__24825.cljs$core$IFn$_invoke$arity$variadic = G__24825__delegate;
return G__24825;
})()
;})(_STAR_print_fn_STAR_24822,_STAR_print_newline_STAR_24823,base_path_24824))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24823;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24822;
}}catch (e24821){if((e24821 instanceof Error)){
var e = e24821;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24824], null));
} else {
var e = e24821;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24824))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24828){
var map__24835 = p__24828;
var map__24835__$1 = ((((!((map__24835 == null)))?((((map__24835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24835):map__24835);
var opts = map__24835__$1;
var build_id = cljs.core.get.call(null,map__24835__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24835,map__24835__$1,opts,build_id){
return (function (p__24837){
var vec__24838 = p__24837;
var map__24839 = cljs.core.nth.call(null,vec__24838,(0),null);
var map__24839__$1 = ((((!((map__24839 == null)))?((((map__24839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24839):map__24839);
var msg = map__24839__$1;
var msg_name = cljs.core.get.call(null,map__24839__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24838,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24838,map__24839,map__24839__$1,msg,msg_name,_,map__24835,map__24835__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24838,map__24839,map__24839__$1,msg,msg_name,_,map__24835,map__24835__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24835,map__24835__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24845){
var vec__24846 = p__24845;
var map__24847 = cljs.core.nth.call(null,vec__24846,(0),null);
var map__24847__$1 = ((((!((map__24847 == null)))?((((map__24847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24847):map__24847);
var msg = map__24847__$1;
var msg_name = cljs.core.get.call(null,map__24847__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24846,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24849){
var map__24859 = p__24849;
var map__24859__$1 = ((((!((map__24859 == null)))?((((map__24859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24859):map__24859);
var on_compile_warning = cljs.core.get.call(null,map__24859__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24859__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24859,map__24859__$1,on_compile_warning,on_compile_fail){
return (function (p__24861){
var vec__24862 = p__24861;
var map__24863 = cljs.core.nth.call(null,vec__24862,(0),null);
var map__24863__$1 = ((((!((map__24863 == null)))?((((map__24863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24863):map__24863);
var msg = map__24863__$1;
var msg_name = cljs.core.get.call(null,map__24863__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24862,(1));
var pred__24865 = cljs.core._EQ_;
var expr__24866 = msg_name;
if(cljs.core.truth_(pred__24865.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24866))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24865.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24866))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24859,map__24859__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__,msg_hist,msg_names,msg){
return (function (state_25082){
var state_val_25083 = (state_25082[(1)]);
if((state_val_25083 === (7))){
var inst_25006 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
if(cljs.core.truth_(inst_25006)){
var statearr_25084_25130 = state_25082__$1;
(statearr_25084_25130[(1)] = (8));

} else {
var statearr_25085_25131 = state_25082__$1;
(statearr_25085_25131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (20))){
var inst_25076 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25086_25132 = state_25082__$1;
(statearr_25086_25132[(2)] = inst_25076);

(statearr_25086_25132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (27))){
var inst_25072 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25087_25133 = state_25082__$1;
(statearr_25087_25133[(2)] = inst_25072);

(statearr_25087_25133[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (1))){
var inst_24999 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25082__$1 = state_25082;
if(cljs.core.truth_(inst_24999)){
var statearr_25088_25134 = state_25082__$1;
(statearr_25088_25134[(1)] = (2));

} else {
var statearr_25089_25135 = state_25082__$1;
(statearr_25089_25135[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (24))){
var inst_25074 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25090_25136 = state_25082__$1;
(statearr_25090_25136[(2)] = inst_25074);

(statearr_25090_25136[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (4))){
var inst_25080 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25082__$1,inst_25080);
} else {
if((state_val_25083 === (15))){
var inst_25078 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25091_25137 = state_25082__$1;
(statearr_25091_25137[(2)] = inst_25078);

(statearr_25091_25137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (21))){
var inst_25037 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25092_25138 = state_25082__$1;
(statearr_25092_25138[(2)] = inst_25037);

(statearr_25092_25138[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (31))){
var inst_25061 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25082__$1 = state_25082;
if(cljs.core.truth_(inst_25061)){
var statearr_25093_25139 = state_25082__$1;
(statearr_25093_25139[(1)] = (34));

} else {
var statearr_25094_25140 = state_25082__$1;
(statearr_25094_25140[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (32))){
var inst_25070 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25095_25141 = state_25082__$1;
(statearr_25095_25141[(2)] = inst_25070);

(statearr_25095_25141[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (33))){
var inst_25059 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25096_25142 = state_25082__$1;
(statearr_25096_25142[(2)] = inst_25059);

(statearr_25096_25142[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (13))){
var inst_25020 = figwheel.client.heads_up.clear.call(null);
var state_25082__$1 = state_25082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25082__$1,(16),inst_25020);
} else {
if((state_val_25083 === (22))){
var inst_25041 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25042 = figwheel.client.heads_up.append_message.call(null,inst_25041);
var state_25082__$1 = state_25082;
var statearr_25097_25143 = state_25082__$1;
(statearr_25097_25143[(2)] = inst_25042);

(statearr_25097_25143[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (36))){
var inst_25068 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25098_25144 = state_25082__$1;
(statearr_25098_25144[(2)] = inst_25068);

(statearr_25098_25144[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (29))){
var inst_25052 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25099_25145 = state_25082__$1;
(statearr_25099_25145[(2)] = inst_25052);

(statearr_25099_25145[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (6))){
var inst_25001 = (state_25082[(7)]);
var state_25082__$1 = state_25082;
var statearr_25100_25146 = state_25082__$1;
(statearr_25100_25146[(2)] = inst_25001);

(statearr_25100_25146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (28))){
var inst_25048 = (state_25082[(2)]);
var inst_25049 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25050 = figwheel.client.heads_up.display_warning.call(null,inst_25049);
var state_25082__$1 = (function (){var statearr_25101 = state_25082;
(statearr_25101[(8)] = inst_25048);

return statearr_25101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25082__$1,(29),inst_25050);
} else {
if((state_val_25083 === (25))){
var inst_25046 = figwheel.client.heads_up.clear.call(null);
var state_25082__$1 = state_25082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25082__$1,(28),inst_25046);
} else {
if((state_val_25083 === (34))){
var inst_25063 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25082__$1 = state_25082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25082__$1,(37),inst_25063);
} else {
if((state_val_25083 === (17))){
var inst_25028 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25102_25147 = state_25082__$1;
(statearr_25102_25147[(2)] = inst_25028);

(statearr_25102_25147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (3))){
var inst_25018 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25082__$1 = state_25082;
if(cljs.core.truth_(inst_25018)){
var statearr_25103_25148 = state_25082__$1;
(statearr_25103_25148[(1)] = (13));

} else {
var statearr_25104_25149 = state_25082__$1;
(statearr_25104_25149[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (12))){
var inst_25014 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25105_25150 = state_25082__$1;
(statearr_25105_25150[(2)] = inst_25014);

(statearr_25105_25150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (2))){
var inst_25001 = (state_25082[(7)]);
var inst_25001__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25082__$1 = (function (){var statearr_25106 = state_25082;
(statearr_25106[(7)] = inst_25001__$1);

return statearr_25106;
})();
if(cljs.core.truth_(inst_25001__$1)){
var statearr_25107_25151 = state_25082__$1;
(statearr_25107_25151[(1)] = (5));

} else {
var statearr_25108_25152 = state_25082__$1;
(statearr_25108_25152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (23))){
var inst_25044 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25082__$1 = state_25082;
if(cljs.core.truth_(inst_25044)){
var statearr_25109_25153 = state_25082__$1;
(statearr_25109_25153[(1)] = (25));

} else {
var statearr_25110_25154 = state_25082__$1;
(statearr_25110_25154[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (35))){
var state_25082__$1 = state_25082;
var statearr_25111_25155 = state_25082__$1;
(statearr_25111_25155[(2)] = null);

(statearr_25111_25155[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (19))){
var inst_25039 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25082__$1 = state_25082;
if(cljs.core.truth_(inst_25039)){
var statearr_25112_25156 = state_25082__$1;
(statearr_25112_25156[(1)] = (22));

} else {
var statearr_25113_25157 = state_25082__$1;
(statearr_25113_25157[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (11))){
var inst_25010 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25114_25158 = state_25082__$1;
(statearr_25114_25158[(2)] = inst_25010);

(statearr_25114_25158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (9))){
var inst_25012 = figwheel.client.heads_up.clear.call(null);
var state_25082__$1 = state_25082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25082__$1,(12),inst_25012);
} else {
if((state_val_25083 === (5))){
var inst_25003 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25082__$1 = state_25082;
var statearr_25115_25159 = state_25082__$1;
(statearr_25115_25159[(2)] = inst_25003);

(statearr_25115_25159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (14))){
var inst_25030 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25082__$1 = state_25082;
if(cljs.core.truth_(inst_25030)){
var statearr_25116_25160 = state_25082__$1;
(statearr_25116_25160[(1)] = (18));

} else {
var statearr_25117_25161 = state_25082__$1;
(statearr_25117_25161[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (26))){
var inst_25054 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25082__$1 = state_25082;
if(cljs.core.truth_(inst_25054)){
var statearr_25118_25162 = state_25082__$1;
(statearr_25118_25162[(1)] = (30));

} else {
var statearr_25119_25163 = state_25082__$1;
(statearr_25119_25163[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (16))){
var inst_25022 = (state_25082[(2)]);
var inst_25023 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25024 = figwheel.client.format_messages.call(null,inst_25023);
var inst_25025 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25026 = figwheel.client.heads_up.display_error.call(null,inst_25024,inst_25025);
var state_25082__$1 = (function (){var statearr_25120 = state_25082;
(statearr_25120[(9)] = inst_25022);

return statearr_25120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25082__$1,(17),inst_25026);
} else {
if((state_val_25083 === (30))){
var inst_25056 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25057 = figwheel.client.heads_up.display_warning.call(null,inst_25056);
var state_25082__$1 = state_25082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25082__$1,(33),inst_25057);
} else {
if((state_val_25083 === (10))){
var inst_25016 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25121_25164 = state_25082__$1;
(statearr_25121_25164[(2)] = inst_25016);

(statearr_25121_25164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (18))){
var inst_25032 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25033 = figwheel.client.format_messages.call(null,inst_25032);
var inst_25034 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25035 = figwheel.client.heads_up.display_error.call(null,inst_25033,inst_25034);
var state_25082__$1 = state_25082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25082__$1,(21),inst_25035);
} else {
if((state_val_25083 === (37))){
var inst_25065 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25122_25165 = state_25082__$1;
(statearr_25122_25165[(2)] = inst_25065);

(statearr_25122_25165[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (8))){
var inst_25008 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25082__$1 = state_25082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25082__$1,(11),inst_25008);
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
});})(c__19515__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19403__auto__,c__19515__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto____0 = (function (){
var statearr_25126 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25126[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto__);

(statearr_25126[(1)] = (1));

return statearr_25126;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto____1 = (function (state_25082){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_25082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e25127){if((e25127 instanceof Object)){
var ex__19407__auto__ = e25127;
var statearr_25128_25166 = state_25082;
(statearr_25128_25166[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25167 = state_25082;
state_25082 = G__25167;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto__ = function(state_25082){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto____1.call(this,state_25082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__,msg_hist,msg_names,msg))
})();
var state__19517__auto__ = (function (){var statearr_25129 = f__19516__auto__.call(null);
(statearr_25129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_25129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__,msg_hist,msg_names,msg))
);

return c__19515__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19515__auto___25230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto___25230,ch){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto___25230,ch){
return (function (state_25213){
var state_val_25214 = (state_25213[(1)]);
if((state_val_25214 === (1))){
var state_25213__$1 = state_25213;
var statearr_25215_25231 = state_25213__$1;
(statearr_25215_25231[(2)] = null);

(statearr_25215_25231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (2))){
var state_25213__$1 = state_25213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25213__$1,(4),ch);
} else {
if((state_val_25214 === (3))){
var inst_25211 = (state_25213[(2)]);
var state_25213__$1 = state_25213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25213__$1,inst_25211);
} else {
if((state_val_25214 === (4))){
var inst_25201 = (state_25213[(7)]);
var inst_25201__$1 = (state_25213[(2)]);
var state_25213__$1 = (function (){var statearr_25216 = state_25213;
(statearr_25216[(7)] = inst_25201__$1);

return statearr_25216;
})();
if(cljs.core.truth_(inst_25201__$1)){
var statearr_25217_25232 = state_25213__$1;
(statearr_25217_25232[(1)] = (5));

} else {
var statearr_25218_25233 = state_25213__$1;
(statearr_25218_25233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (5))){
var inst_25201 = (state_25213[(7)]);
var inst_25203 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25201);
var state_25213__$1 = state_25213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25213__$1,(8),inst_25203);
} else {
if((state_val_25214 === (6))){
var state_25213__$1 = state_25213;
var statearr_25219_25234 = state_25213__$1;
(statearr_25219_25234[(2)] = null);

(statearr_25219_25234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (7))){
var inst_25209 = (state_25213[(2)]);
var state_25213__$1 = state_25213;
var statearr_25220_25235 = state_25213__$1;
(statearr_25220_25235[(2)] = inst_25209);

(statearr_25220_25235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25214 === (8))){
var inst_25205 = (state_25213[(2)]);
var state_25213__$1 = (function (){var statearr_25221 = state_25213;
(statearr_25221[(8)] = inst_25205);

return statearr_25221;
})();
var statearr_25222_25236 = state_25213__$1;
(statearr_25222_25236[(2)] = null);

(statearr_25222_25236[(1)] = (2));


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
});})(c__19515__auto___25230,ch))
;
return ((function (switch__19403__auto__,c__19515__auto___25230,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19404__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19404__auto____0 = (function (){
var statearr_25226 = [null,null,null,null,null,null,null,null,null];
(statearr_25226[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19404__auto__);

(statearr_25226[(1)] = (1));

return statearr_25226;
});
var figwheel$client$heads_up_plugin_$_state_machine__19404__auto____1 = (function (state_25213){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_25213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e25227){if((e25227 instanceof Object)){
var ex__19407__auto__ = e25227;
var statearr_25228_25237 = state_25213;
(statearr_25228_25237[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25238 = state_25213;
state_25213 = G__25238;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19404__auto__ = function(state_25213){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19404__auto____1.call(this,state_25213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19404__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19404__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto___25230,ch))
})();
var state__19517__auto__ = (function (){var statearr_25229 = f__19516__auto__.call(null);
(statearr_25229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto___25230);

return statearr_25229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto___25230,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__){
return (function (state_25259){
var state_val_25260 = (state_25259[(1)]);
if((state_val_25260 === (1))){
var inst_25254 = cljs.core.async.timeout.call(null,(3000));
var state_25259__$1 = state_25259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25259__$1,(2),inst_25254);
} else {
if((state_val_25260 === (2))){
var inst_25256 = (state_25259[(2)]);
var inst_25257 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25259__$1 = (function (){var statearr_25261 = state_25259;
(statearr_25261[(7)] = inst_25256);

return statearr_25261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25259__$1,inst_25257);
} else {
return null;
}
}
});})(c__19515__auto__))
;
return ((function (switch__19403__auto__,c__19515__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19404__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19404__auto____0 = (function (){
var statearr_25265 = [null,null,null,null,null,null,null,null];
(statearr_25265[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19404__auto__);

(statearr_25265[(1)] = (1));

return statearr_25265;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19404__auto____1 = (function (state_25259){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_25259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e25266){if((e25266 instanceof Object)){
var ex__19407__auto__ = e25266;
var statearr_25267_25269 = state_25259;
(statearr_25267_25269[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25270 = state_25259;
state_25259 = G__25270;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19404__auto__ = function(state_25259){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19404__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19404__auto____1.call(this,state_25259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19404__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19404__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__))
})();
var state__19517__auto__ = (function (){var statearr_25268 = f__19516__auto__.call(null);
(statearr_25268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_25268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__))
);

return c__19515__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25271){
var map__25278 = p__25271;
var map__25278__$1 = ((((!((map__25278 == null)))?((((map__25278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25278):map__25278);
var ed = map__25278__$1;
var formatted_exception = cljs.core.get.call(null,map__25278__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25278__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25278__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25280_25284 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25281_25285 = null;
var count__25282_25286 = (0);
var i__25283_25287 = (0);
while(true){
if((i__25283_25287 < count__25282_25286)){
var msg_25288 = cljs.core._nth.call(null,chunk__25281_25285,i__25283_25287);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25288);

var G__25289 = seq__25280_25284;
var G__25290 = chunk__25281_25285;
var G__25291 = count__25282_25286;
var G__25292 = (i__25283_25287 + (1));
seq__25280_25284 = G__25289;
chunk__25281_25285 = G__25290;
count__25282_25286 = G__25291;
i__25283_25287 = G__25292;
continue;
} else {
var temp__4653__auto___25293 = cljs.core.seq.call(null,seq__25280_25284);
if(temp__4653__auto___25293){
var seq__25280_25294__$1 = temp__4653__auto___25293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25280_25294__$1)){
var c__17719__auto___25295 = cljs.core.chunk_first.call(null,seq__25280_25294__$1);
var G__25296 = cljs.core.chunk_rest.call(null,seq__25280_25294__$1);
var G__25297 = c__17719__auto___25295;
var G__25298 = cljs.core.count.call(null,c__17719__auto___25295);
var G__25299 = (0);
seq__25280_25284 = G__25296;
chunk__25281_25285 = G__25297;
count__25282_25286 = G__25298;
i__25283_25287 = G__25299;
continue;
} else {
var msg_25300 = cljs.core.first.call(null,seq__25280_25294__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25300);

var G__25301 = cljs.core.next.call(null,seq__25280_25294__$1);
var G__25302 = null;
var G__25303 = (0);
var G__25304 = (0);
seq__25280_25284 = G__25301;
chunk__25281_25285 = G__25302;
count__25282_25286 = G__25303;
i__25283_25287 = G__25304;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25305){
var map__25308 = p__25305;
var map__25308__$1 = ((((!((map__25308 == null)))?((((map__25308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25308):map__25308);
var w = map__25308__$1;
var message = cljs.core.get.call(null,map__25308__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16904__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16904__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16904__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25316 = cljs.core.seq.call(null,plugins);
var chunk__25317 = null;
var count__25318 = (0);
var i__25319 = (0);
while(true){
if((i__25319 < count__25318)){
var vec__25320 = cljs.core._nth.call(null,chunk__25317,i__25319);
var k = cljs.core.nth.call(null,vec__25320,(0),null);
var plugin = cljs.core.nth.call(null,vec__25320,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25322 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25316,chunk__25317,count__25318,i__25319,pl_25322,vec__25320,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25322.call(null,msg_hist);
});})(seq__25316,chunk__25317,count__25318,i__25319,pl_25322,vec__25320,k,plugin))
);
} else {
}

var G__25323 = seq__25316;
var G__25324 = chunk__25317;
var G__25325 = count__25318;
var G__25326 = (i__25319 + (1));
seq__25316 = G__25323;
chunk__25317 = G__25324;
count__25318 = G__25325;
i__25319 = G__25326;
continue;
} else {
var temp__4653__auto__ = cljs.core.seq.call(null,seq__25316);
if(temp__4653__auto__){
var seq__25316__$1 = temp__4653__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25316__$1)){
var c__17719__auto__ = cljs.core.chunk_first.call(null,seq__25316__$1);
var G__25327 = cljs.core.chunk_rest.call(null,seq__25316__$1);
var G__25328 = c__17719__auto__;
var G__25329 = cljs.core.count.call(null,c__17719__auto__);
var G__25330 = (0);
seq__25316 = G__25327;
chunk__25317 = G__25328;
count__25318 = G__25329;
i__25319 = G__25330;
continue;
} else {
var vec__25321 = cljs.core.first.call(null,seq__25316__$1);
var k = cljs.core.nth.call(null,vec__25321,(0),null);
var plugin = cljs.core.nth.call(null,vec__25321,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25331 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25316,chunk__25317,count__25318,i__25319,pl_25331,vec__25321,k,plugin,seq__25316__$1,temp__4653__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25331.call(null,msg_hist);
});})(seq__25316,chunk__25317,count__25318,i__25319,pl_25331,vec__25321,k,plugin,seq__25316__$1,temp__4653__auto__))
);
} else {
}

var G__25332 = cljs.core.next.call(null,seq__25316__$1);
var G__25333 = null;
var G__25334 = (0);
var G__25335 = (0);
seq__25316 = G__25332;
chunk__25317 = G__25333;
count__25318 = G__25334;
i__25319 = G__25335;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25336 = [];
var len__17974__auto___25339 = arguments.length;
var i__17975__auto___25340 = (0);
while(true){
if((i__17975__auto___25340 < len__17974__auto___25339)){
args25336.push((arguments[i__17975__auto___25340]));

var G__25341 = (i__17975__auto___25340 + (1));
i__17975__auto___25340 = G__25341;
continue;
} else {
}
break;
}

var G__25338 = args25336.length;
switch (G__25338) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25336.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17981__auto__ = [];
var len__17974__auto___25347 = arguments.length;
var i__17975__auto___25348 = (0);
while(true){
if((i__17975__auto___25348 < len__17974__auto___25347)){
args__17981__auto__.push((arguments[i__17975__auto___25348]));

var G__25349 = (i__17975__auto___25348 + (1));
i__17975__auto___25348 = G__25349;
continue;
} else {
}
break;
}

var argseq__17982__auto__ = ((((0) < args__17981__auto__.length))?(new cljs.core.IndexedSeq(args__17981__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17982__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25344){
var map__25345 = p__25344;
var map__25345__$1 = ((((!((map__25345 == null)))?((((map__25345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25345):map__25345);
var opts = map__25345__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25343){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25343));
});

//# sourceMappingURL=client.js.map?rel=1450953134713