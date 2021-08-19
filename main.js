
const verificacion = ()=> { 
    let arrayTraduccion = [];
    if (inputWord.value == randomWord){
     console.log('Correcto')
    }
    else {
     let arrayWord = [...randomWord];
     //console.log(arrayWord);
     let arrayInputWord = [...inputWord.value];
     //console.log(arrayInputWord);
     //console.log(arrayInputWord);
     
  for (let i = 0; i < inputWord.value.length; i++) { 
    //console.log(arrayWord[i]);
     //console.log(arrayInputWord[i]);
    if (arrayWord[i] == arrayInputWord[i]) {
      arrayTraduccion.push(arrayInputWord[i])
    }
  }
 console.log(arrayTraduccion)
    }
    
  }



