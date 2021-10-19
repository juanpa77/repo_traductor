
export class screenMultiOption {
    constructor () {

    }

    structureMultiOption = ()=>{
        let $layout = document.getElementById('layout');
        const $templateMultiOption = document.getElementById('multiOption');
        let template = $templateMultiOption.content.cloneNode(true);
        $layout.appendChild(template);
    }
     
}