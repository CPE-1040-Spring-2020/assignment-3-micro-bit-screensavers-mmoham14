// 1. declare variables

let iconHeart: boolean = true // take notes

// 2. detect & handle events

input.onButtonPressed(Button.A, function () {
    if (iconHeart) {
        iconHeart = false
    } else {
        iconHeart = true
    }
})
// 3. main program/ forever loop/ functions

basic.forever(function () {
    if (iconHeart) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Sword)
    }


    basic.pause(100)
    basic.clearScreen()
})

