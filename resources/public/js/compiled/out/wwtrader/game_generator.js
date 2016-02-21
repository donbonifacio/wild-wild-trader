// Compiled by ClojureScript 1.7.170 {}
goog.provide('wwtrader.game_generator');
goog.require('cljs.core');
goog.require('wwtrader.models.market');
goog.require('wwtrader.models.skill_giver');
goog.require('wwtrader.models.obstacle_with_line_of_sight');
goog.require('wwtrader.models.supply_farm');
goog.require('wwtrader.models.god');
goog.require('wwtrader.models.coordinate');
goog.require('wwtrader.models.obstacle');
goog.require('wwtrader.models.trader');
goog.require('wwtrader.models.resource_generator');
goog.require('wwtrader.models.action');
goog.require('wwtrader.models.game');
goog.require('wwtrader.models.element');
goog.require('wwtrader.camera');
goog.require('wwtrader.models.bandit');
/**
 * Returns the start point for all 3x3 windows on the map
 */
wwtrader.game_generator.get_small_windows = (function wwtrader$game_generator$get_small_windows(){
var iter__17688__auto__ = (function wwtrader$game_generator$get_small_windows_$_iter__27812(s__27813){
return (new cljs.core.LazySeq(null,(function (){
var s__27813__$1 = s__27813;
while(true){
var temp__4653__auto__ = cljs.core.seq.call(null,s__27813__$1);
if(temp__4653__auto__){
var xs__5201__auto__ = temp__4653__auto__;
var sx = cljs.core.first.call(null,xs__5201__auto__);
var iterys__17684__auto__ = ((function (s__27813__$1,sx,xs__5201__auto__,temp__4653__auto__){
return (function wwtrader$game_generator$get_small_windows_$_iter__27812_$_iter__27814(s__27815){
return (new cljs.core.LazySeq(null,((function (s__27813__$1,sx,xs__5201__auto__,temp__4653__auto__){
return (function (){
var s__27815__$1 = s__27815;
while(true){
var temp__4653__auto____$1 = cljs.core.seq.call(null,s__27815__$1);
if(temp__4653__auto____$1){
var s__27815__$2 = temp__4653__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27815__$2)){
var c__17686__auto__ = cljs.core.chunk_first.call(null,s__27815__$2);
var size__17687__auto__ = cljs.core.count.call(null,c__17686__auto__);
var b__27817 = cljs.core.chunk_buffer.call(null,size__17687__auto__);
if((function (){var i__27816 = (0);
while(true){
if((i__27816 < size__17687__auto__)){
var sy = cljs.core._nth.call(null,c__17686__auto__,i__27816);
var left = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx * (3)),(sy * (3))], null);
cljs.core.chunk_append.call(null,b__27817,left);

var G__27818 = (i__27816 + (1));
i__27816 = G__27818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27817),wwtrader$game_generator$get_small_windows_$_iter__27812_$_iter__27814.call(null,cljs.core.chunk_rest.call(null,s__27815__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27817),null);
}
} else {
var sy = cljs.core.first.call(null,s__27815__$2);
var left = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx * (3)),(sy * (3))], null);
return cljs.core.cons.call(null,left,wwtrader$game_generator$get_small_windows_$_iter__27812_$_iter__27814.call(null,cljs.core.rest.call(null,s__27815__$2)));
}
} else {
return null;
}
break;
}
});})(s__27813__$1,sx,xs__5201__auto__,temp__4653__auto__))
,null,null));
});})(s__27813__$1,sx,xs__5201__auto__,temp__4653__auto__))
;
var fs__17685__auto__ = cljs.core.seq.call(null,iterys__17684__auto__.call(null,cljs.core.range.call(null,(8))));
if(fs__17685__auto__){
return cljs.core.concat.call(null,fs__17685__auto__,wwtrader$game_generator$get_small_windows_$_iter__27812.call(null,cljs.core.rest.call(null,s__27813__$1)));
} else {
var G__27819 = cljs.core.rest.call(null,s__27813__$1);
s__27813__$1 = G__27819;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17688__auto__.call(null,cljs.core.range.call(null,(8)));
});
/**
 * Gets a random element for the scenary
 */
wwtrader.game_generator.random_element = (function wwtrader$game_generator$random_element(coord){
var lucky = cljs.core.rand_int.call(null,(100));
if((lucky >= (80))){
return wwtrader.models.obstacle_with_line_of_sight.create.call(null,coord,new cljs.core.Keyword(null,"water","water",-824098213));
} else {
return wwtrader.models.obstacle.create.call(null,coord,new cljs.core.Keyword(null,"mountain","mountain",-1770530243));

}
});
/**
 * Populates a window with elements
 */
wwtrader.game_generator.populate_windows = (function wwtrader$game_generator$populate_windows(game,p__27820){
var vec__27822 = p__27820;
var sx = cljs.core.nth.call(null,vec__27822,(0),null);
var sy = cljs.core.nth.call(null,vec__27822,(1),null);
var elements_to_generate = cljs.core.rand_int.call(null,(4));
var game__$1 = game;
var counter = elements_to_generate;
while(true){
if((counter <= (0))){
return game__$1;
} else {
var x = (sx + cljs.core.rand_int.call(null,(3)));
var y = (sy + cljs.core.rand_int.call(null,(3)));
var lucky = wwtrader.models.coordinate.create.call(null,x,y);
var lucky_elem = wwtrader.game_generator.random_element.call(null,lucky);
if(cljs.core.not.call(null,wwtrader.models.game.at.call(null,game__$1,lucky))){
var G__27823 = wwtrader.models.game.register.call(null,game__$1,lucky_elem);
var G__27824 = (counter - (1));
game__$1 = G__27823;
counter = G__27824;
continue;
} else {
var G__27825 = game__$1;
var G__27826 = counter;
game__$1 = G__27825;
counter = G__27826;
continue;
}
}
break;
}
});
/**
 * Generates an empty game
 */
wwtrader.game_generator.empty_game = (function wwtrader$game_generator$empty_game(){
return wwtrader.models.game.register.call(null,wwtrader.camera.set_camera.call(null,wwtrader.models.game.create.call(null,(24),(24)),wwtrader.models.coordinate.c0_0),wwtrader.models.god.create.call(null));
});
/**
 * Generates a game with random scenary
 */
wwtrader.game_generator.game_with_random_scenary = (function wwtrader$game_generator$game_with_random_scenary(){
return cljs.core.reduce.call(null,wwtrader.game_generator.populate_windows,wwtrader.game_generator.empty_game.call(null),wwtrader.game_generator.get_small_windows.call(null));
});
/**
 * Adds the cities to the game
 */
wwtrader.game_generator.add_cities = (function wwtrader$game_generator$add_cities(game){
return wwtrader.models.game.register.call(null,wwtrader.models.game.register.call(null,wwtrader.models.game.register.call(null,wwtrader.models.game.register.call(null,wwtrader.models.game.register.call(null,wwtrader.models.game.register.call(null,game,wwtrader.models.supply_farm.create.call(null,wwtrader.models.coordinate.c1_1)),wwtrader.models.market.create.call(null,wwtrader.models.coordinate.c2_1,"gold")),wwtrader.models.resource_generator.create.call(null,wwtrader.models.coordinate.c3_1,"silver")),wwtrader.models.supply_farm.create.call(null,wwtrader.models.coordinate.create.call(null,(22),(19)))),wwtrader.models.market.create.call(null,wwtrader.models.coordinate.create.call(null,(22),(20)),"silver")),wwtrader.models.resource_generator.create.call(null,wwtrader.models.coordinate.create.call(null,(22),(21)),"gold"));
});
/**
 * Adds the skill givers to the game
 */
wwtrader.game_generator.add_skill_givers = (function wwtrader$game_generator$add_skill_givers(game){
return wwtrader.models.game.register.call(null,wwtrader.models.game.register.call(null,wwtrader.models.game.register.call(null,game,wwtrader.models.skill_giver.create.call(null,wwtrader.models.game.random_empty_coord.call(null,game),wwtrader.models.action.decoy)),wwtrader.models.skill_giver.create.call(null,wwtrader.models.game.random_empty_coord.call(null,game),wwtrader.models.action.sleep)),wwtrader.models.skill_giver.create.call(null,wwtrader.models.game.random_empty_coord.call(null,game),wwtrader.models.action.heal));
});
/**
 * Generates a random game
 */
wwtrader.game_generator.random = (function wwtrader$game_generator$random(){
var game = wwtrader.game_generator.add_skill_givers.call(null,wwtrader.game_generator.add_cities.call(null,wwtrader.game_generator.game_with_random_scenary.call(null)));
var start_coord = wwtrader.models.coordinate.c3_3;
return wwtrader.models.game.register.call(null,game,wwtrader.models.trader.create.call(null,start_coord));
});

//# sourceMappingURL=game_generator.js.map?rel=1450975830016