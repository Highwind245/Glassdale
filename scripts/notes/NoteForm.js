import { saveNote } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js";

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        const author = document.querySelector("#input__name").value
        const text = document.querySelector("#input__reason").value
        const criminalId = parseInt(document.querySelector("#input_suspect").value)

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            author: author,
            text: text,
            criminalId: criminalId,
            timestamp: Date.now(),
        }

        // Change API state and application state
        saveNote(newNote)
    }
})


const render = () => {
    const criminalsCollection = useCriminals()
    contentTarget.innerHTML = `
        <input type="text" id="input__name">Your Name</input>
        <textarea id="input__reason" placeholder="Description"></textarea>

        <select class="dropdown" id="input_suspect">
            <option value="0">Please select a suspect...</option>
            ${
                criminalsCollection.map(
                    (criminal) => `
                    <option value="${criminal.id}">
                        ${criminal.name}
                    </option>
                 `)
        }
        </select>
    

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    getCriminals()
    .then( () => render())
}