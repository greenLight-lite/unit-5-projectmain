namespace SpriteKind {
    export const Follower = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Follower, SpriteKind.Follower, function (sprite, otherSprite) {
    otherSprite.follow(sprite)
})
scene.onOverlapTile(SpriteKind.Follower, sprites.dungeon.greenOuterSouth0, function (sprite, location) {
    if (teamChoice == 1) {
        info.player2.changeScoreBy(1)
    }
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.Follower, sprites.dungeon.purpleInnerSouthWest, function (sprite, location) {
    if (teamChoice == 2) {
        info.player1.changeScoreBy(1)
    }
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Follower, function (sprite, otherSprite) {
    otherSprite.follow(sprite)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    teamChoice = game.askForNumber("1 for purple team; 2 for yellow team")
    if (teamChoice == 1) {
        player1 = sprites.create(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(player1, tiles.getTileLocation(12, 14))
        controller.player1.moveSprite(player1)
        player1.setScale(0.7, ScaleAnchor.Middle)
        splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, player1)
        characterAnimations.loopFrames(
        player1,
        [img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `,img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c . . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f b 3 b c 3 b c f b b c c c . 
            . c b b b b b b c f b c b c c . 
            . c b b b b b b c b b c b b c . 
            c b 1 b b b 1 b b b c c c b c . 
            c b b b b b b b b c c c c c . . 
            f b c b b b c b b b b f c . . . 
            f b 1 f f f 1 b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . c c . . c c . . . . . . . . 
            . . c 3 c c 3 c c c . . . . . . 
            . c b 3 b c 3 b c c c . . . . . 
            . c b b b b b b b b f f . . . . 
            c c b b b b b b b b f f . . . . 
            c b 1 b b b 1 b b c f f f . . . 
            c b b b b b b b b f f f f . . . 
            f b c b b b c b c c b b b . . . 
            f b 1 f f f 1 b f c c c c . . . 
            . f b b b b b b f b b c c . . . 
            c c f b b b b b c c b b c . . . 
            c c c f f f f f f c c b b c . . 
            . c c c . . . . . . c c c c c . 
            . . c c c . . . . . . . c c c c 
            . . . . . . . . . . . . . . . . 
            `,img`
            . f f f . . . . . . . . f f f . 
            f f c . . . . . . . f c b b c . 
            f c c . . . . . . f c b b c . . 
            c f . . . . . . . f b c c c . . 
            c f f . . . . . f f b b c c . . 
            f f f c c . c c f b c b b c . . 
            f f f c c c c c f b c c b c . . 
            . f c 3 c c 3 b c b c c c . . . 
            . c b 3 b c 3 b b c c c c . . . 
            c c b b b b b b b b c c . . . . 
            c b 1 b b b 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            f b c b b b c b b b b f . . . . 
            . f 1 f f f 1 b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.Moving)
        )
        player2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(player2, tiles.getTileLocation(4, 2))
        controller.player2.moveSprite(player2)
        player2.setScale(0.7, ScaleAnchor.Middle)
        splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, player2)
        characterAnimations.loopFrames(
        player2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c c b 5 5 b d d d c . 
            . . . . . c d 5 5 b b c c c . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 5 5 5 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c b 5 5 b d d d c c . 
            . . . . c d 5 5 b b c c c . . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 5 5 5 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c . 
            . c c c c c b b d d d d d d c c 
            . . . c c 5 5 b 5 5 d d d d d c 
            . . . . c b 5 5 b b c c c c c c 
            . . . . c c c c c c . . . . . . 
            . . . . . c b b b c . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c c 3 3 b b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c c 
            . . . c b c c b 5 5 b c c c . . 
            . . . c c c d 5 5 b c . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d c c . 
            . . c b b c c c 5 5 b c c . . . 
            . . c c c c c d 5 5 c . . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.Moving)
        )
    } else if (teamChoice == 2) {
        player1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(player1, tiles.getTileLocation(4, 2))
        controller.player1.moveSprite(player1)
        player1.setScale(0.7, ScaleAnchor.Middle)
        splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, player1)
        characterAnimations.loopFrames(
        player1,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c c b 5 5 b d d d c . 
            . . . . . c d 5 5 b b c c c . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 5 5 5 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c b 5 5 b d d d c c . 
            . . . . c d 5 5 b b c c c . . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 5 5 5 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c . 
            . c c c c c b b d d d d d d c c 
            . . . c c 5 5 b 5 5 d d d d d c 
            . . . . c b 5 5 b b c c c c c c 
            . . . . c c c c c c . . . . . . 
            . . . . . c b b b c . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c c 3 3 b b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c c 
            . . . c b c c b 5 5 b c c c . . 
            . . . c c c d 5 5 b c . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d c c . 
            . . c b b c c c 5 5 b c c . . . 
            . . c c c c c d 5 5 c . . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.Moving)
        )
        player2 = sprites.create(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(player2, tiles.getTileLocation(12, 14))
        controller.player2.moveSprite(player2)
        player2.setScale(0.7, ScaleAnchor.Middle)
        splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, player2)
        characterAnimations.loopFrames(
        player2,
        [img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `,img`
            . . f f f . . . . . . . . . . . 
            f f f c c . . . . . . . . f f f 
            f f c c . . c c . . . f c b b c 
            f f c 3 c c 3 c c f f b b b c . 
            f f b 3 b c 3 b c f b b c c c . 
            . c b b b b b b c f b c b c c . 
            . c b b b b b b c b b c b b c . 
            c b 1 b b b 1 b b b c c c b c . 
            c b b b b b b b b c c c c c . . 
            f b c b b b c b b b b f c . . . 
            f b 1 f f f 1 b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . c c . . c c . . . . . . . . 
            . . c 3 c c 3 c c c . . . . . . 
            . c b 3 b c 3 b c c c . . . . . 
            . c b b b b b b b b f f . . . . 
            c c b b b b b b b b f f . . . . 
            c b 1 b b b 1 b b c f f f . . . 
            c b b b b b b b b f f f f . . . 
            f b c b b b c b c c b b b . . . 
            f b 1 f f f 1 b f c c c c . . . 
            . f b b b b b b f b b c c . . . 
            c c f b b b b b c c b b c . . . 
            c c c f f f f f f c c b b c . . 
            . c c c . . . . . . c c c c c . 
            . . c c c . . . . . . . c c c c 
            . . . . . . . . . . . . . . . . 
            `,img`
            . f f f . . . . . . . . f f f . 
            f f c . . . . . . . f c b b c . 
            f c c . . . . . . f c b b c . . 
            c f . . . . . . . f b c c c . . 
            c f f . . . . . f f b b c c . . 
            f f f c c . c c f b c b b c . . 
            f f f c c c c c f b c c b c . . 
            . f c 3 c c 3 b c b c c c . . . 
            . c b 3 b c 3 b b c c c c . . . 
            c c b b b b b b b b c c . . . . 
            c b 1 b b b 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            f b c b b b c b b b b f . . . . 
            . f 1 f f f 1 b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.Moving)
        )
    }
})
let followerPurple: Sprite = null
let followerGreen: Sprite = null
let player2: Sprite = null
let player1: Sprite = null
let teamChoice = 0
tiles.setCurrentTilemap(tilemap`level1`)
info.setScore(0)
game.onUpdateInterval(500, function () {
    followerGreen = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . b 7 7 7 b . . . . . 
        . . . . . b b 7 7 7 b b . . . . 
        . . b b b b 7 7 7 1 1 b b b b . 
        . . b 7 7 7 7 7 7 1 1 7 7 7 b . 
        . . b d d 7 7 7 7 7 7 7 d d b . 
        . . . b d d 7 7 7 7 7 d d b . . 
        . . . c b 7 7 7 7 7 7 7 b c . . 
        . . . c b 7 7 7 7 7 7 7 b c . . 
        . . . c 7 7 d d b d d 7 7 c . . 
        . . . c 7 d d c c c d d 7 c . . 
        . . . c c c c . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Follower)
    followerPurple = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . b a a a b . . . . . 
        . . . . . b b a a a b b . . . . 
        . . b b b b a a a 1 1 b b b b . 
        . . b a a a a a a 1 1 a a a b . 
        . . b d d a a a a a a a d d b . 
        . . . b d d a a a a a d d b . . 
        . . . c b a a a a a a a b c . . 
        . . . c b a a a a a a a b c . . 
        . . . c a a d d b d d a a c . . 
        . . . c a d d c c c d d a c . . 
        . . . c c c c . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Follower)
    tiles.placeOnRandomTile(followerGreen, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(followerPurple, sprites.dungeon.floorDark2)
})
