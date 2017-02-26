class LoadState {

    constructor () {
        this.ready = false;
    }

    preload() {
        //Adds text to the load
        this.labelloading = game.add.text(
            game.world.centerX + 0.5,
            game.world.centerY - 15 + 0.5,
            'cargando...',
            {font: '30px arial', fill: '#fff'}
        );
        //Sets the anchor point to the center
        this.labelloading.anchor.setTo(0.5, 0.5);

        this.preloadingborder = game.add.sprite(
            game.world.centerX,
            game.world.centerY + 15,
            'loadingborder'
        );
        this.preloadingborder.x -= this.preloadingborder.width / 2;

        this.preloading = game.add.sprite(
            game.world.centerX,
            game.world.centerY + 19,
            'loading'
        );
        this.preloading.x -= this.preloading.width / 2;

        //Creates the loading bar of the game
        game.load.setPreloadSprite(this.preloading, 1);//Sprite, direction(0==horizontal, 1==vertical)

        //@Important beyond this point we load all files necesaries for the game itself
        game.load.audio('music1', 'audio/Solo-Requiem-Galneryus-Cover.mp3');
        game.load.spritesheet('player', 'assets/sprites/square_example.png', 18, 18, 1);
        this.load.onLoadComplete.add(this.loadComplete, this);
    }

    loadComplete() {
        this.ready = true;
    }

    create() {}

    update() {
        if (this.ready === true) game.state.start('play');
    }
}

module.exports = LoadState;
