import { transition } from "./funciones_auxiliares/transition.js";

const inciar = document.getElementById('iniciar');
let $layout = document.getElementById('layout');
let arrayWordCorrecta = [];
let arrayWordInglish = [];
let aciertos = 1;

const palabraAleatoria = ()=> {
   let palabraIngles = Object.values(verbos); //obtiene el total  de array de palabras y puntuacion en un ARRAY  
   let randomIndex = Math.floor(Math.random()*palabraIngles.length) // genera numero aleatorio de cero a total palabras 
   return palabraIngles[randomIndex][0];//Retorna del ARRAY generado por palabrasIngles  con el inidex generado por randomIndex 
}
 
const generatorWord = ()=>{
   const boxWord = document.getElementById('word');
   let randomWord = palabraAleatoria();
   arrayWordInglish.push(randomWord);
   console.log(arrayWordInglish);
   let key = Object.keys(verbos).find(key => verbos[key][0] === randomWord); //obtiene key del objeto Palabras(palabra en español)
   let t = document.createTextNode(key); // crea un nodo con la palabra a traduccir
   console.log(t);
   boxWord.textContent = t.data; // coloca la palabra a traduccir en el DOM
   let wordEspañol = t.data;
   arrayWordCorrecta.push(wordEspañol);
   console.log(arrayWordCorrecta);
 }

const numerosAleatorios = (min, max)=> {
   return Math.round(Math.random() * (max - min) + min);
}

export const structureMultiOption = ()=>{
   const $templateMultiOption = document.getElementById('multiOption');
   let template = $templateMultiOption.content.cloneNode(true);
   $layout.appendChild(template);   
}

export const option = ()=>{
   let randomWord;
   let option1 = document.getElementById('option1');
   let option2 = document.getElementById("option2");
   let option3 = document.getElementById("option3");
   let option4 = document.getElementById("option4");

   let arr = [option1,option2,option3,option4];
   let aleatorio = numerosAleatorios(0,4);
   generatorWord();
   let optionCorrecta = arr.splice(aleatorio,1);
   optionCorrecta[0].textContent = arrayWordInglish[0];

   arr.forEach(e=> e.textContent = palabraAleatoria())
}


export const verificaccionMultiOption = (wordCorrecta)=>{
   if (arrayWordInglish[0] == wordCorrecta) {
      console.log("correcto");
      console.log(arrayWordCorrecta);
      if (arrayWordCorrecta.length == aciertos) {
         transition(aciertos, arrayWordCorrecta)
      }else{
        generatorWord();
        option();
      }

   }else{
      console.log("incorrecto")
   }
}
    