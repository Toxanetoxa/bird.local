class Forest extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);
        this.scene = scene
        this.timer = this.scene.time.addEvent({
            delay: 2000,
            loop: true,
            callback: this.tick,
            callbackScope: this,
        })
    }

    tick() {
        this.createForest()
    }

    createForest() {
        let object = Wood.generate(this.scene)

        this.add(object)

        object.move()
    }
}