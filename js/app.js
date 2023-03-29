const colores = ['primary', 'secondary', 'info', 'success', 'danger','warning'];
let btnVerMas =  document.getElementById('btnVerMas');
// agrega un manejador de eventos
btnVerMas.addEventListener('click', verMas);


function cambiarTitulo(){
    console.log('aqui quiero cambiar el titulo');
    //traer un elemento del html
    let tituloPrincipal = document.querySelector('h1');
    // let tituloPrincipal = document.getElementById('nombreId');
    // let tituloPrincipal = document.getElementsByClassName('container');
    // let tituloPrincipal = document.getElementsByTagName('h1');
    console.log(tituloPrincipal.innerText);
    tituloPrincipal.innerHTML = '<b>Titulo</b> modificado';
    let colorAleatorio = getRandomColor(0, colores.length-1);
    tituloPrincipal.className = `display-4 text-${colores[colorAleatorio]}`;

}

function getRandomColor(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

function verMas(){
    console.log('desde la funcion ver mas');
    //buscar el nodo padre
    const seccionNoticia = document.getElementById('seccionNoticia');
    //crear un nuevo elemento
    let parrafoNuevo = document.createElement('p');
    parrafoNuevo.innerHTML = `<b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. Aliquid tenetur aperiam fugiat natus quaerat consequatur laudantium temporibus reiciendis odio? Quo possimus neque minus reprehenderit inventore, repudiandae sequi sit delectus quis?`
    parrafoNuevo.className = 'lead';
    //insertar el nodo en el DOM
    // seccionNoticia.appendChild(parrafoNuevo);// agrega al final
    // seccionNoticia.prepend(parrafoNuevo); //agrega al principio
    seccionNoticia.insertBefore(parrafoNuevo, btnVerMas);
}