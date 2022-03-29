let config = {
    type: Phaser.AUTO,
    width: 720,
    height: 761,
    scene: [BootScene, PreloadScene, StartScene, ChoiceScene, RestartScene, GameScene, LeaderScene],
    scoreList: [
        {
            name: 'me',
            score: 280
        },
        {
            name: 'me1',
            score: 280
        },
        {
            name: 'me2',
            score: 280
        },
        {
            name: 'me3',
            score: 280
        },
        {
            name: 'me4',
            score: 280
        },
        {
            name: 'me54',
            score: 280
        },
        {
            name: 'me5',
            score: 280
        },
        {
            name: 'me6',
            score: 280
        },
    ],
    timeout: 1,
    score: 0,
    fontStyle: {
        font: '24px YanoneKaffeesatz', fill: '#FFFFFF'
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: 0
        }
    }
};

let game = new Phaser.Game(config);