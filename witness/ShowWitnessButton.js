const contentTarget = document.querySelector(".witnessList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitnesses") {
        const customEvent = new CustomEvent("showWitnessesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowWitnessesButton = () => {
    contentTarget.innerHTML = "<button id='showWitnesses'>Show Witnesses</button>"
}
