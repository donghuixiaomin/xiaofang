Microbit.motorFan(Read_pin.r0, false)
Microbit.init()
basic.forever(function () {
    if (Microbit.ReadGasConcentration(Read_pin.r2) < 100) {
        Microbit.motorFan(Read_pin.r0, false)
    }
    if (Microbit.Readflame(Read_pin.r1) > 500) {
        Microbit.motorFan(Read_pin.r0, true)
    }
    Microbit.showNumber(Oled.oled1, Microbit.ReadGasConcentration(Read_pin.r2))
})
