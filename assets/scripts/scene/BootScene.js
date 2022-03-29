// загрузщик
class BootScene extends Phaser.Scene {
    constructor() {
        super("Boot")
    }

    preload() {
        this.load.image('ads', '/assets/sprites/ads.png')
        this.load.image('background', '/assets/sprites/background.jpg')
        this.load.image('leaders', '/assets/sprites/leaders.png')
        this.load.image('logo', '/assets/sprites/logo.png')
        this.load.image('share', '/assets/sprites/share.png')
    }

    create() {
        this.scene.start('Preload')
    }
}