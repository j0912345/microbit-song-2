function chorus () {
    music.playMelody("C5 G E C - E G C5 ", 400)
    for (let index = 0; index < 2; index++) {
        music.playMelody("D B A F E C5 C G ", 400)
    }
}
function end () {
    music.playMelody("B G F G F E D C ", 200)
}
function bridge_1 () {
    music.playMelody("F D G C C5 B B A ", 400)
    music.playMelody("C5 B B A G F A C5 ", 400)
}
function verse_1 () {
    music.playMelody("F A F A F A F A ", 400)
    music.playMelody("C5 A C5 A C5 A C5 A ", 400)
    music.playMelody("A C5 B A G F E E ", 400)
    music.playMelody("C E C E C E C E ", 400)
}
function verse_2 () {
    music.playMelody("E F G F E F G F ", 400)
    music.playMelody("G A B A G D E D ", 400)
    music.playMelody("E D E D E D E D ", 400)
    music.playMelody("E F E F E F E F ", 400)
    music.playMelody("G F G F G F G F ", 400)
    music.playMelody("G A G A G A G A ", 400)
    music.playMelody("B A B A B A B A ", 400)
    music.playMelody("B C5 B C5 B C5 B C5 ", 400)
}
chorus()
verse_1()
chorus()
bridge_1()
verse_2()
chorus()
chorus()
end()
