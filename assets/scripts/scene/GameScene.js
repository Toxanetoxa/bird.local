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
        this.createDistance()
        this.createPause()
        this.createRecord()
        this.createScore()
        this.createSetting()
        this.createTime()
        this.timer()
        this.createSounds()

        // game objects
        this.timeout = config.timeout

        this.player = new Player(this)

        this.objects = await new Objects(this)

        this.physics.add.overlap(this.objects , this.player, this.onOverlap, undefined, this)

        this.createCompleteEvents()
    }

    onOverlap(source, target) {
        if (target.frame.texture.key === 'rocket') {
            this.player.emit('killed')
        } else {
            this.score.setText("Score: " + config.score++)
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

    timer() {
        this.time.addEvent({
            delay: 1000,
            callback: function () {
                this.timeText.setText("Time: " + this.timeout)
                this.distance.setText("Distance: " + this.timeout * 10)
                this.timeout++
            },
            callbackScope: this,
            loop: true
        })
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

    createTime() {
        this.timeText = this.add.text(game.config.width - 100, 50, "Time: 0", config.fontStyle)
    }

    createDistance() {
        this.distance = this.add.text(game.config.width / 2, 50, "Distance: 0", config.fontStyle).setOrigin(1, 0)
    }

    createPause() {
        this.pause = this.add.text(game.config.width - 100, game.config.height - 100, "Pause", config.fontStyle).setInteractive()
        this.pause.on('pointerdown', function () {
            this.scene.scene.pause();
            console.log('pause')
        })
    }

    createRecord() {
        this.record = this.add.text(50, 50, "Record: 0", config.fontStyle)
    }

    createScore() {
        this.score = this.add.text(game.config.width / 2, 50, "Score: 0", config.fontStyle).setOrigin(-1, 0)
    }

    createSetting() {
        this.setting = this.add.text(50, game.config.height- 100, "Setting", config.fontStyle).setOrigin(0).setInteractive()
        this.setting.on('pointerdown', function () {
            console.log('setting')
        })
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
    }
}