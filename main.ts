input.onButtonPressed(Button.A, function () {
    PA += 1
    Rounds += 1
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        # . . . #
        # . . . #
        `)
    update_score()
})
input.onButtonPressed(Button.AB, function () {
    Rounds += 1
    Ties += 1
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    update_score()
})
input.onButtonPressed(Button.B, function () {
    PB += 1
    Rounds += 1
    basic.showLeds(`
        # # . . .
        # . # . .
        # # # . .
        # . # . .
        # # . . .
        `)
    update_score()
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # . . #
        `)
    reset()
    Rounds = 0
    Ties = 0
    update_score()
})
function reset () {
    OLED.clear()
    OLED.writeStringNewLine("Player A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
}
function update_score () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("\"Let's play a game\"")
    basic.pause(2000)
    update_score()
}
let PB = 0
let Ties = 0
let Rounds = 0
let PA = 0
reset()
