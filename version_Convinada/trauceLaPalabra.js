const $templateTranslatorWord = document.getElementById('templateTranslateWord');

const generatorStructureTranslatorWord = ()=>{
    let template = $templateTranslatorWord.content.cloneNode(true);
    $layout.appendChild(template);
    
 } 

 const insertWord = (selectArrayWord)=>{
    let boxWord = document.getElementById("word");
    let keyWord = arrayWordCorrecta[selectArrayWord];
    boxWord.textContent = keyWord;
 }