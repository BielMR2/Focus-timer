import * as actions from "./SActions.js"
import { soundControls } from "../elements.js";
import state from "../FocusTimer/state.js";


export function resgisterSoundControls() {
    soundControls.addEventListener("click", (event) => {
        const action = event.target.dataset.action

        if (action == undefined) { return }

        if (state.songON == true) {
            event.target.classList.remove("activated")
            actions[action].stop()

            state.songON = false
            return
        }

        if (state.songON == false) {
            event.target.classList.add("activated")
            actions[action].start()
            
            state.songON = true
        } 
    })
}

resgisterSoundControls()