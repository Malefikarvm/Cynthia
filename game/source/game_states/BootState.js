class BootState {
    
    preload() {
        game.load.image('loading', 'assets/loading.png');
        game.load.image('loadingborder', 'assets/loadingborder.png');
    }

    create() {
        //Align the game horizontally
        this.scale.pageAlignHorizontally = true;
        game.state.start('load');
    }
}

module.exports = BootState;
