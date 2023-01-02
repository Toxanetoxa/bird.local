// загрузчик
class BootScene extends Phaser.Scene {
    constructor() {
        super("Boot")
    }

    preload() {
        this.load.image('background', '/assets/sprites/background/background.jpg')
        this.load.image('leaders', '/assets/sprites/leaders/leaders.png')
        this.load.image('logo', '/assets/sprites/logo.png')
        this.load.image('left-arrow', '/assets/sprites/left-arrow.png')
        this.load.image('right-arrow', '/assets/sprites/right-arrow.png')
        this.load.image('clock', '/assets/sprites/clock/clock.png')
        this.load.image('scoreBar', '/assets/sprites/scoreBar.png')
        this.load.image('rip', '/assets/sprites/rip.png')
        this.load.image('restart', '/assets/sprites/restart.png')
        this.load.image('star1', '/assets/sprites/star1.png')
        this.load.image('star2', '/assets/sprites/star2.png')

        this.load.atlas('play-button', '/assets/sprites/play-button.png', '/assets/sprites/play-button.json')
        this.load.atlas('chicken', '/assets/sprites/chicken/chicken.png', '/assets/sprites/chicken/chicken.json')
        this.load.atlas('ring', '/assets/sprites/ring.png', '/assets/sprites/ring.json')
        this.load.atlas('music', '/assets/sprites/music.png', '/assets/sprites/music.json')
        this.load.atlas('rocket', '/assets/sprites/rocket.png', '/assets/sprites/rocket.json')
        this.load.atlas('ads', '/assets/sprites/ads/ads.png', '/assets//ads/ads.json')
        this.load.atlas('share', '/assets/sprites/share.png', '/assets/sprites/share.json')
        this.load.atlas('wood', '/assets/sprites/wood.png', '/assets/sprites/wood.json')
        this.load.atlas('play', '/assets/sprites/play.png', '/assets/sprites/play.json')
        this.load.atlas('boom', '/assets/sprites/boom/boom.png', '/assets/sprites/boom/boom.json')

        this.load.audio('theme', 'assets/sounds/Monkeys-Spinning-Monkeys.mp3')
        this.load.audio('jump', 'assets/sounds/61847__simon-rue__boink-v3.mp3')
        this.load.audio('bell', 'assets/sounds/235266__godowan__bell1.mp3')

    }

    create() {
        this.scene.start('Preload')
    }
}