import * as defineColors from "./defineColors.js"

const collectionID = 9468595


const changeColors = (background, foreground, backgroundImage, shadowColor) => {
    defineColors.defineColorOfCalculator(background, shadowColor)
    defineColors.defineColorOfNumbers(background, foreground)
    defineColors.defineColorOfOperators(background, foreground)
    defineColors.defineColorOfOutput(background, foreground)
    
    document.body.style.backgroundImage = `url(${backgroundImage})`
}

const changeTheme = (collectionID) => {
    fetch(`https://source.unsplash.com/collection/${collectionID}/`).then((request) => {
        const colorThief = new ColorThief()
        const image = new Image()

        image.src = request.url
        image.crossOrigin = "{anonymous}"

        image.onload = () => {
            const imagePalette = colorThief.getPalette(image, 3)

            const background = imagePalette[0]
            const foreground = imagePalette[1]
            const shadowColor = imagePalette[2]

            changeColors(background, foreground, request.url, shadowColor)
        }

    })
}


changeTheme(collectionID)