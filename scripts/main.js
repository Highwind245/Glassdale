import { NoteForm } from "./notes/NoteForm.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import "./notes/NoteList.js"
import "./criminals/alibis/AlibiList.js"
import { ShowWitnessesButton } from "../witness/ShowWitnessButton.js"
import "../witness/WitnessList.js"

NoteForm()
CriminalList()
ConvictionSelect()
OfficerSelect()
ShowNoteButton()
ShowWitnessesButton()