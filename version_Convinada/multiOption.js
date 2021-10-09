const $templateMultiOption = document.getElementById('multiOption');
const inciar = document.getElementById('iniciar');

const structureMultiOption = ()=>{
   let template = $templateMultiOption.content.cloneNode(true);
   $layout.appendChild(template);   
}

const option = ()=>{
   let option1 = document.getElementById('option1');
   let option2 = document.getElementById("option2");
   let option3 = document.getElementById("option3");
   let option4 = document.getElementById("option4");

   let arr = [option1,option2,option3,option4];
   let aleatorio = numerosAleatorios(0,4);

   let optionCorrecta = arr.splice(aleatorio,1);
   optionCorrecta[0].textContent = randomWord;

   arr.forEach(e=> e.textContent = palabraAleatoria())
}


const verificaccionMultiOption = (wordCorrecta)=>{
   if (randomWord == wordCorrecta) {
      console.log("correcto");
      console.log(arrayWordCorrecta);
      if (arrayWordCorrecta.length == aciertos) {
         transition(aciertos)
      }else{
        generatorWord();
        option();
      }

   }else{
      console.log("incorrecto")
   }
}
    