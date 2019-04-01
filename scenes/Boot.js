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
    }
}