let $layout = document.getElementById('layout');
const buttonGeneradorWord = document.getElementById('button');
const buttonIniciar = document.getElementById("iniciar");
const rootStyles = document.documentElement.style;
const $toggleColors = document.getElementById('toggle-colors');

let randomWord;
let arrayRandomWord;
let arrayWordCorrecta = [];

let aciertos = 1;

const numerosAleatorios = (min, max)=> {
   return Math.round(Math.random() * (max - min) + min);
}
   
 const palabraAleatoria = ()=> {
    let palabraIngles = Object.values(verbos); //obtiene el total  de array de palabras y puntuacion en un ARRAY  
    let randomIndex = Math.floor(Math.random()*palabraIngles.length) // genera numero aleatorio de cero a total palabras 
    return palabraIngles[randomIndex][0];//Retorna del ARRAY generado por palabrasIngles  con el inidex generado por randomIndex 
 }
  
  const generatorWord = ()=>{
   const boxWord = document.getElementById('word');
   randomWord = palabraAleatoria();
   console.log(randomWord);
   let key = Object.keys(verbos).find(key => verbos[key][0] === randomWord); //obtiene key del objeto Palabras
   let t = document.createTextNode(key); // crea un nodo con la palabra a traduccir
   console.log(t);
   boxWord.textContent = t.data; // coloca la palabra a traduccir en el DOM
   wordEspañol = t.data;
   arrayWordCorrecta.push(wordEspañol);
   console.log(arrayWordCorrecta);
 }
const clearDom = ()=>{
   while ($layout.firstChild) {
      $layout.removeChild($layout.firstChild)
   }
}

const iniciar = ()=>{
   structureMultiOption();
   generatorWord();
   option();
   $layout.removeChild(buttonIniciar);
}

const transition= (aciertos)=>{
   if (arrayWordCorrecta.length == aciertos) {
      clearDom();
      generatorStructureTranslatorWord();
      insertWord(selectArrayWord);
   }
 }

 document.addEventListener("click", (e)=> {
    let wordCorrecta = e.target.textContent;
      /* if (e.target.matches("#iniciar")){
         iniciar();
      } */
      if (e.target.id=="option1") {
         verificaccionMultiOption(wordCorrecta);
      }
      if (e.target.id=="option2") {
         verificaccionMultiOption(wordCorrecta);
      }
      if (e.target.id=="option3") {
         verificaccionMultiOption(wordCorrecta);
      }
      if (e.target.id=="option4") {
         verificaccionMultiOption(wordCorrecta);
      }

      if (e.target.matches("#submit")) {
         verificacion();
      }
   })
   
$toggleColors.addEventListener("click", (e)=>{
      rootStyles.setProperty("--primary-color", e.target.dataset.color);
})

iniciar()