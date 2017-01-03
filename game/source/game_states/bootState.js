function bootState() {
    return {
        preload: function () {
            this.game.load.image('loading', 'assets/loading.png');
            this.game.load.image('loadingborder', 'assets/loadingborder.png');
        },
        create: function () {
            //Align the game horizontally
            this.scale.pageAlignHorizontally = true;
            this.game.state.start('load');
        },
    };
}

module.exports = bootState;
