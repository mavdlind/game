input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
    basic.showIcon(IconNames.Butterfly)
    music.playMelody("C5 C5 B B A A A G ", 120)
    music.playMelody("G G F F F E E E ", 120)
    music.playMelody("F E E E E D D D ", 120)
    music.playMelody("D C C C C B G A ", 120)
    music.playMelody("A B G F G E A D ", 120)
    music.playMelody("E B G E A F A D ", 120)
    music.playMelody("D G F G E B D F ", 120)
    music.playMelody("D A F G E C5 B C ", 125)
    music.playMelody("E C F B C5 D G A ", 125)
    music.playMelody("A B G E C5 F A E ", 125)
    music.playMelody("C5 B C5 E B D F G ", 125)
    music.playMelody("B G A E F D E C ", 125)
    music.playMelody("D C5 B F A C C5 G ", 130)
    music.playMelody("F E B A G D D C ", 130)
    music.playMelody("C C5 B G G F F F ", 130)
    music.playMelody("F C5 B A C5 G D E ", 135)
    music.playMelody("F B G G E F D G ", 135)
    music.playMelody("G B A G F A D F ", 135)
    music.playMelody("A C5 C5 C5 B C5 C C ", 150)
    music.playMelody("C C5 B C5 B G A G ", 303)
    music.playMelody("C B C5 A G A G E ", 311)
    music.playMelody("C F A C5 E F D G ", 140)
    music.playMelody("C G F C5 E G D C5 ", 130)
    music.playMelody("G C A C5 F G G G ", 120)
    music.playMelody("C B B C5 C5 B B D ", 120)
    basic.showString("SHAKE IT!")
})
input.onGesture(Gesture.TiltLeft, function () {
    music.playMelody("D D D D D C C C ", 340)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showString("NICE!")
    basic.showString("NOW CLAP!")
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("D D D D D C C C ", 340)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showString("NICE!")
    basic.showString("NOW TILT IT!")
})
input.onGesture(Gesture.ThreeG, function () {
    music.playMelody("D D D D D C C C ", 340)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showString("NICE!")
    basic.showString("BYEBYE!")
    basic.showIcon(IconNames.Happy)
})
