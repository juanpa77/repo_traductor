
export class Words {
    constructor() {
        this.wordTranslate = [
            {aceptar:['accept',0]},
            {salir_marcharse:['leave',0]},
            {preguntar:['ask',0]},
            {escuchar:['listen',0]}
        ]
        // this.arrayWordEspañol = Object.keys(verbos);
        // this.arrayWordIngles = Object.values(verbos);
    }

    arrayWord(numberOfWord) {
        let arrayWord = Array(numberOfWord);
        for (let i of arrayWord) {
            arrayWord.push("aa")
        }
        console.log(arrayWord)
    }
 }