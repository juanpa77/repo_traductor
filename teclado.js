let teclado = {};

agregarEvento(document,"keydown",(e) => teclado[e.keyCode] = true);
agregarEvento(document,"keyup",(e) => teclado[e.keyCode] = false);


function agregarEvento(elemnto,nombreEvento,funcion) {
    elemnto.addEventListener(nombreEvento,funcion,false)
}