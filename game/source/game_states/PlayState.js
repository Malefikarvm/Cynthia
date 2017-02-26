class PlayState {

    cosntructor(game) {
        let electron = require('electron');
        let screenElectron = electron.screen;
        let mainScreen = screenElectron.getPrimaryDisplay();
        this.dimensions = mainScreen.size;
    }


    init() { }

    preload() { }

    create() {
        game.stage.backgroundColor = '#000000';
        game.world.setBounds(0, 0, 4000, 4000);
        let point = new Phaser.Point(dimensions.width / 2, dimensions.height / 2);
        this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
        this.player.scale.set(2);
        this.player.smoothed = false;
        this.player.animations.add('run');


        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.enable(this.player);
        this.player.body.fixedRotation = true;

        var cursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 1, 1);
        this.player.animations.play('run', 15, true);
        var Keys = require('./../keyboard/Keys.js');
        this.keys = new Keys(game);
    }

    update() {
        this.player.body.setZeroVelocity();

        this.keys.up.isDown ? this.player.body.moveUp(300) :
            this.keys.down.isDown ? this.player.body.moveDown(300) : null;

        this.keys.left.isDown ? this.player.body.moveLeft(300) :
            this.keys.right.isDown ? this.player.body.moveRight(300) : null;
    }

    render() { }

    pause() { }

    shutdown() { }
}

module.exports = PlayState;
