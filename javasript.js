let inputWord = document.getElementById('inputTraduccion');
const buttonGeneradorWord = document.getElementById('button');
const boxWord = document.getElementById('word');

let randomWord;
let arrayRandomWord;

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
  let palabraIngles = Object.values(verbos); //obtiene el total  de array de palabras y puntuacion en un ARRAY  
   let randomIndex = Math.floor(Math.random()*palabraIngles.length) // genera numero aleatorio de cero a total palabras 
   return palabraIngles[randomIndex][0];//Retorna del ARRAY generado por palabrasIngles  con el inidex generado por randomIndex 
  }
  
  // Generar a WORD al presionar buttonGeneradorWord y guarda actoualiza la variable randomWord 
  buttonGeneradorWord.addEventListener('click', ()=> {
    
    randomWord = palabraAleatoria();
    console.log(randomWord);
    let key = Object.keys(verbos).find(key => verbos[key][0] === randomWord); //obtiene key del objeto Palabras
    let t = document.createTextNode(key); // crea un nodo con la palabra a traduccir
    console.log(t);
    boxWord.textContent = t.data; // coloca la palabra a traduccir en el DOM
  })