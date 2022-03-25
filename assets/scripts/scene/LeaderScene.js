class LeaderScene extends Phaser.Scene {
    constructor() {
        super("Leader")
    }

    create() {
        this.createBackground() // созданиие бекграунда общего
        this.createColorBg()
        this.createTitle()
        this.leaderTable()
    }

    update() {
        this.bg.tilePositionX += 0.2
    }

    createBackground() {
        this.bg = this.add.tileSprite(0, 0, config.width, config.height, 'background').setOrigin(0)
    }

    createTitle() {
        this.title = this.add.text(game.config.width / 2, 100, "Leader table", {
            font: '42px YanoneKaffeesatz', fill: '#FFFFFF'
        }).setOrigin(0.5)
    }

    leaderTable() {
        const cols = config.scoreList.length
        const graphics = this.add.graphics();

        for (let col = 0; col < cols; col++) {
            this.add.text(game.config.width / 2 - 100, 200 + (col * 50), `${config.scoreList[col].name}`, {
                font: '28px YanoneKaffeesatz', fill: '#FFFFFF'
            }).setOrigin(0.5)

            this.add.text(game.config.width / 2 + 100, 200 + (col * 50), `${config.scoreList[col].score}`, {
                font: '28px YanoneKaffeesatz', fill: '#FFFFFF'
            }).setOrigin(0.5)

            graphics.fillStyle(0x000000, 0.4)

            graphics.fillRoundedRect(game.config.width / 2 - 150, 180 + (col * 50), 300, 40)
        }
    }

    createColorBg() {
        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 0.5)
        graphics.fillRect(0, 0, config.width, config.height)
    }
}