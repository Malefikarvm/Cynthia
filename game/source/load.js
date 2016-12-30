
//Loads the all game data and declare all the states of the game
function playStates() {
    return {
        "playState" : {
            init: function () {
                //Is called when the state begin
            },
            preload: function () {
                //It loads images and files assets
            },
            create: function () {
                // the characters, enemies, sounds, and background, etc, are created
            },
            update: function () {
                //Game logic, collitions, movements, etc
            },
            render: function () {
                // Debug the rendrized
                //this.game.debug.body(this.player);
            },
            pause: function () {
                //When pause
            },
            shutdown: function () {
                //When it exits form the state
            }
        }
    }
}

//(width, height, Renderer WebGL/Canvas/Auto, element id where the game canavs will be created)
var game = new Phaser.Game(1280, 720, Phaser.canvas, 'game');
//Could be created as many game state as desired
var gameStates = playStates();
game.state.add('play', gameStates.playState);
//a game state begins
game.state.start('play');
