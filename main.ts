basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Silly)
    } else {
        basic.clearScreen()
    }
})
