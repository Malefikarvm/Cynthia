function keys(game) {
    return {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D)
    };
}

module.exports = keys;
