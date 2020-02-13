let sleep: boolean = true

input.onButtonPressed(Button.A, function () {
    sleep = true
})
input.onButtonPressed(Button.B, function () {
    sleep = false
})


function saver1() {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
}

function saver2() {
    let sprite = game.createSprite(Math.randomRange(0, 4), Math.randomRange(0, 4))
    if (Math.randomBoolean()) {
        sprite.turn(Direction.Right, 45)        
    } else {
        sprite.turn(Direction.Left, 45)
    }
    sprite.move(2)
    sprite.ifOnEdgeBounce()
    basic.pause(200)
    sprite.delete()
}

basic.forever(function () {
    if (sleep) {
        saver2()
    }
    else {
        basic.showString("Working")
    }
})
