class Main extends Phaser.Scene {
    constructor() {
        super('Main')
    }
    create() {
        this.ship = this.add.sprite(game.config.width/2,game.config.height/2, 'ship');
        this.debugText=this.make.text({
            x: 10,
            y: 30,
            text: 'CodeCaptain Shooting Demo',
            origin: 0.5,
            style: {
                fontSize: '20px',
                color: '#FFFFFF',
                radius: 2
            }
        });
        this.debugText.font = "Montserrat";
        this.debugText = this.make.text({
            x: 3,
            y: 55,
            text: 'Click or press space / enter to shoot',
            style: {
                fontSize: '20px',
                color: '#FFFFFF',
                radius: 2
            }
        });
    }
    
    

}