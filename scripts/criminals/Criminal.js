export const Criminal = (criminal) => {
    return `
        <section class="criminal-info">
            <ul>
                <h2 class="criminal__name">${criminal.name}</h2>
                <li class="criminal__age">Age: ${criminal.age}</li>
                <li class="criminal__crime">Crime: ${criminal.conviction}</li>
                <li class="criminal__termStart">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</li>
                <li class="criminal__termEnd">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</li>
            </ul>
            <button id="associates--${criminal.id}">Associate Alibis</button>
        </section>`
}

const eventHub = document.querySelector(".criminalsContainer")

eventHub.addEventListener("click", clickEvent => {
    const [splitId, indexOne] = clickEvent.target.id.split("--")

    if ("associates" === splitId) {
        const customEvent = new CustomEvent("showAssociatesClicked", {
            detail: {
                criminalThatWasChosen: indexOne
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})
