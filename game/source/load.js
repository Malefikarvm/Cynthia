
//Loads the all game data and declare all the states of the game
function gameStates() {
    var playState = require('./game_states/playState.js');
    return {
        "playState" : new playState()
    };
}

var electron = require('electron');
var screenElectron = electron.screen;
var mainScreen = screenElectron.getPrimaryDisplay();
dimensions = mainScreen.size;

//(width, height, Renderer WebGL/Canvas/Auto, element id where the game canavs will be created)
var game = new Phaser.Game(dimensions.width, dimensions.height, Phaser.canvas, 'game');
//Could be created as many game state as desired
var gameStates = gameStates();
game.state.add('play', gameStates.playState);
//a game state begins
game.state.start('play');
