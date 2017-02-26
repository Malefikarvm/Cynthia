import * as Keys from './../keyboard/Keys.js';

class Player extends Keys {

    constructor() {
        this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
        this.player.scale.set(2);
        this.player.smoothed = false;
        this.player.animations.add('run');
        this.player.body.fixedRotation = true;
    }

    get player() {
        return this.player;
    }

    set player(player) {
        this.player = player;
    }
}
