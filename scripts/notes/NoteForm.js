import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")
let id = 0

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id="input__name">Your Name</input>
        <input type="text" id="input__suspect">Name of Suspect</input>
        <textarea id="input__reason" placeholder="Description"></textarea>
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        debugger
        const author = document.querySelector("#input__name").value
        const text = document.querySelector("#input__reason").value
        const suspect = document.querySelector("#input__suspect").value

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            author: author,
            text: text,
            suspect: suspect,
            timestamp: Date.now(),
            id: ++id
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

// const NoteForm = () => {
//     // rest of the code here
// }
