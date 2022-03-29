// Прелоадер
class PreloadScene extends Phaser.Scene {
    constructor() {
        super("Preload")
    }

    preload() {
        this.load.atlas('play-button', '/assets/sprites/play-button.png', '/assets/sprites/play-button.json')
        this.load.atlas('chicken', '/assets/sprites/chicken.png', '/assets/sprites/chicken.json')
        this.load.atlas('ring', '/assets/sprites/ring.png', '/assets/sprites/ring.json')
        this.load.atlas('music', '/assets/sprites/music.png', '/assets/sprites/music.json')
        this.load.atlas('rocket', '/assets/sprites/rocket.png', '/assets/sprites/rocket.json')
        this.load.audio('theme', 'assets/sounds/Monkeys-Spinning-Monkeys.mp3')
        this.load.audio('jump', 'assets/sounds/61847__simon-rue__boink-v3.mp3')
        this.load.audio('bell', 'assets/sounds/235266__godowan__bell1.mp3')
    }

    create() {
        this.scene.start('Start')
    }
}