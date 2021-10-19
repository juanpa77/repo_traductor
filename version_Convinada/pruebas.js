import { multiOption } from "./multiOption.js";
import { TraduceWord } from "./trauceLaPalabra.js";
import { Transition } from "./funciones_auxiliares/transition.js";

export class User {

    constructor() {
        this.arrayWordInglish = [];
        this.transition = new  Transition();
        this.multiOption = new multiOption();
        this.traduceWord = new TraduceWord();
        this.$layout = document.getElementById('layout'); 
        this.buttonIniciar = document.getElementById("iniciar");
    }

    iniciar = ()=>{
        this.multiOption.structureMultiOption();
        // generatorWord();
        this.multiOption.option();
        this.$layout.removeChild(this.buttonIniciar);
     }
     
     verificaccionMultiOption = (wordCorrecta)=>{
        console.log(this.arrayWordInglish);
      if (this.arrayWordInglish[0] == wordCorrecta) {
         console.log("correcto");
         console.log(arrayWordCorrecta);
         if (arrayWordCorrecta.length == aciertos) {
            this.transition.iniciarTransition(aciertos, arrayWordCorrecta)
         }else{
           generatorWord();
           option();
         }
   
      }else{
         console.log("incorrecto")
      }
   }
}


generatorWord = ()=>{
   const boxWord = document.getElementById('word');
   let randomWord = palabraAleatoria();
   user.arrayWordInglish.push(randomWord);
   console.log(arrayWordInglish);
   let key = Object.keys(verbos).find(key => verbos[key][0] === randomWord); //obtiene key del objeto Palabras(palabra en español)
   let t = document.createTextNode(key); // crea un nodo con la palabra a traduccir
   console.log(t);
   boxWord.textContent = t.data; // coloca la palabra a traduccir en el DOM
   let wordEspañol = t.data;
   arrayWordCorrecta.push(wordEspañol);
   console.log(arrayWordCorrecta);
}


const structureMultiOption = ()=>{
   const $templateMultiOption = document.getElementById('multiOption');
   let template = $templateMultiOption.content.cloneNode(true);
   $layout.appendChild(template);   
}

const palabraAleatoria = ()=> {
   let palabraIngles = Object.values(verbos); //obtiene el total  de array de palabras y puntuacion en un ARRAY  
   let randomIndex = Math.floor(Math.random()*palabraIngles.length) // genera numero aleatorio de cero a total palabras 
   return palabraIngles[randomIndex][0];//Retorna del ARRAY generado por palabrasIngles  con el inidex generado por randomIndex 
}
const iniciar = ()=>{
   structureMultiOption();
   // generatorWord();
   option();
   $layout.removeChild(buttonIniciar);
}
