class Main extends Phaser.Scene {
    constructor() {
        super('Main')
    }
    create() {
        this.ship = game.add.sprite(game.world.centerX, game.world.centerY, 'ship');
    }
}