import * as sounds from "../elements.js"


export const forest = {
    start: function() {
        sounds.forestAudio.play()
        sounds.forestAudio.loop = true
    },
    stop: function() {
        sounds.forestAudio.pause()
    }
}

export const rain = {
    start: function() {
        sounds.rainAudio.play()
        sounds.rainAudio.loop = true
    },
    stop: function() {
        sounds.rainAudio.pause()
    }
}

export const coffe = {
    start: function() {
        sounds.coffeAudio.play()
        sounds.coffeAudio.loop = true
    },
    stop: function() {
        sounds.coffeAudio.pause()
    }
}

export const firePlace = {
    start: function() {
        sounds.firePlaceAudio.play()
        sounds.firePlaceAudio.loop = true
    },
    stop: function() {
        sounds.firePlaceAudio.pause()
    }
}
