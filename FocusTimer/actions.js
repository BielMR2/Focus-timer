import state from "./state.js";
import { textMinutes, textSeconds } from "../elements.js";

let contador

export function start(){
    clearInterval(contador)

    contador = setInterval(() => {
        if (state.seconds == 0 && state.minutes == 0) {  return stop() }
        if (state.seconds == 0) { state.minutes--; state.seconds = 59; colocarNaTela(); return}

        if(state.seconds < 0 && state.minutes < 0) { stop(); console.log("erro") }
        state.seconds--

        colocarNaTela()
    }, 1000);
}

export function stop(){
    clearInterval(contador)
}

export function sum(){
    state.minutes += 5
    colocarNaTela()
}

export function reduce(){
    state.minutes -= 5
    colocarNaTela()
}




function colocarNaTela() {
    textMinutes.innerText = String(state.minutes).padStart(2, "0")
    textSeconds.innerText = String(state.seconds).padStart(2, "0")
}