class MemorizeWord  {
   constructor() {
      this.word = new Word();
   }
}

export class MultiOption {

   constructor (){
      this.optionCorrecta;
   }

   wordTranslate(correctChoice) {
      let $contentTranslate = document.getElementById("word");
      $contentTranslate.textContent = correctChoice;
   }

   palabraAleatoria = ()=> {
      let palabraIngles = Object.values(verbos); //obtiene el total  de array de palabras y puntuacion en un ARRAY  
      let randomIndex = Math.floor(Math.random()*palabraIngles.length) // genera numero aleatorio de cero a total palabras 
      return palabraIngles[randomIndex][0];//Retorna del ARRAY generado por palabrasIngles  con el inidex generado por randomIndex 
   }
   
   numerosAleatorios = (min, max)=> {
      return Math.round(Math.random() * (max - min) + min);
   }

   option = (correctChoice)=>{
      let option1 = document.getElementById('option1');
      let option2 = document.getElementById("option2");
      let option3 = document.getElementById("option3");
      let option4 = document.getElementById("option4");
   
      let arr = [option1,option2,option3,option4];
      let aleatorio = this.numerosAleatorios(0,4);
      this.optionCorrecta = arr.splice(aleatorio,1);
      this.optionCorrecta[0].textContent = correctChoice;
      arr.forEach(e=> e.textContent = this.palabraAleatoria())
   }
   
   verificaccionMultiOption = (correctChoice)=>{
      if (this.optionCorrecta[0].id == correctChoice) {
         console.log("correcto");
         console.log(correctChoice);
      }
   }
}


