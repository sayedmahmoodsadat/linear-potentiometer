input.onGesture(Gesture.Shake, function () {
    if (true) {
        basic.showString("Hello!")
        basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P0))
        music.play(music.stringPlayable("B E - B - B - - ", 120), music.PlaybackMode.UntilDone)
    } else {
        basic.pause(500)
    }
})
basic.showLeds(`
    # # . . .
    . . . # #
    . . # . .
    # # . . .
    . . . # #
    `)
basic.pause(2000)
basic.forever(function () {
    basic.showIcon(IconNames.TShirt)
    basic.showIcon(IconNames.StickFigure)
})
