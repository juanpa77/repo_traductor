export class TraduceWord {
    constructor() {
        this.selectArrayWord = 0;
    }
    
    verificacion = ()=> { 
        const contenedorTraduccion = document.getElementById("traduccion");
        const $correcto = document.getElementById("correcto");
        let inputWord = document.getElementById('inputTraduccion');
        let wordTraduccion = arrayWordCorrecta[this.selectArrayWord];
    
        let wordtraduccioningles = verbos[wordTraduccion][0];
        let arrayTraduccion = [];
        let arrayRandomWord = [...wordtraduccioningles];
        let arrayInputWord = [...inputWord.value];
        console.log(arrayRandomWord);
        console.log(arrayInputWord);
            
        // elimina input de traduccion anterior
        while (contenedorTraduccion.firstChild) {
          contenedorTraduccion.removeChild(contenedorTraduccion.firstChild)
        }
       
        for (let i = 0; i < wordtraduccioningles.length; i++) { 
          let traduccion = document.createElement('div'); // crea DIV 
          contenedorTraduccion.appendChild(traduccion); // aggrega DIV traduccion como hijo de contenedorTraduccion
          
          if (arrayRandomWord[i] == arrayInputWord[i]) {
           let id = 'traduccion' + i; 
           traduccion.setAttribute('id',id); // agrega atributo ID
           traduccion.textContent = arrayInputWord[i]; // agrega al div traduccion el imput guardado en arrayInputWord
           arrayTraduccion.push(arrayInputWord[i])
          }
          else if (arrayInputWord[i] == undefined) {
           let id = 'incorrectoFaltaLetra'; 
           traduccion.setAttribute('class',id); // agrega atributo ID
           traduccion.textContent ='_';
                  
          }else{
            let id = 'incorrecto';
            traduccion.setAttribute('class',id);
            traduccion.textContent = arrayInputWord[i];
            arrayTraduccion.push(arrayInputWord[i]);
            arrayInputWord[i];
          }
        
        }
      // Palabra correcta
          if (inputWord.value == wordtraduccioningles) {
            let id = 'correcto'; 
            let correcto = document.createElement('div');
            $correcto.appendChild(correcto);
            correcto.setAttribute('class',id);
            correcto.textContent = 'Correcto';
            this.selectArrayWord ++;
            insertWord(this.selectArrayWord);
          } 

          if (this.selectArrayWord >= arrayWordCorrecta.length) {
            clearDom();
            arrayWordCorrecta.length = 0;
            this.selectArrayWord = 0;
            iniciar();
          }
      }
    
    insertWord = (selectArrayWord)=>{
        let boxWord = document.getElementById("word");
        let keyWord = arrayWordCorrecta[selectArrayWord];
        boxWord.textContent = keyWord;
     }

}



const insertWord = (selectArrayWord)=>{
    let boxWord = document.getElementById("word");
    let keyWord = arrayWordCorrecta[selectArrayWord];
    boxWord.textContent = keyWord;
 }