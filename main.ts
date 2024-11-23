input.onButtonPressed(Button.A, function () {
    zaehler += -1
})
input.onButtonPressed(Button.B, function () {
    zaehler += 1
})
let zaehler = 0
basic.forever(function () {
    basic.showNumber(zaehler)
})
