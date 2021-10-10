let $layout = document.getElementById('layout');

export const clearDom = ()=>{
    while ($layout.firstChild) {
       $layout.removeChild($layout.firstChild)
    }
 }