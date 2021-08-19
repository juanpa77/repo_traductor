let inputWord = document.getElementById('inputTraduccion');
const button = document.getElementById('button');
const contenedorWord = document.getElementById('word');

// Envia input Word a consola
let submit = document.getElementById('submit');
submit.addEventListener('click',()=> {
  console.log(inputWord.value);
  verificacion();
});

let randomWord;
let arrayWord;
let presseLetter;
let selectorIndex = 0;
let keyPressed = false;
//let selector = arrayWord[selectorIndex];

// previene recargar la pagina al precionar enter
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
    if(e.keyCode == 13) {
      e.preventDefault();
    }
  }))
});

// retorna palabra aleatoria
const palabraAleatoria = ()=> {
  let palabraIngles = Object.values(palabras);   //obtiene todas las palabras en un ARRAY  
   let randomIndex = Math.floor(Math.random()*palabraIngles.length) // genera numero aleatorio de cero a total palabras 
   return palabraIngles[randomIndex];   //Retorna del ARRAY generado por palabrasIngles  con el inidex generado por randomIndex  
  }
  
  // Generar a WORD al presionar button y guarda actoualiza la variable randomWord 
  button.addEventListener('click', ()=> {
    
    //if(contenedorWord.hasChildNodes){contenedorWord.parentNode.removeChild(contenedorWord.lastChild)};
    randomWord = palabraAleatoria();
    console.log(randomWord);
    let key = Object.keys(palabras).find(key => palabras[key] === randomWord);
    let t = document.createTextNode(key);
    console.log(t);
    contenedorWord.textContent = t.data;
    //console.log(key);

  //  arrayWord = Array.from(randomWord);
  //  console.log(Array.from(arrayWord))
  })


