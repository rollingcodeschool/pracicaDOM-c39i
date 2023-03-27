function cambiarTitulo(){
    console.log('aqui quiero cambiar el titulo');
    //traer un elemento del html
    let tituloPrincipal = document.querySelector('h1');
    // let tituloPrincipal = document.getElementById('nombreId');
    // let tituloPrincipal = document.getElementsByClassName('container');
    // let tituloPrincipal = document.getElementsByTagName('h1');
    console.log(tituloPrincipal);
    tituloPrincipal.className = 'display-4 text-primary';
    tituloPrincipal.innerHTML = '<b>Titulo</b> modificado';
}