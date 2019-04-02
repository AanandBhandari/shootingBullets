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

        this.lasers = this.physics.add.group();
       
        this.lasers.createMultiple({
            key : 'laser',
            maxSize : -1,
            setXY: {
                x: this.ship.x,
                y: this.ship.y,
            }
        })
        this.lasers.children.iterate(function (child) {
            child.setCollideWorldBounds(true);
            child.body.onWorldBounds = true;
            this.physics.world.on('worldbounds', function (body) {
                console.log('hello from the edge of the world', body);
            }, this);
        },this)
        this.input.on('pointerdown', this.shoot, this);
    }
    update() {
        
    }
    shoot() {
        this.lasers.children.iterate(function (child){
            console.log('helloworld');
            // child.setActive(true);
            // child.setVisible(true);
            child.body.velocity.y = -200;
        },this)
        
    }
    

}