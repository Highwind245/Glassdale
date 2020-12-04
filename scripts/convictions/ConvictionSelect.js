import { getConvictions, useConvictions } from "./ConvictionProvider.js"

const contentTarget = document.querySelector("#crimeFilter")

export const ConvictionSelect = () => {
    getConvictions()
    .then(  ()=> {
        const convictions = useConvictions()
        render(convictions)
    })
    const render = (convictions) => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictions.map(convictionChoice => {
                        return `<option>${convictionChoice.name}</option>`
                    })
                }
            </select>
        `
    }
}