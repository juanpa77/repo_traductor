  class User {
    constructor(name) {
        this.name = name;
        //this.pasword = pasword;
        this.score = {};
        this.randomWord = new WriteTranslation();
      }
    palabraAleatoria () {
      let palabraIngles = Object.values(verbos); //obtiene el total  de array de palabras y puntuacion en un ARRAY  
      let randomIndex = Math.floor(Math.random()*palabraIngles.length) // genera numero aleatorio de cero a total palabras 
      return palabraIngles[randomIndex][0];//Retorna del ARRAY generado por palabrasIngles  con el inidex generado por randomIndex 
    }

  }

// Ejecuta verificacion al hacer click en enviar (submit)
  let submit = document.getElementById('submit');
  submit.addEventListener('click',()=> {
    console.log(inputWord.value);
    verificacion();
  });
  
  class WriteTranslation{
    constructor(){
      this.randomWord;
    } 

    generatorWord () {
      this.randomWord = palabraAleatoria();
      console.log(randomWord);
      let wordEspañol = Object.keys(verbos).find(wordEspañol => verbos[wordEspañol][0] === randomWord); //obtiene key del objeto Palabras
      let contenedorWordEspañol = document.createTextNode(wordEspañol); // crea un nodo con la palabra a traduccir
      console.log(contenedorWordEspañol);
      boxWord.textContent = contenedorWordEspañol.data; // coloca la palabra a traduccir en el DOM
      }
    }

    const User1 = new User('juan');
    console.log(User1);