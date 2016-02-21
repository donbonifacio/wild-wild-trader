// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader_playground.views.game');
goog.require('cljs.core');
goog.require('wwtrader.models.market');
goog.require('wwtrader.models.target');
goog.require('wwtrader.models.desperado');
goog.require('wwtrader.models.skill_giver');
goog.require('wwtrader.models.obstacle_with_line_of_sight');
goog.require('wwtrader.game_generator');
goog.require('wwtrader.models.supply_farm');
goog.require('wwtrader.models.god');
goog.require('wwtrader.models.coordinate');
goog.require('wwtrader.models.obstacle');
goog.require('wwtrader.models.apache');
goog.require('wwtrader.models.trader');
goog.require('wwtrader.models.resource_generator');
goog.require('wwtrader.models.element');
goog.require('wwtrader.models.burglar');
goog.require('cljs.core.async');
goog.require('wwtrader.models.action');
goog.require('wwtrader.models.game');
goog.require('wwtrader.models.county');
goog.require('wwtrader_playground.state');
goog.require('wwtrader.camera');
goog.require('wwtrader.game_loop');
goog.require('wwtrader.models.enemy');
goog.require('wwtrader.models.decoy');
goog.require('wwtrader.models.bandit');
wwtrader_playground.views.game.cell_size = (50);
wwtrader_playground.views.game.minimap_cell_size = (10);
/**
 * True if the engine is working and no events should be recorded
 */
wwtrader_playground.views.game.processing_QMARK_ = cljs.core.atom.call(null,false);
/**
 * Renders the given element in html
 */
wwtrader_playground.views.game.render_mini_element = (function wwtrader_playground$views$game$render_mini_element(context,elem){
var pos = wwtrader.models.element.coord.call(null,elem);
var percent = 4.16;
var id = wwtrader.models.element.id.call(null,elem);
var x = wwtrader.models.coordinate.x.call(null,pos);
var y = (wwtrader.models.coordinate.y.call(null,pos) + (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),wwtrader_playground.views.game.minimap_cell_size,new cljs.core.Keyword(null,"height","height",1025178622),wwtrader_playground.views.game.minimap_cell_size,new cljs.core.Keyword(null,"background-color","background-color",570434026),(((elem instanceof wwtrader.models.trader.elem_type))?"lightcoral":(((elem instanceof wwtrader.models.decoy.elem_type))?"green":(((elem instanceof wwtrader.models.skill_giver.elem_type))?"Crimson":(((elem instanceof wwtrader.models.market.Market))?"aqua":(((elem instanceof wwtrader.models.supply_farm.SupplyFarm))?"pink":(((elem instanceof wwtrader.models.god.God))?"white":(((elem instanceof wwtrader.models.resource_generator.ResourceGenerator))?"deeppink":(((elem instanceof wwtrader.models.obstacle_with_line_of_sight.ObstacleWithLineOfSight))?"LightSkyBlue":(cljs.core.truth_(wwtrader.models.enemy.enemy_QMARK_.call(null,elem))?"red":"Peru"
))))))))),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str((x * percent)),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),[cljs.core.str((((24) - y) * percent)),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"border","border",1444987323),"none"], null)], null)], null);
});
if(typeof wwtrader_playground.views.game.render_element !== 'undefined'){
} else {
/**
 * Renders the given element in HTML
 */
wwtrader_playground.views.game.render_element = (function (){var method_table__17829__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17830__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17831__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17832__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17833__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"wwtrader-playground.views.game","render-element"),((function (method_table__17829__auto__,prefer_table__17830__auto__,method_cache__17831__auto__,cached_hierarchy__17832__auto__,hierarchy__17833__auto__){
return (function (context,element){
return cljs.core.type.call(null,element);
});})(method_table__17829__auto__,prefer_table__17830__auto__,method_cache__17831__auto__,cached_hierarchy__17832__auto__,hierarchy__17833__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17833__auto__,method_table__17829__auto__,prefer_table__17830__auto__,method_cache__17831__auto__,cached_hierarchy__17832__auto__));
})();
}
/**
 * Renders an element
 */
