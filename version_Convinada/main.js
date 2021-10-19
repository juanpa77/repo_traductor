import { Words } from "./words.js";
import { screenMultiOption } from "./screenMultiOption.js";
import { MultiOption } from "./multiOption.js";

let $layout = document.getElementById('layout');
const buttonGeneradorWord = document.getElementById('button');
const buttonIniciar = document.getElementById("iniciar");
const rootStyles = document.documentElement.style;
const $toggleColors = document.getElementById('toggle-colors');

class App {

   constructor() {
      this.countWord = 2;
      this.wordCorrect = new Words;
      this.screenMultiOption = new screenMultiOption;
      this.multioption = new MultiOption;
   }

   iniciar() {
      // console.log(this.wordCorrect.arrayWordEspañol);
      // console.log(this.wordCorrect.arrayWordIngles);
      // let wordEspanol = Object.keys(this.wordCorrect.wordTranslate[0])[0];
      // let wordIngles = this.wordCorrect.wordTranslate[0][wordEspanol][0];

      this.wordCorrect.arrayWord(3);

      this.screenMultiOption.structureMultiOption();
      this.multioption.option(wordIngles);
      this.multioption.wordTranslate(wordEspanol);
   }

}

let iniciarApp = new App();
iniciarApp.iniciar();


 document.addEventListener("click", (e)=> {
    let wordCorrecta = e.target.id;
      /* if (e.target.matches("#iniciar")){
         iniciar();
      } */
      if (e.target.id=="option1") {
         iniciarApp.multioption.verificaccionMultiOption(wordCorrecta);
      }
      if (e.target.id=="option2") {
         iniciarApp.multioption.verificaccionMultiOption(wordCorrecta);
      }
      if (e.target.id=="option3") {
         iniciarApp.multioption.verificaccionMultiOption(wordCorrecta);
      }
      if (e.target.id=="option4") {
         iniciarApp.multioption.verificaccionMultiOption(wordCorrecta);
      }

      if (e.target.matches("#submit")) {
         verificacion();
      }
   })
   
$toggleColors.addEventListener("click", (e)=>{
      rootStyles.setProperty("--primary-color", e.target.dataset.color);
})
