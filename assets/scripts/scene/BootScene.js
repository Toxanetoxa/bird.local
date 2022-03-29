// загрузщик
class BootScene extends Phaser.Scene {
    constructor() {
        super("Boot")
    }

    preload() {
        this.load.image('background', '/assets/sprites/background.jpg')
        this.load.image('leaders', '/assets/sprites/leaders.png')
        this.load.image('logo', '/assets/sprites/logo.png')
        this.load.image('left-arrow', '/assets/sprites/left-arrow.png')
        this.load.image('right-arrow', '/assets/sprites/right-arrow.png')
    }

    create() {
        this.scene.start('Preload')
    }
}