function playState() {
    var electron = require('electron');
    var screenElectron = electron.screen;
    var mainScreen = screenElectron.getPrimaryDisplay();
    dimensions = mainScreen.size;

    return {
        init: function () { },
        preload: function () { },
        create: function () {
            this.game.stage.backgroundColor = '#212121';
            this.game.world.setBounds(0, 0, 4000, 4000);
            var point = new Phaser.Point(dimensions.width / 2, dimensions.height / 2);
            this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');

            this.game.physics.startSystem(Phaser.Physics.P2JS);
            this.game.physics.p2.enable(this.player);
            this.player.body.fixedRotation = true;

            cursors = this.game.input.keyboard.createCursorKeys();
            this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 1, 1);

            var keys = require('./../keyboard/keys.js');
            this.keys = new keys(this.game);
        },
        update: function () {
            this.player.body.setZeroVelocity();

            this.keys.up.isDown ? this.player.body.moveUp(300) : this.keys.down.isDown ? this.player.body.moveDown(300) : null;
            this.keys.left.isDown ? this.player.body.moveLeft(300) : this.keys.right.isDown ? this.player.body.moveRight(300) : null;
        },
        render: function () { },
        pause: function () { },
        shutdown: function () { }
    };
}

module.exports = playState;
