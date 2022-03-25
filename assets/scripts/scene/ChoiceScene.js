class ChoiceScene extends Phaser.Scene {
    constructor() {
        super("Choice")
    }

    create() {
        this.createBackground()
        this.createTitle()
        this.createName()
        this.createPrev()
        this.createNext()
    }

    update() {
        this.bg.tilePositionX += 0.2
    }

    createBackground() {
        this.bg = this.add.tileSprite(0, 0, config.width, config.height, 'background').setOrigin(0)
    }

    createTitle() {
        this.title = this.add.text(game.config.width / 2, 100, "Choose your chicken", {
            font: '42px YanoneKaffeesatz', fill: '#FFFFFF'
        }).setOrigin(0.5)
    }

    createName() {
        this.name = this.add.text(game.config.width / 2, 200, "Coco", {
            font: '42px YanoneKaffeesatz', fill: '#FFFFFF'
        }).setOrigin(0.5).setInteractive()

        this.name.on('pointerdown', function () {
            this.scene.scene.start('Game')
        })
    }

    createPrev() {
        this.prev = this.add.text(game.config.width / 2 - 100, 200, "Prev", {
            font: '42px YanoneKaffeesatz', fill: '#FFFFFF'
        }).setOrigin(0.5).setInteractive()

        this.prev.on('pointerdown', function () {
            console.log('prev')
        })
    }

    createNext() {
        this.next = this.add.text(game.config.width / 2 + 100, 200, "Next", {
            font: '42px YanoneKaffeesatz', fill: '#FFFFFF'
        }).setOrigin(0.5).setInteractive()

        this.next.on('pointerdown', function () {
            console.log('next')
        })
    }
}