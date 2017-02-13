var electron = require('electron');
var screenElectron = electron.screen;
var mainScreen = screenElectron.getPrimaryDisplay();
dimensions = mainScreen.size;

//(width, height, Renderer WebGL/Canvas/Auto, element id where the game canavs will be created)
var game = new Phaser.Game(dimensions.width, dimensions.height, Phaser.canvas, 'cynthia');

//Loads the all game data and declare all the states of the game
function gameStates() {
    var bootState = require('./game_states/bootState.js');
    var loadState = require('./game_states/loadState.js');
    var playState = require('./game_states/playState.js');

    return {
        "playState" : new playState(game),
        "bootState" : new bootState(game),
        "loadState" : new loadState(game),
    };
}

//Could be created as many game states as desired
var gameStates = gameStates();
game.state.add('play', gameStates.playState);
game.state.add('boot', gameStates.bootState);
game.state.add('load', gameStates.loadState);
//a game state begins
game.state.start('boot');
