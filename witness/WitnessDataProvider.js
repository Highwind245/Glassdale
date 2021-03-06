let witnesses = []


export const useWitness = () => witnesses.slice()

export const getWitness = () => {
    return fetch('https://criminals.glassdale.us/witnesses')
        .then(response => response.json())
        .then(parsedWitnesses => {
            witnesses = parsedWitnesses
        })

}
