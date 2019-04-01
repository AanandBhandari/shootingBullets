class Boot extends Phaser.Scene {
    constructor(){
        super("Boot")
    }
    init(){

    }
    preload(){
    }
    create(){
        this.time.addEvent({
            delay: 1000,
            callback: this.makeText.bind(this)
        });
    }
    update(){

    }
    
    makeText() {
        this.textValue = 'Welcome'
        this.welcomeTextValue = 'Play'
        this.welcomeText = this.make.text({
            x: this.cameras.main.width / 2,
            y: this.cameras.main.height / 2 - 50,
            text: this.textValue,
            origin: 0.5,
            style: {
                fontSize: '30px',
                color: '#FFFFFF',
                radius: 2
            }
        });
        this.welcomeText.font = "Montserrat";

        this.playButton = this.make.text({
            x: this.cameras.main.width / 2,
            y: this.cameras.main.height / 2 + 50,
            text: this.welcomeTextValue,
            origin: 0.5,
            padding: {
                left: 20,
                right: 20,
                top: 5,
                bottom: 5
            },
            style: {
                fontSize: '40px',
                color: '#000000',
                backgroundColor: '#FFFFFF',
                radius: 2
            }
        });
        this.playButton.font = "Montserrat";
        this.playButton.setInteractive();
         this.playButton.on('pointerdown', function(){
            this.play();
        }, this);
        
    }
     play() {
        this.scene.start('Preload',{data:'hello'})
    }
}