wwtrader_playground.views.game.raw_render = (function wwtrader_playground$views$game$raw_render(context,elem,specific_style,specific_content){
var pos = wwtrader.models.element.coord.call(null,elem);
var camera_left = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(wwtrader.models.game.camera.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(context)));
var camera_right = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(wwtrader.models.game.camera.call(null,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(context)));
var visible_QMARK_ = ((wwtrader.models.coordinate.x.call(null,pos) >= wwtrader.models.coordinate.x.call(null,camera_left))) && ((wwtrader.models.coordinate.y.call(null,pos) >= wwtrader.models.coordinate.y.call(null,camera_left))) && ((wwtrader.models.coordinate.x.call(null,pos) <= wwtrader.models.coordinate.x.call(null,camera_right))) && ((wwtrader.models.coordinate.y.call(null,pos) <= wwtrader.models.coordinate.y.call(null,camera_right)));
var id = wwtrader.models.element.id.call(null,elem);
var x = (wwtrader.models.coordinate.x.call(null,pos) - wwtrader.models.coordinate.x.call(null,camera_left));
var y = ((wwtrader.models.coordinate.y.call(null,pos) - wwtrader.models.coordinate.y.call(null,camera_left)) + (1));
if(visible_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transition","transition",765692007),"0.1s",new cljs.core.Keyword(null,"width","width",-384071477),wwtrader_playground.views.game.cell_size,new cljs.core.Keyword(null,"height","height",1025178622),wwtrader_playground.views.game.cell_size,new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str((x * 12.5)),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),[cljs.core.str((((8) - y) * 12.5)),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"border","border",1444987323),"1px dotted"], null),specific_style)], null),specific_content], null);
} else {
return null;
}
});
cljs.core._add_method.call(null,wwtrader_playground.views.game.render_element,wwtrader.models.god.God,(function (context,god){
return null;
}));
cljs.core._add_method.call(null,wwtrader_playground.views.game.render_element,wwtrader.models.obstacle.Obstacle,(function (context,obstacle){
return wwtrader_playground.views.game.raw_render.call(null,context,obstacle,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"Peru",new cljs.core.Keyword(null,"color","color",1011675173),"Peru"], null),"");
}));
cljs.core._add_method.call(null,wwtrader_playground.views.game.render_element,wwtrader.models.obstacle_with_line_of_sight.ObstacleWithLineOfSight,(function (context,obstacle){
return wwtrader_playground.views.game.raw_render.call(null,context,obstacle,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"LightSkyBlue",new cljs.core.Keyword(null,"color","color",1011675173),"LightSkyBlue"], null),"");
}));
cljs.core._add_method.call(null,wwtrader_playground.views.game.render_element,wwtrader.models.trader.Trader,(function (context,trader){
return wwtrader_playground.views.game.raw_render.call(null,context,trader,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightcoral"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Trader",(function (){var damage = wwtrader.models.trader.damage_taken.call(null,trader);
if(cljs.core.not_EQ_.call(null,(0),damage)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"-",damage], null);
} else {
return null;
}
})(),(cljs.core.truth_(wwtrader.models.trader.attacked_QMARK_.call(null,trader))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"pink"], null)], null),"shoot!"], null):null)], null));
}));
cljs.core._add_method.call(null,wwtrader_playground.views.game.render_element,wwtrader.models.market.Market,(function (context,market){
return wwtrader_playground.views.game.raw_render.call(null,context,market,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"color","color",1011675173),"aqua",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"aqua"], null),"Market");
}));
cljs.core._add_method.call(null,wwtrader_playground.views.game.render_element,wwtrader.models.desperado.Desperado,(function (context,desperado){
var color = "purple";
return wwtrader_playground.views.game.raw_render.call(null,context,desperado,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px dashed",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Desperado",(cljs.core.truth_(wwtrader.models.desperado.attacked_QMARK_.call(null,desperado))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"Shoot!"], null):null)], null));
}));
cljs.core._add_method.call(null,wwtrader_playground.views.game.render_element,wwtrader.models.decoy.elem_type,(function (context,decoy){
var color = "green";
return wwtrader_playground.views.game.raw_render.call(null,context,decoy,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),color], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Decoy",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),wwtrader.models.target.target_value.call(null,decoy),"$"], null));
}));
cljs.core._add_method.call(null,wwtrader_playground.views.game.render_element,wwtrader.models.skill_giver.elem_type,(function (context,elem){
var color = "Crimson";
return wwtrader_playground.views.game.raw_render.call(null,context,elem,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),color], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Skill",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.name.call(null,cljs.core.get_in.call(null,elem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skill","skill",155065636),new cljs.core.Keyword(null,"action-type","action-type",-1141667361)], null)))], null));
}));
cljs.core._add_method.call(null,wwtrader_playground.views.game.render_element,wwtrader.models.burglar.Burglar,(function (context,burglar){
var color = "gray";
return wwtrader_playground.views.game.raw_render.call(null,context,burglar,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px dashed",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),color], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Burglar",(cljs.core.truth_(new cljs.core.Keyword(null,"robbed?","robbed?",85535603).cljs$core$IFn$_invoke$arity$1(burglar))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null),"Got you :)"], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"attacked?","attacked?",2044455986).cljs$core$IFn$_invoke$arity$1(burglar))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"Outch!"], null):null)], null));
}));
cljs.core._add_method.call(null,wwtrader_playground.views.game.render_element,wwtrader.models.apache.Apache,(function (context,apache){
var color = "chocolate";
return wwtrader_playground.views.game.raw_render.call(null,context,apache,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px dashed",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Apache",(cljs.core.truth_(wwtrader.models.apache.attacked_QMARK_.call(null,apache))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"Shoot!"], null):null)], null));
}));
cljs.core._add_method.call(null,wwtrader_playground.views.game.render_element,wwtrader.models.bandit.Bandit,(function (context,bandit){
var color = "orange";
return wwtrader_playground.views.game.raw_render.call(null,context,bandit,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px dashed",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),color], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Bandit",(cljs.core.truth_(wwtrader.models.bandit.attacked_QMARK_.call(null,bandit))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"Shoot!"], null):null)], null));
}));
cljs.core._add_method.call(null,wwtrader_playground.views.game.render_element,wwtrader.models.supply_farm.SupplyFarm,(function (context,farm){
var cost = wwtrader.models.supply_farm.cost.call(null,farm);
var color = "pink";
return wwtrader_playground.views.game.raw_render.call(null,context,farm,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),color], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Supplies",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),[cljs.core.str(cost),cljs.core.str("$")].join('')], null));
}));
cljs.core._add_method.call(null,wwtrader_playground.views.game.render_element,wwtrader.models.resource_generator.ResourceGenerator,(function (context,generator){
var available_QMARK_ = wwtrader.models.resource_generator.available_QMARK_.call(null,generator);
var color = (cljs.core.truth_(available_QMARK_)?"deeppink":"black");
return wwtrader_playground.views.game.raw_render.call(null,context,generator,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),color], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Gen",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(cljs.core.truth_(available_QMARK_)?wwtrader.models.resource_generator.resource.call(null,generator):"Empty")], null));
}));
/**
 * True if the given action is already queue for on-move
 */
