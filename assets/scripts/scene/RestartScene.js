class RestartScene extends Phaser.Scene {
    constructor() {
        super("Restart")
    }

    create(data) {
        this.score = data.score
        this.createBackground() // созданиие бекграунда общего
        this.createColorBg()
        this.playButton()
        this.gameLogo()
        this.createTitle()
        this.scoreText()
    }

    update() {
        this.bg.tilePositionX += 0.2
    }

    createBackground() {
        this.bg = this.add.tileSprite(0, 0, config.width, config.height, 'background').setOrigin(0)
    }

    gameLogo() {
        this.logo = this.add.sprite(game.config.width / 2, 0, 'logo').setOrigin(.5, -0.1)
        this.logo.scaleX = 0.4
        this.logo.scaleY = 0.4

        this.tweens.add({
            duration: 2000,
            ease: 'Sine.easeInOut',
            repeat: 4,
            scaleX: 0.42,
            scaleY: 0.42,
            targets: [this.logo],
            yoyo: true,
        });
    }

    playButton() {
        this.playBtn = this.add.sprite(game.config.width / 2, 50, 'play-button', 0).setInteractive().setOrigin(.5, -1.5);
        this.playBtn.scaleX = 0.5
        this.playBtn.scaleY = 0.5

        this.playBtn.on('pointerover', function () {
            this.setFrame('play hover');
        });

        this.playBtn.on('pointerout', function () {
            this.setFrame('play active');
        })

        this.playBtn.on('pointerdown', function () {
            this.setFrame('play')
            this.scene.scene.start('Choice')
        })
    }

    createColorBg() {
        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 0.5)
        graphics.fillRect(0,0, config.width, config.height)
    }

    createTitle() {
        this.title = this.add.text(game.config.width / 2, game.config.width / 2, "Tap or to Start Over", {
            font: '42px YanoneKaffeesatz', fill: '#FFFFFF'
        }).setOrigin(.5, -5)
    }

    scoreText() {
        this.score = this.add.text(50, 50, `Your result ${this.score}`, {
            font: '32px YanoneKaffeesatz', fill: '#FFFFFF'
        })
    }
}