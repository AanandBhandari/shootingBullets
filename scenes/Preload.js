class Preload extends Phaser.Scene{
    constructor(){
        super('Preload')
    }
    preload() {
        const dir = 'assets/';
        game.load.image('ship', dir + 'playerShip1_red.png');
        game.load.image('laser', dir + 'laserBlue02.png');
    }
    create() {
        this.scene.start('Main');
    }
}