wwtrader_playground.views.game.queued_action_QMARK_ = (function wwtrader_playground$views$game$queued_action_QMARK_(trader,action){
return cljs.core._EQ_.call(null,wwtrader.models.trader.on_move_action.call(null,trader),action);
});
/**
 * Builds a result based on a game and message
 */
wwtrader_playground.views.game.build_result = (function wwtrader_playground$views$game$build_result(game,msg){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game","game",-441523833),game,new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"success","success",1890645906),true], null);
});
/**
 * Removes the queued action for move
 */
wwtrader_playground.views.game.remove_queued_action = (function wwtrader_playground$views$game$remove_queued_action(game,trader){
return wwtrader_playground.state.set_page_data_BANG_.call(null,wwtrader_playground.views.game.build_result.call(null,wwtrader.models.game.swap_element.call(null,game,trader,wwtrader.models.trader.clear_on_move_action.call(null,trader)),new cljs.core.Keyword(null,"on-move-action-removed","on-move-action-removed",108764067)));
});
/**
 * Registers the player action
 */
wwtrader_playground.views.game.register_action_BANG_ = (function wwtrader_playground$views$game$register_action_BANG_(action){
var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__){
return (function (state_27907){
var state_val_27908 = (state_27907[(1)]);
if((state_val_27908 === (1))){
var inst_27881 = (state_27907[(7)]);
var inst_27880 = (state_27907[(8)]);
var inst_27879 = wwtrader_playground.state.get_page_data.call(null);
var inst_27880__$1 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_27879);
var inst_27881__$1 = wwtrader.game_loop.trader.call(null,inst_27880__$1);
var inst_27882 = wwtrader_playground.views.game.queued_action_QMARK_.call(null,inst_27881__$1,action);
var state_27907__$1 = (function (){var statearr_27909 = state_27907;
(statearr_27909[(7)] = inst_27881__$1);

(statearr_27909[(8)] = inst_27880__$1);

return statearr_27909;
})();
if(cljs.core.truth_(inst_27882)){
var statearr_27910_27929 = state_27907__$1;
(statearr_27910_27929[(1)] = (2));

} else {
var statearr_27911_27930 = state_27907__$1;
(statearr_27911_27930[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (2))){
var inst_27881 = (state_27907[(7)]);
var inst_27880 = (state_27907[(8)]);
var inst_27884 = wwtrader_playground.views.game.remove_queued_action.call(null,inst_27880,inst_27881);
var state_27907__$1 = state_27907;
var statearr_27912_27931 = state_27907__$1;
(statearr_27912_27931[(2)] = inst_27884);

(statearr_27912_27931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (3))){
var inst_27887 = (state_27907[(9)]);
var inst_27880 = (state_27907[(8)]);
var inst_27886 = wwtrader.models.game.player_action.call(null,inst_27880,action);
var inst_27887__$1 = wwtrader.game_loop.process_trader_turn.call(null,inst_27886);
var inst_27888 = wwtrader_playground.state.set_page_data_BANG_.call(null,inst_27887__$1);
var inst_27889 = cljs.core.async.timeout.call(null,(100));
var state_27907__$1 = (function (){var statearr_27913 = state_27907;
(statearr_27913[(9)] = inst_27887__$1);

(statearr_27913[(10)] = inst_27888);

return statearr_27913;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27907__$1,(5),inst_27889);
} else {
if((state_val_27908 === (4))){
var inst_27905 = (state_27907[(2)]);
var state_27907__$1 = state_27907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27907__$1,inst_27905);
} else {
if((state_val_27908 === (5))){
var inst_27887 = (state_27907[(9)]);
var inst_27891 = (state_27907[(2)]);
var inst_27892 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_27887);
var state_27907__$1 = (function (){var statearr_27914 = state_27907;
(statearr_27914[(11)] = inst_27891);

return statearr_27914;
})();
if(cljs.core.truth_(inst_27892)){
var statearr_27915_27932 = state_27907__$1;
(statearr_27915_27932[(1)] = (6));

} else {
var statearr_27916_27933 = state_27907__$1;
(statearr_27916_27933[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (6))){
var inst_27887 = (state_27907[(9)]);
var inst_27894 = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(inst_27887);
var inst_27895 = wwtrader.game_loop.process_cpu_turn.call(null,inst_27894);
var inst_27896 = wwtrader_playground.state.set_page_data_BANG_.call(null,inst_27895);
var inst_27897 = cljs.core.async.timeout.call(null,(100));
var state_27907__$1 = (function (){var statearr_27917 = state_27907;
(statearr_27917[(12)] = inst_27896);

return statearr_27917;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27907__$1,(9),inst_27897);
} else {
if((state_val_27908 === (7))){
var state_27907__$1 = state_27907;
var statearr_27918_27934 = state_27907__$1;
(statearr_27918_27934[(2)] = null);

(statearr_27918_27934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (8))){
var inst_27902 = (state_27907[(2)]);
var inst_27903 = cljs.core.reset_BANG_.call(null,wwtrader_playground.views.game.processing_QMARK_,false);
var state_27907__$1 = (function (){var statearr_27919 = state_27907;
(statearr_27919[(13)] = inst_27902);

return statearr_27919;
})();
var statearr_27920_27935 = state_27907__$1;
(statearr_27920_27935[(2)] = inst_27903);

(statearr_27920_27935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (9))){
var inst_27899 = (state_27907[(2)]);
var state_27907__$1 = state_27907;
var statearr_27921_27936 = state_27907__$1;
(statearr_27921_27936[(2)] = inst_27899);

(statearr_27921_27936[(1)] = (8));


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
});})(c__19515__auto__))
;
return ((function (switch__19403__auto__,c__19515__auto__){
return (function() {
var wwtrader_playground$views$game$register_action_BANG__$_state_machine__19404__auto__ = null;
var wwtrader_playground$views$game$register_action_BANG__$_state_machine__19404__auto____0 = (function (){
var statearr_27925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27925[(0)] = wwtrader_playground$views$game$register_action_BANG__$_state_machine__19404__auto__);

(statearr_27925[(1)] = (1));

return statearr_27925;
});
var wwtrader_playground$views$game$register_action_BANG__$_state_machine__19404__auto____1 = (function (state_27907){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_27907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e27926){if((e27926 instanceof Object)){
var ex__19407__auto__ = e27926;
var statearr_27927_27937 = state_27907;
(statearr_27927_27937[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27938 = state_27907;
state_27907 = G__27938;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
wwtrader_playground$views$game$register_action_BANG__$_state_machine__19404__auto__ = function(state_27907){
switch(arguments.length){
case 0:
return wwtrader_playground$views$game$register_action_BANG__$_state_machine__19404__auto____0.call(this);
case 1:
return wwtrader_playground$views$game$register_action_BANG__$_state_machine__19404__auto____1.call(this,state_27907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wwtrader_playground$views$game$register_action_BANG__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = wwtrader_playground$views$game$register_action_BANG__$_state_machine__19404__auto____0;
wwtrader_playground$views$game$register_action_BANG__$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = wwtrader_playground$views$game$register_action_BANG__$_state_machine__19404__auto____1;
return wwtrader_playground$views$game$register_action_BANG__$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__))
})();
var state__19517__auto__ = (function (){var statearr_27928 = f__19516__auto__.call(null);
(statearr_27928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_27928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__))
);

return c__19515__auto__;
});
/**
 * Handles on key pressed
 */
wwtrader_playground.views.game.on_key_press = (function wwtrader_playground$views$game$on_key_press(e){
if(cljs.core.truth_(cljs.core.deref.call(null,wwtrader_playground.views.game.processing_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,wwtrader_playground.views.game.processing_QMARK_,true);

var c__19515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19515__auto__){
return (function (){
var f__19516__auto__ = (function (){var switch__19403__auto__ = ((function (c__19515__auto__){
return (function (state_28060){
var state_val_28061 = (state_28060[(1)]);
if((state_val_28061 === (7))){
var inst_28056 = (state_28060[(2)]);
var state_28060__$1 = state_28060;
var statearr_28062_28087 = state_28060__$1;
(statearr_28062_28087[(2)] = inst_28056);

(statearr_28062_28087[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28061 === (1))){
var inst_28019 = (state_28060[(7)]);
var inst_28016 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28017 = e.keyCode;
var inst_28018 = [inst_28017];
var inst_28019__$1 = (new cljs.core.PersistentVector(null,1,(5),inst_28016,inst_28018,null));
var inst_28020 = [(39),null,(76),null];
var inst_28021 = (new cljs.core.PersistentArrayMap(null,2,inst_28020,null));
var inst_28022 = (new cljs.core.PersistentHashSet(null,inst_28021,null));
var inst_28023 = cljs.core.some.call(null,inst_28022,inst_28019__$1);
var state_28060__$1 = (function (){var statearr_28063 = state_28060;
(statearr_28063[(7)] = inst_28019__$1);

return statearr_28063;
})();
if(cljs.core.truth_(inst_28023)){
var statearr_28064_28088 = state_28060__$1;
(statearr_28064_28088[(1)] = (2));

} else {
var statearr_28065_28089 = state_28060__$1;
(statearr_28065_28089[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28061 === (4))){
var inst_28058 = (state_28060[(2)]);
var state_28060__$1 = state_28060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28060__$1,inst_28058);
} else {
if((state_val_28061 === (13))){
var inst_28052 = (state_28060[(2)]);
var state_28060__$1 = state_28060;
var statearr_28066_28090 = state_28060__$1;
(statearr_28066_28090[(2)] = inst_28052);

(statearr_28066_28090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28061 === (6))){
var inst_28019 = (state_28060[(7)]);
var inst_28034 = [(75),null,(38),null];
var inst_28035 = (new cljs.core.PersistentArrayMap(null,2,inst_28034,null));
var inst_28036 = (new cljs.core.PersistentHashSet(null,inst_28035,null));
var inst_28037 = cljs.core.some.call(null,inst_28036,inst_28019);
var state_28060__$1 = state_28060;
if(cljs.core.truth_(inst_28037)){
var statearr_28067_28091 = state_28060__$1;
(statearr_28067_28091[(1)] = (8));

} else {
var statearr_28068_28092 = state_28060__$1;
(statearr_28068_28092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28061 === (3))){
var inst_28019 = (state_28060[(7)]);
var inst_28027 = [(72),null,(37),null];
var inst_28028 = (new cljs.core.PersistentArrayMap(null,2,inst_28027,null));
var inst_28029 = (new cljs.core.PersistentHashSet(null,inst_28028,null));
var inst_28030 = cljs.core.some.call(null,inst_28029,inst_28019);
var state_28060__$1 = state_28060;
if(cljs.core.truth_(inst_28030)){
var statearr_28069_28093 = state_28060__$1;
(statearr_28069_28093[(1)] = (5));

} else {
var statearr_28070_28094 = state_28060__$1;
(statearr_28070_28094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28061 === (12))){
var inst_28048 = e.keyCode;
var inst_28049 = cljs.core.println.call(null,"Ignoring key",inst_28048);
var inst_28050 = cljs.core.reset_BANG_.call(null,wwtrader_playground.views.game.processing_QMARK_,false);
var state_28060__$1 = (function (){var statearr_28071 = state_28060;
(statearr_28071[(8)] = inst_28049);

return statearr_28071;
})();
var statearr_28072_28095 = state_28060__$1;
(statearr_28072_28095[(2)] = inst_28050);

(statearr_28072_28095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28061 === (2))){
var inst_28025 = wwtrader_playground.views.game.register_action_BANG_.call(null,wwtrader.models.action.right);
var state_28060__$1 = state_28060;
var statearr_28073_28096 = state_28060__$1;
(statearr_28073_28096[(2)] = inst_28025);

(statearr_28073_28096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28061 === (11))){
var inst_28046 = wwtrader_playground.views.game.register_action_BANG_.call(null,wwtrader.models.action.down);
var state_28060__$1 = state_28060;
var statearr_28074_28097 = state_28060__$1;
(statearr_28074_28097[(2)] = inst_28046);

(statearr_28074_28097[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28061 === (9))){
var inst_28019 = (state_28060[(7)]);
var inst_28041 = [(74),null,(40),null];
var inst_28042 = (new cljs.core.PersistentArrayMap(null,2,inst_28041,null));
var inst_28043 = (new cljs.core.PersistentHashSet(null,inst_28042,null));
var inst_28044 = cljs.core.some.call(null,inst_28043,inst_28019);
var state_28060__$1 = state_28060;
if(cljs.core.truth_(inst_28044)){
var statearr_28075_28098 = state_28060__$1;
(statearr_28075_28098[(1)] = (11));

} else {
var statearr_28076_28099 = state_28060__$1;
(statearr_28076_28099[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28061 === (5))){
var inst_28032 = wwtrader_playground.views.game.register_action_BANG_.call(null,wwtrader.models.action.left);
var state_28060__$1 = state_28060;
var statearr_28077_28100 = state_28060__$1;
(statearr_28077_28100[(2)] = inst_28032);

(statearr_28077_28100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28061 === (10))){
var inst_28054 = (state_28060[(2)]);
var state_28060__$1 = state_28060;
var statearr_28078_28101 = state_28060__$1;
(statearr_28078_28101[(2)] = inst_28054);

(statearr_28078_28101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28061 === (8))){
var inst_28039 = wwtrader_playground.views.game.register_action_BANG_.call(null,wwtrader.models.action.up);
var state_28060__$1 = state_28060;
var statearr_28079_28102 = state_28060__$1;
(statearr_28079_28102[(2)] = inst_28039);

(statearr_28079_28102[(1)] = (10));


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
});})(c__19515__auto__))
;
return ((function (switch__19403__auto__,c__19515__auto__){
return (function() {
var wwtrader_playground$views$game$on_key_press_$_state_machine__19404__auto__ = null;
var wwtrader_playground$views$game$on_key_press_$_state_machine__19404__auto____0 = (function (){
var statearr_28083 = [null,null,null,null,null,null,null,null,null];
(statearr_28083[(0)] = wwtrader_playground$views$game$on_key_press_$_state_machine__19404__auto__);

(statearr_28083[(1)] = (1));

return statearr_28083;
});
var wwtrader_playground$views$game$on_key_press_$_state_machine__19404__auto____1 = (function (state_28060){
while(true){
var ret_value__19405__auto__ = (function (){try{while(true){
var result__19406__auto__ = switch__19403__auto__.call(null,state_28060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19406__auto__;
}
break;
}
}catch (e28084){if((e28084 instanceof Object)){
var ex__19407__auto__ = e28084;
var statearr_28085_28103 = state_28060;
(statearr_28085_28103[(5)] = ex__19407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28104 = state_28060;
state_28060 = G__28104;
continue;
} else {
return ret_value__19405__auto__;
}
break;
}
});
wwtrader_playground$views$game$on_key_press_$_state_machine__19404__auto__ = function(state_28060){
switch(arguments.length){
case 0:
return wwtrader_playground$views$game$on_key_press_$_state_machine__19404__auto____0.call(this);
case 1:
return wwtrader_playground$views$game$on_key_press_$_state_machine__19404__auto____1.call(this,state_28060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wwtrader_playground$views$game$on_key_press_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$0 = wwtrader_playground$views$game$on_key_press_$_state_machine__19404__auto____0;
wwtrader_playground$views$game$on_key_press_$_state_machine__19404__auto__.cljs$core$IFn$_invoke$arity$1 = wwtrader_playground$views$game$on_key_press_$_state_machine__19404__auto____1;
return wwtrader_playground$views$game$on_key_press_$_state_machine__19404__auto__;
})()
;})(switch__19403__auto__,c__19515__auto__))
})();
var state__19517__auto__ = (function (){var statearr_28086 = f__19516__auto__.call(null);
(statearr_28086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19515__auto__);

return statearr_28086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19517__auto__);
});})(c__19515__auto__))
);

return c__19515__auto__;
}
});
/**
 * Renders the game board
 */
wwtrader_playground.views.game.board = (function wwtrader_playground$views$game$board(game){
var sx = (wwtrader_playground.views.game.cell_size * wwtrader.camera.width.call(null,game));
var sy = (wwtrader_playground.views.game.cell_size * wwtrader.camera.height.call(null,game));
var context = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game","game",-441523833),game], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"background-color","background-color",570434026),"Bisque",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(sx),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(sy),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid"], null)], null),cljs.core.map.call(null,cljs.core.partial.call(null,wwtrader_playground.views.game.render_element,context),wwtrader.game_loop.turn_elements.call(null,game))], null);
});
/**
 * Renders the minimap
 */
wwtrader_playground.views.game.minimap = (function wwtrader_playground$views$game$minimap(game){
var county = wwtrader.models.game.county.call(null,game);
var sx = (wwtrader_playground.views.game.minimap_cell_size * wwtrader.models.county.width.call(null,county));
var sy = (wwtrader_playground.views.game.minimap_cell_size * wwtrader.models.county.height.call(null,county));
var context = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game","game",-441523833),game], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"background-color","background-color",570434026),"Bisque",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(sx),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(sy),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid"], null)], null),cljs.core.map.call(null,cljs.core.partial.call(null,wwtrader_playground.views.game.render_mini_element,context),wwtrader.models.game.elements.call(null,game))], null);
});
/**
 * Renders debug-info
 */
wwtrader_playground.views.game.debug_info = (function wwtrader_playground$views$game$debug_info(result,game){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),"Data"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var temp__4651__auto__ = wwtrader.models.game.player_action.call(null,game);
if(cljs.core.truth_(temp__4651__auto__)){
var action = temp__4651__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Player Action"], null)," ",cljs.core.pr_str.call(null,action)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Player Action"], null)," None"], null);
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Camera"], null),cljs.core.pr_str.call(null,wwtrader.camera.info.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(game)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Result"], null)," ",cljs.core.pr_str.call(null,cljs.core.dissoc.call(null,result,new cljs.core.Keyword(null,"game","game",-441523833)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),"Elements"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (element){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),wwtrader.models.element.id.call(null,element)], null),cljs.core.pr_str.call(null,element)], null);
}),wwtrader.game_loop.turn_elements.call(null,game))], null)], null);
});
/**
 * Gets the page data given the global state
 */
