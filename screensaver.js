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


basic.forever(function () {
    if (sleep) {
        saver1()
    }
    else {
        basic.showString("Working")
    }
})
