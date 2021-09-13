let inputWord = document.getElementById('inputTraduccion');
const button = document.getElementById('button');
const contenedorWord = document.getElementById('word');

let randomWord;
let arrayWord;

// Envia input Word a consola
let submit = document.getElementById('submit');
  submit.addEventListener('click',()=> {
    console.log(inputWord.value);
    verificacion();
  });

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
  let palabraIngles = Object.values(verbos);   //obtiene todas las palabras en un ARRAY  
   let randomIndex = Math.floor(Math.random()*palabraIngles.length) // genera numero aleatorio de cero a total palabras 
   return palabraIngles[randomIndex][0];   //Retorna del ARRAY generado por palabrasIngles  con el inidex generado por randomIndex  
  }
  
  // Generar a WORD al presionar button y guarda actoualiza la variable randomWord 
  button.addEventListener('click', ()=> {
    
    randomWord = palabraAleatoria();
    console.log(randomWord);
    let key = Object.keys(verbos).find(key => verbos[key] === randomWord); //obtiene key del objeto Palabras
    let t = document.createTextNode(key); // crea un nodo con la palabra a traduccir
    console.log(t);
    contenedorWord.textContent = t.data; // coloca la palabra a traduccir en el DOM
  })


