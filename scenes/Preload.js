class Preload extends Phaser.Scene{
    constructor(){
        super('Preload')
    }
    preload() {
        console.log(gameOptions.asset_path);
        game.load.image('ship', gameOptions.asset_path +'playerShip1_red.png');
        game.load.image('laser', gameOptions.asset_path +'laserBlue02.png');
    }
    create() {
        this.scene.start('Main');
    }
}