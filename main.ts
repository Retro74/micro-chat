input.onButtonPressed(Button.A, function () {
	basic.showIcon(IconNames.Heart)
    basic.showLeds(".....\n.....\n.....\n.....\n...#.\n")
})
input.onButtonPressed(Button.AB, function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if (led.point(i, j)) {
                ledstring = "" + ledstring + "#"
            } else {
                ledstring = "" + ledstring + "."
            }
        }
        ledstring = "" + ledstring + "\n"
    }
    radio.sendString(ledstring)
    console.log("jhkojio")
})
input.onButtonPressed(Button.B, function () {

})
radio.onReceivedString(function (receivedledstring) {
   // basic.showLeds(receivedledstring);
})
let ledstring = ""

radio.setGroup(112)
