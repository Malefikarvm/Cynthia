function exampleState() {
    return {
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
    };
}

module.exports = exampleState;
