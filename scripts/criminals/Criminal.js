export const Criminal = (criminal) => {
    return `
        <section class="criminal-info">
            <ul>
                <li><h2 class="criminal__name">${criminal.name}</h2></li>
                <li class="criminal__age">Age: ${criminal.age}</li>
                <li class="criminal__crime">Crime: ${criminal.conviction}</li>
                <li class="criminal__termStart">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</li>
                <li class="criminal__termEnd">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</li>
            </ul>
        </section>`
}