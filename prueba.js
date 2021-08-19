
//let submit = document.getElementById('submit');
//submit.addEventListener('click',()=> console.log(inputPalabra)

function prueba() {
    console.log(inputPalabra)
}
/*document.addEventListener("keypress", function (event) {
    // let keycode = event.keyCode;
     if (!keyPressed) {
       presseLetter = event.key;
       console.log(presseLetter);   
       keyPressed = true;
      }else{
        keyPressed = false;
      };
      
     if (event.keyCode !== 8 && selectorIndex >= 1) {
       selectorIndex--
    }

    if (randomWord !== presseLetter) {
      console.log("wrong letter")
    }
    //console.log(keycode);
  },false
  );*/
    


  const verificacion = ()=> { 
    console.log(randomWord);
    console.log(inputWord);

    if (inputWord == randomWord){
     console.log('Correcto')
    }
    
  }