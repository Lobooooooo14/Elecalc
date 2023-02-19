let defineColors = {

defineColorOfNumbers: function defineColorOfNumbers(background, foreground) {
    const btns_operators = document.getElementsByClassName("btn number")

    for (let i = 0; i < btns_operators.length; i++) {
        const element = btns_operators.item(i)

        const background_rgb = `rgb(${background[0]}, ${background[1]}, ${background[2]})`
        const foreground_rgb = `rgb(${foreground[0]}, ${foreground[1]}, ${foreground[2]})`
        
        element.style.background = background_rgb
        element.style.color = foreground_rgb

        element.addEventListener('mouseover', () => {
            element.style.background = foreground_rgb
            element.style.color = background_rgb
          })

        element.addEventListener('mouseout', () => {
            element.style.background = background_rgb
            element.style.color = foreground_rgb
          })
    }
},

defineColorOfOperators: function defineColorOfOperators(background, foreground) {
    const btns_operators = document.getElementsByClassName("btn operator")

    for (let i = 0; i < btns_operators.length; i++) {
        const element = btns_operators.item(i)
        
        const background_rgb = `rgb(${background[0]}, ${background[1]}, ${background[2]})`
        const foreground_rgb = `rgb(${foreground[0]}, ${foreground[1]}, ${foreground[2]})`
        
        element.style.background = foreground_rgb
        element.style.color = background_rgb

        element.addEventListener('mouseover', () => {
            element.style.background = background_rgb
            element.style.color = foreground_rgb
          })

        element.addEventListener('mouseout', () => {
            element.style.background = foreground_rgb
            element.style.color = background_rgb
          })
    }
},

 defineColorOfOutput: function defineColorOfOutput(background, foreground) {
    const output = document.getElementById("output")

    const background_rgb = `rgb(${background[0]}, ${background[1]}, ${background[2]})`
    const foreground_rgb = `rgb(${foreground[0]}, ${foreground[1]}, ${foreground[2]})`
        
    output.style.background = background_rgb
    output.style.color = foreground_rgb
},

defineColorOfCalculator: function defineColorOfCalculator(background, shadow) {
    const calculator = document.getElementById("calculator")

    const background_rgb = `rgb(${background[0]}, ${background[1]}, ${background[2]}, 30%)`
        
    calculator.style.background = background_rgb
},
}