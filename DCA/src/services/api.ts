
export const catImage = async() => {
    try {
        const imgCat = await fetch('https://cataas.com/c/s/:text').then(res => res.json())
        return imgCat.image
    } catch (error) {
        console.log(error)
    }
}

export const catFact = async() => {
    try {
        const factCat = await fetch('https://catfact.ninja/fact').then(res => res.json())
        return factCat.fact
    } catch (error) {
        console.log(error)
    }
}