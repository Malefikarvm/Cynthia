let electron = require('electron');
let screenElectron = electron.screen;
let mainScreen = screenElectron.getPrimaryDisplay();
dimensions = mainScreen.size;

//(width, height, Renderer WebGL/Canvas/Auto, element id where the game canavs will be created)
game = new Phaser.Game(dimensions.width, dimensions.height, Phaser.canvas, 'cynthia');

//Loads the all game data and declare all the states of the game
let gameStates = () => {
    let BootState = require('./game_states/BootState.js');
    let LoadState = require('./game_states/LoadState.js');
    let PlayState = require('./game_states/PlayState.js');

    return {
        "playState" : new PlayState(),
        "bootState" : new BootState(),
        "loadState" : new LoadState(),
    };
};

//Could be created as many game states as desired
let states = gameStates();
game.state.add('play', states.playState);
game.state.add('boot', states.bootState);
game.state.add('load', states.loadState);
//a game state begins
game.state.start('boot');
