class GameScene extends Phaser.Scene {
    constructor() {
        super("Game")
    }

    init() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    async create() {
        // info blocks
        this.createBackground() // созданиие общего бекграунда
        this.createPause()
        this.createRecord()
        this.createScore()
        this.createClock()
        this.createSounds()

        // game objects
        this.player = new Player(this)

        this.timeout = config.timeout

        this.objects = await new Objects(this)

        this.physics.add.overlap(this.objects , this.player, this.onOverlap, undefined, this)

        this.forest = await new Forest(this)

        this.createCompleteEvents()
    }

    onOverlap(source, target) {
        if (target.frame.texture.key === 'rocket') {
            this.player.emit('killed')
        } else {
            this.scorePointValue.setText(config.score++)
            this.sounds.bell.play({
                volume: 1
            })
        }
    }

    update() {
        if (this.player.y > config.height) this.player.emit('killed')

        this.player.move()

        this.bg.tilePositionX += 0.5
    }

    createCompleteEvents() {
        this.player.once('killed', this.onComplete, this)
    }

    onComplete() {
        this.scene.start('Restart', {
            score: config.score
        })
        this.sounds.theme.stop({
            volume: 1
        })
    }

    createBackground() {
        this.bg = this.add.tileSprite(0, 0, config.width, config.height, 'background').setOrigin(0) // фон едет
    }

    createClock() {
        this.clockImage = this.add.sprite(game.config.width - 50, 50, 'clock')
        this.clockImage.scaleX = 0.6
        this.clockImage.scaleY = 0.6

        this.clockText = this.add.text(game.config.width - 82, 60, "Ваше время!", {
            font: '16px YanoneKaffeesatz',
            fill: '#a9a3e1',
            strokeThickness : 6,
            stroke: '#2b237f'
        })

        this.clock = this.add.text(game.config.width - 70, 30, "00:00", config.fontStyle)

        let second = 0
        let min = 0
        let PreMin = 0
        let preSec = 0
        this.time.addEvent({
            delay: 1000,
            callback: function () {
                ++second

                if (second > 9) {
                    preSec = ''
                }

                if (second > 60) {
                    second = 0
                    preSec = 0
                    min += + 1
                }

                if (min > 9) {
                    PreMin = ''
                }

                this.clock.setText(`${PreMin}${min}:${preSec}${second}`)
                this.scoreDistanceValue.setText(`${this.timeout * 10}m`)
                this.timeout++
            },
            callbackScope: this,
            loop: true
        })
    }

    createScore() {
        this.scoreImage = this.add.sprite(game.config.width / 2, 50, 'scoreBar').setOrigin(0.5)
        this.scoreImage.scaleX = 0.7
        this.scoreImage.scaleY = 0.7

        this.scoreDistanceText = this.add.text((game.config.width / 2) - 50, 35, "Дистанция", {
            font: '20px YanoneKaffeesatz',
            fill: '#9c9ae5'
        }).setOrigin(0.5)
        this.scoreDistanceValue = this.add.text((game.config.width / 2) - 50, 60, "0m", {
            font: '24px YanoneKaffeesatz',
            fill: '#FFFFFF'
        }).setOrigin(0.5)

        this.scorePointText = this.add.text((game.config.width / 2) + 50, 35, "Очки", {
            font: '20px YanoneKaffeesatz',
            fill: '#9c9ae5'
        }).setOrigin(0.5)
        this.scorePointValue = this.add.text((game.config.width / 2) + 50, 60, 0, {
            font: '24px YanoneKaffeesatz',
            fill: '#FFFFFF'
        }).setOrigin(0.5)
    }

    createPause() {
        this.pauseBtn = this.add.sprite(game.config.width - 75, game.config.height - 75, 'play').setInteractive({useHandCursor: true})
        this.pauseBtn.scaleX = 0.5
        this.pauseBtn.scaleY = 0.5

        this.pauseBtn.on('pointerdown', () => {
            if (this.pauseBtn.frame.name === 'pause') {
                this.pauseBtn.setFrame('play')
                this.sounds.theme.pause()
                this.scene.pause()
            } else if (this.pauseBtn.frame.name === 'play') {
                this.pauseBtn.setFrame('pause')
                this.sounds.theme.resume()
                this.scene.resume('Game')
            }
        }, this);

        // this.scene.scene.pause();
        // console.log('pause')

    }

    createRecord() {
        this.record = this.add.text(50, 50, "Record: 0", config.fontStyle)
    }

    createSounds() {
        this.sounds = {
            theme: this.sound.add('theme'),
            jump: this.sound.add('jump'),
            bell: this.sound.add('bell'),
        }
        this.sounds.theme.loop = true;
        this.sounds.theme.play({
            volume: 1
        })

        this.music = this.add.sprite(75, game.config.height - 75, 'music').setInteractive({useHandCursor: true})
        this.music.scaleX = 0.5
        this.music.scaleY = 0.5

        this.music.on('pointerup', () => {
            if (this.music.frame.name === 'music-active') {
                this.music.setFrame('music-off')
                this.sounds.theme.pause()
            } else if (this.music.frame.name === 'music-off') {
                this.music.setFrame('music-active')
                this.sounds.theme.resume()
            }
        });
    }
}