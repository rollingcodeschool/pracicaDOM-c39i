const colores = ['primary', 'secondary', 'info', 'success', 'danger','warning'];

function cambiarTitulo(){
    console.log('aqui quiero cambiar el titulo');
    //traer un elemento del html
    let tituloPrincipal = document.querySelector('h1');
    // let tituloPrincipal = document.getElementById('nombreId');
    // let tituloPrincipal = document.getElementsByClassName('container');
    // let tituloPrincipal = document.getElementsByTagName('h1');
    console.log(tituloPrincipal);
    tituloPrincipal.innerHTML = '<b>Titulo</b> modificado';
    let colorAleatorio = getRandomColor(0, colores.length-1);
    tituloPrincipal.className = `display-4 text-${colores[colorAleatorio]}`;

}

function getRandomColor(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }