basic.clearScreen()
basic.forever(function () {
    basic.showLeds(`
        # # . . .
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . . .
        . . . . .
        . . . . .
        `)
})
