import { useCriminals } from "../CriminalDataProvider.js";
import { AlibiPopupConverter } from "./AlibiPopup.js";

const eventHub = document.querySelector(".criminalsContainer")

eventHub.addEventListener('showAssociatesClicked', event => {
    if (event.detail.criminalThatWasChosen !== "0") {

        const criminals = useCriminals()
        const chosenCriminal = criminals.find((criminal) => criminal.id === parseInt(event.detail.criminalThatWasChosen))

        const associates = chosenCriminal.known_associates
        associates.map(associates => AlibiPopupConverter(associates)).join("")
    }
}
)
