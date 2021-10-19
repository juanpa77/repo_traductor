import { clearDom } from "./clearDom.js";
import { variables } from "./variables.js";
const $layout = variables.$layout

export const transition= (aciertos, arrayWordCorrecta)=>{
    if (arrayWordCorrecta.length == aciertos) {
       clearDom();
       generatorStructureTranslatorWord();
       insertWord(selectArrayWord);
   }
}

export class Transition {
   constructor() {
   }

   iniciarTransition () {
      if (arrayWordCorrecta.length == aciertos) {
         this.clearDom();
         this.generatorStructureTranslatorWord();
         this.insertWord(selectArrayWord);
     }
   }
   
   clearDom = ()=>{
      while ($layout.firstChild) {
         $layout.removeChild($layout.firstChild)
      }
   }

   structureMultiOption = ()=>{
      const $templateMultiOption = document.getElementById('multiOption');
      let template = $templateMultiOption.content.cloneNode(true);
      $layout.appendChild(template);   
   }

   generatorStructureTranslatorWord = ()=>{
      const $templateTranslatorWord = document.getElementById('templateTranslateWord');
      let template = $templateTranslatorWord.content.cloneNode(true);
      $layout.appendChild(template);
   } 
   
}

const generatorStructureTranslatorWord = ()=>{
   const $templateTranslatorWord = document.getElementById('templateTranslateWord');
   let template = $templateTranslatorWord.content.cloneNode(true);
   $layout.appendChild(template);
} 

const insertWord = (selectArrayWord)=>{
   let boxWord = document.getElementById("word");
   let keyWord = arrayWordCorrecta[selectArrayWord];
   boxWord.textContent = keyWord;
}