import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"

const criminalElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener('crimeChosen', event => {

    if (event.detail.crimeThatWasChosen !== "0") {

        const crimes = useConvictions()
        const crime = crimes.find((crime) => crime.id === parseInt(event.detail.crimeThatWasChosen))

        const criminals = useCriminals()
        const matchingCriminals = criminals.filter((criminal) => criminal.conviction === crime.name)

        render(matchingCriminals)
    }
})

export const CriminalList = () => {
    let criminalCards = []
    getCriminals().then(() => {
        let perps = useCriminals()
        render(perps)
    })
}

const render = (criminals) => {
    let criminalCards = []
    for (const perp of criminals) {
        criminalCards.push(Criminal(perp))
    }

    criminalElement.innerHTML = criminalCards.join("")
}

eventHub.addEventListener('officerSelected', event => {

    if (event.detail.officerThatWasChosen !== "0") {

        const officers = useOfficers()
        const officer = officers.find((officer) => officer.id === parseInt(event.detail.officer))

        const criminals = useCriminals()
        const matchingCriminals = criminals.filter((criminal) => {
            return criminal.arrestingOfficer === officer.name
        })
        render(matchingCriminals)
    }
})