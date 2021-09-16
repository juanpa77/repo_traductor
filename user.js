class User {
    constructor(name, pasword,id,) {
        this.name = name;
        this.pasword = pasword;
        this.id = id;
        this.score = {};
    }


    
}


// Ejecuta verificacion al hacer click en enviar (submit)
let submit = document.getElementById('submit');
  submit.addEventListener('click',()=> {
    console.log(inputWord.value);
    verificacion();
  });