wwtrader_playground.views.game.get_page_data = (function wwtrader_playground$views$game$get_page_data(state){
return new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(state);
});
/**
 * Shows the player's data
 */
wwtrader_playground.views.game.hud = (function wwtrader_playground$views$game$hud(game){
var trader = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28105_SHARP_){
return (p1__28105_SHARP_ instanceof wwtrader.models.trader.Trader);
}),wwtrader.models.game.elements.call(null,game)));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Turn ",wwtrader.models.game.turn.call(null,game)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Trader"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Money ",wwtrader.models.trader.money.call(null,trader),"$"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Hitpoints ",wwtrader.models.trader.hitpoints.call(null,trader)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Energy ",wwtrader.models.trader.energy.call(null,trader)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Skills"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map_indexed.call(null,((function (trader){
return (function (idx,p__28108){
var vec__28109 = p__28108;
var k = cljs.core.nth.call(null,vec__28109,(0),null);
var v = cljs.core.nth.call(null,vec__28109,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__28109,k,v,trader){
return (function (){
return wwtrader_playground.views.game.register_action_BANG_.call(null,v);
});})(vec__28109,k,v,trader))
], null),cljs.core.name.call(null,k)], null),(cljs.core.truth_(wwtrader_playground.views.game.queued_action_QMARK_.call(null,trader,v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"ON"], null):null)], null);
});})(trader))
,wwtrader.models.trader.skills.call(null,trader))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),"Cargo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map_indexed.call(null,((function (trader){
return (function (idx,cargo_item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),cargo_item], null);
});})(trader))
,wwtrader.models.trader.cargo.call(null,trader))], null)], null);
});
wwtrader_playground.views.game.render = (function wwtrader_playground$views$game$render(state){
var result = wwtrader_playground.views.game.get_page_data.call(null,state);
var game = new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(result);
document.addEventListener("keydown",wwtrader_playground.views.game.on_key_press);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null),wwtrader_playground.views.game.board.call(null,game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),wwtrader_playground.views.game.hud.call(null,game)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),wwtrader_playground.views.game.minimap.call(null,game)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null),wwtrader_playground.views.game.debug_info.call(null,result,game)], null)], null);
});

//# sourceMappingURL=game.js.map?rel=1450975830404