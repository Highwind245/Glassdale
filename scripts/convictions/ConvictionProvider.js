let convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
    .then(convictionResponse => convictionResponse.json())
    .then(
        parsedConvictions => {
            console.table(parsedConvictions)
            convictions = parsedConvictions
        }
    )
}