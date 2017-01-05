function loadState() {
    this.ready = false;
    return {
        preload: function () {
            //Adds text to the load
            this.labelloading = this.game.add.text(
                this.game.world.centerX + 0.5,
                this.game.world.centerY - 15 + 0.5,
                'cargando...',
                {font: '30px arial', fill: '#fff'}
            );
            //Sets the anchor point to the center
            this.labelloading.anchor.setTo(0.5, 0.5);

            this.preloadingborder = this.game.add.sprite(
                this.game.world.centerX,
                this.game.world.centerY + 15,
                'loadingborder'
            );
            this.preloadingborder.x -= this.preloadingborder.width / 2;

            this.preloading = this.game.add.sprite(
                this.game.world.centerX,
                this.game.world.centerY + 19,
                'loading'
            );
            this.preloading.x -= this.preloading.width / 2;

            //Creates the loading bar of the game
            this.game.load.setPreloadSprite(this.preloading, 1);//Sprite, direction(0==horizontal, 1==vertical)

            //@Important beyond this point we load all files necesaries for the game itself
            this.game.load.audio('music1', 'audio/Solo-Requiem-Galneryus-Cover.mp3');
            this.game.load.image('player', 'assets/sprites/batman64px.png', 64, 64);
            this.load.onLoadComplete.add(this.loadComplete, this);
        },
        loadComplete: function () {
            this.ready = true;
        },
        create: function () {

        },
        update: function () {
            if (this.ready === true) this.game.state.start('play');
        },
    };
}

module.exports = loadState;
