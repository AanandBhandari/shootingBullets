class Preload extends Phaser.Scene{
    constructor(){
        super('Preload')
    }
    preload() {
        console.log(gameOptions.asset_path);
        this.load.image('ship', gameOptions.asset_path +'img/playerShip1_red.png');
        this.load.image('laser', gameOptions.asset_path +'img/laserBlue02.png');
    }
    create() {
        this.scene.start('Main');
    }
}