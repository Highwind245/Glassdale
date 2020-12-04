import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { Criminal } from "./Criminal.js"

export const CriminalList = () => {
    getCriminals()
    .then( response => {
        let contentElement = document.querySelector("#criminalsContainer")
        const criminalCards = useCriminals()
        for (const criminal of criminalCards) {
            let criminalHTML = Criminal(criminal)
            contentElement.innerHTML += `
                ${criminalHTML}
            `
        }
    }

    );
}