// начало
class StartScene extends Phaser.Scene {
    constructor() {
        super("Start")
    }

    create() {
        this.createBackground() // созданиие бекграунда общего
        this.createColorBg()
        this.playButton()
        this.gameLogo()
        this.adsButton()
        this.shareBtn()
        this.musicBtn()
        this.leadersBtn()
    }

    update() {
        this.bg.tilePositionX += 0.2
    }

    createBackground() {
        this.bg = this.add.tileSprite(0, 0, config.width, config.height, 'background').setOrigin(0)
    }

    adsButton() {
        this.ads = this.add.sprite(game.config.width / 2, game.config.height - 120, 'ads').setOrigin(0.5).setInteractive()
        this.ads.scaleX = 0.5
        this.ads.scaleY = 0.5

        this.ads.on('pointerdown', function () {
            window.open('https://google.com', "_blank");
        })
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

    leadersBtn() {
        this.leaders = this.add.sprite(game.config.width / 2, game.config.height - 50, 'leaders').setOrigin(0.5).setInteractive()
        this.leaders.scaleX = 0.6
        this.leaders.scaleY = 0.6

        this.leaders.on('pointerdown', function () {
            this.scene.scene.start('Leader')
        })
    }

    musicBtn() {
        this.music = this.add.sprite(game.config.width / 2 + 100, game.config.height - 120, 'music').setOrigin(0.5).setInteractive()
        this.music.scaleX = 0.5
        this.music.scaleY = 0.5

        this.music.on('pointerdown', function () {
            console.log('music click')
        })
    }

    shareBtn() {
        this.share = this.add.sprite(game.config.width / 2 - 100, game.config.height - 120, 'share').setOrigin(0.5).setInteractive()
        this.share.scaleX = 0.5
        this.share.scaleY = 0.5

        this.share.on('pointerdown', function () {
            window.open('https://google.com', "_blank");
        })
    }

    createColorBg() {
        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 0.5)
        graphics.fillRect(0,0, config.width, config.height)
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
}