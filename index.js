// global variable
const gameOption = {
    
}


window.onload = function () {
    let gameConfig = {
        width: 480,
        height: 640,
        scene: [Boot, Preload, PlayGame, Over],
        parent: 'app',
        backgroundColor: 0x222222,
        physics: {
            default: 'arcade',
            arcade: {
                debug: false
            }
        }
    }
    game = new Phaser.Game(gameConfig);
}