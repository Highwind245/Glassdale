import { getConvictions, useConvictions } from "./ConvictionProvider.js"

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", event => {
    if (event.target.id === "crimeSelect") {
        const customEvent = new CustomEvent ("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})



export const ConvictionSelect = () => {
    getConvictions()
    .then( () => {
        const convictions = useConvictions()
        render(convictions)
    })
}

const render = convictionsCollection => {
    
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map((crime) => `
                    <option value="${crime.id}">
                        ${crime.name}
                    </option>
                 `)
            }
        </select>
    `
}
