  const verificacion = ()=> { 
 
    let arrayTraduccion = [];
    let arrayRandomWord = [...randomWord];
    let arrayInputWord = [...inputWord.value];
        
    // elimina input de traduccion anterior
    while (contenedorTraduccion.firstChild) {
      contenedorTraduccion.removeChild(contenedorTraduccion.firstChild)
    }
    /*if ($correcto.firstChild) {
      //eliminarNodo()
    }*/
    for (let i = 0; i < randomWord.length; i++) { 
      let traduccion = document.createElement('div'); // crea DIV 
      contenedorTraduccion.appendChild(traduccion); // aggrega DIV traduccion como hijo de contenedorTraduccion
      //console.log(arrayInputWord[i])
      
      if (arrayRandomWord[i] == arrayInputWord[i]) {
       
       let id = 'traduccion' + i; 
       traduccion.setAttribute('id',id); // agrega atributo ID
       traduccion.textContent = arrayInputWord[i]; // agrega al div traduccion el imput guardado en arrayInputWord
       
       // arrayTraduccion.push(arrayInputWord[i])
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
        arrayInputWord[i]
      }
    
    }
  // Palabra correcta
      if (inputWord.value === randomWord){
        let key = Object.keys(verbos).find(key => verbos[key][0] === randomWord);
        verbos[key][1]++;
        console.log(verbos[key][1]);
        let id = 'correcto'; 
        let correcto = document.createElement('div');
        $correcto.appendChild(correcto);
        correcto.setAttribute('class',id);
        correcto.textContent = 'Correcto';
        generatorWord();
        //$correcto.removeChild($correcto.firstChild);
      } else {
          //ayuda()
      }
  }

