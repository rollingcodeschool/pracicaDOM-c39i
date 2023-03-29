let numeroMagico = 0;
let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', adivinar);

// 1 a 50
function getRandom() {
    numeroMagico = Math.floor(Math.random() * (50 - 1) + 1);
    console.log(numeroMagico);
    return numeroMagico
  }

function adivinar(e){
    e.preventDefault();
    console.log('desde la funcion adivinar');
    console.log(e);

    let input = document.getElementsByTagName('input')[1]
    console.log(input)
    let dato = input.value;
    console.log(typeof dato)
    console.log(dato)

    //comparar el dato con el numeroMagico

    //reseteo el dato limpiando el input o con el reset de los formularios
    // input.value = '';
    formulario.reset()
}

