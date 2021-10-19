
//let submit = document.getElementById('submit');
//submit.addEventListener('click',()=> console.log(inputPalabra)

function prueba() {
    console.log(inputPalabra)
}
document.addEventListener("keypress", function (event) {
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

  
  );
    


  const verificacion = ()=> { 
    console.log(randomWord);
    console.log(inputWord);

    if (inputWord == randomWord){
     console.log('Correcto')
    }
    
  }
  let $layout = document.getElementById('layout');
const templatetranslatorWord = document.getElementById('templateTranslateWord');

 const createDiv = (contenedor, nameClass)=>{
    let div = document.createElement('div');
    contenedor.appendChild(div);
    div.className = nameClass;
    div.id = nameClass;
 }

 const createFrom = (contenedor,nameClass)=> {
    let from = document.createElement('form');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let inputButton = document.createElement('button');

    contenedor.appendChild(from);
    from.className = nameClass;
    from.id = nameClass;

    // Etiqueta label
    from.appendChild(label); 
    label.setAttribute('for', 'inputTraduccion');
    label.textContent = 'ingrese traduccion';
    
    //Input 
    from.appendChild(input);
    input.setAttribute('for', 'inputTraduccion');
    input.id = 'inputTraduccion';
    input.className = 'inputTraduccion';
    
    // Boton enviar
    from.appendChild(inputButton);
    inputButton.setAttribute('type', 'button');
    inputButton.setAttribute('value', 'submit');
    inputButton.id = 'submit';
    inputButton.textContent = 'enviar';
 }

 const createElemento =(contenedor, nameClass, element,id)=>{
    let elemento = document.createElement(element);
    contenedor.appendChild(elemento);
    elemento.className = nameClass;
    elemento.id = id;
 }
 