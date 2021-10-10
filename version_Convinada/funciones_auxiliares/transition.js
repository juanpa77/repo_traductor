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