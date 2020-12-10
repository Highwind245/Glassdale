import { getWitness, useWitness } from "./WitnessDataProvider.js";
import { WitnessHTMLConverter } from "./Witness.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".witnessList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showWitnessesClicked", () => {
    witnessList()
})

const render = (witnessArray) => {
    const allWitnessesConvertedToString = witnessArray.map((witness) => WitnessHTMLConverter(witness)).join("")

    contentTarget.innerHTML = allWitnessesConvertedToString
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const witnessList = () => {
    getWitness()
        .then(() => {
            const allWitnesses = useWitness()
            render(allWitnesses)
        })
}
