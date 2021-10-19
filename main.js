const contenedorTraduccion = document.getElementById("traduccion");
const $correcto = document.getElementById("correcto");
let inputWord = document.getElementById('inputTraduccion');
const buttonGeneradorWord = document.getElementById('button');
const boxWord = document.getElementById('word');

let randomWord;
let arrayRandomWord;
   

// Resolucion de equivocacion 
/*const ayuda = ()=>{
  // mostrar una letra en funcion de las letras ingresadas
  for (let i = 0; i < randomWord.length; i++) {
    if (arrayRandomWord[i] != arrayInputWord[i]) {

    }
  }
}  */
// Agregar palabras aprendidas

const wordAprendida = ()=> {
  console.log(verbos.enseñar[1])
}

  // retorna palabra aleatoria en Ingles
  const palabraAleatoria = ()=> {
    let palabraIngles = Object.values(verbos); //obtiene el total  de array de palabras y puntuacion en un ARRAY  
    let randomIndex = Math.floor(Math.random()*palabraIngles.length) // genera numero aleatorio de cero a total palabras 
    return palabraIngles[randomIndex][0];//Retorna del ARRAY generado por palabrasIngles  con el inidex generado por randomIndex 
  }
  
  const generatorWord = ()=>{
    randomWord = palabraAleatoria();
    console.log(randomWord);
    let key = Object.keys(verbos).find(key => verbos[key][0] === randomWord); //obtiene key del objeto Palabras
    let t = document.createTextNode(key); // crea un nodo con la palabra a traduccir
    console.log(t);
    boxWord.textContent = t.data; // coloca la palabra a traduccir en el DOM
  }
  
  // Generar a WORD al presionar buttonGeneradorWord y guarda actoualiza la variable randomWord 
    // buttonGeneradorWord.addEventListener('click',generatorWord)
