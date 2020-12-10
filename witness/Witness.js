export const WitnessHTMLConverter = (witnessObject) => {
    return `
        <section class="witness">
            <div class="witness__name">Name: ${witnessObject.name}</div>
            <div class="witness__statement">Statement:${witnessObject.statements}</div>
        </section>
    `
}
