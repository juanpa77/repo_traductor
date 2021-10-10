import { verificaccionMultiOption, structureMultiOption, option } from "./multiOption.js";

let $layout = document.getElementById('layout');
const buttonGeneradorWord = document.getElementById('button');
const buttonIniciar = document.getElementById("iniciar");
const rootStyles = document.documentElement.style;
const $toggleColors = document.getElementById('toggle-colors');

let randomWord;
let arrayRandomWord;

const iniciar = ()=>{
   structureMultiOption();
   // generatorWord();
   option();
   $layout.removeChild(buttonIniciar);
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