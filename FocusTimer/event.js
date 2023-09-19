import * as actions from "./actions.js"
import { controls } from "../elements.js";

export function resgisterControls() {
    controls.addEventListener("click", (event) => {
        const action = event.target.dataset.action
        if (action == undefined) {
            return
        }
        actions[action]()
    })
}


resgisterControls()

