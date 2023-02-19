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


changeTheme(collectionID);

let allButtons = [];

document.querySelectorAll('.btn').forEach((elemento) => {
  allButtons.push(elemento)
});

let igual = allButtons.pop();

let output_content = document.querySelector('#output-content');

let operacoes = "";

  allButtons.forEach((el) => { // percorrer todos os botões
    el.addEventListener('click', ()=> { // Toda vez que algum botão for clicado disparar o seguinte evento:
     operacoes += el.innerText;
     output_content.innerText = operacoes; // escrever no parágrafo responsável por mostrar os números
    })
  })

output_content .addEventListener('click',() => {// evento TEMPORARIO feito para limpar o resultado das operações ao clicar no parágrafo responsável por mostrar os números
      operacoes = "";
      output_content.innerText = '';
  })

igual.addEventListener('click',()=> {
  try { // tente
    operacoes = eval(operacoes.replace(/x/g,' * ')); // executar a operação substituindo o x por * (operador de multiplicação do js)
  output_content.innerText = operacoes; 
  } catch(err){
    operacoes = "";
      output_content.innerText = 'Error';
  }
})

