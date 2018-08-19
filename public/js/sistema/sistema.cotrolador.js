
// * * * * * * * * * * inicio: botones de prueba * * * * * * * * * * * * *

// let botonIngresar =  document.querySelector('#btn_hide');
// botonIngresar.addEventListener('click',hide);

// let botonSalir = document.querySelector('#btn_show');
// botonSalir.addEventListener('click',show);

// * * * * * * * * * * fin: botones de prueba * * * * * * * * * * * * *

let boton_login = document.querySelector('#btn_login');
boton_login.addEventListener('click',show_section_login);

let boton_inicio_sesion = document.querySelector('#btn_inicio_sesion');
boton_inicio_sesion.addEventListener('click',hide_section_login);

let boton_register = document.querySelector('#btn_register');
boton_register.addEventListener('click',show_section_cliente_registro);

let boton_cliente_registro = document.querySelector('#btn_registrar_cliente');
boton_cliente_registro.addEventListener('click',hide_section_cliente_registro);

// * * * * * * * * * * inicio: funciones de prueba * * * * * * * * * * * * *
// function hide(){
//       // para que el contenedor principal se mueva según se muevan las barras del menú
//       let contenedorPrincipal = document.querySelector('#section_cliente_registro');

//       if (contenedorPrincipal != undefined) {
//           contenedorPrincipal.classList.add('ocultar'); // * *  *probar con hasClass * * *
//         //   contenedorPrincipal.classList.add('ocultar');
//         botonIngresar.classList.add('ocultar');  
//         botonSalir.classList.remove('ocultar'); 
//       }
// }
// function show(){
//     // para que el contenedor principal se mueva según se muevan las barras del menú
//     let contenedorPrincipal = document.querySelector('#section_cliente_registro');

//     if (contenedorPrincipal != undefined) {
//         contenedorPrincipal.classList.remove('ocultar'); // * *  *probar con hasClass * * *
//       //   contenedorPrincipal.classList.add('ocultar');
//       botonIngresar.classList.remove('ocultar');  
//       botonSalir.classList.add('ocultar'); 
//     }
// }
// * * * * * * * * * * fin: funciones de prueba * * * * * * * * * * * * *

function show_section_login(){

  let contenedor = document.querySelector('#section_login');
  let contenedor2 = document.querySelector('#section_cliente_registro');
  

  if (contenedor != undefined) {
      contenedor.classList.remove('ocultar');
      contenedor2.classList.add('ocultar');   
      boton_login.classList.add('ocultar'); 
      boton_register.classList.remove('ocultar'); 
  }
}

function hide_section_login(){

  let contenedor = document.querySelector('#section_login');

  if (contenedor != undefined) {
      contenedor.classList.add('ocultar');
      boton_login.classList.remove('ocultar'); 
  }
}

function show_section_cliente_registro(){

  let contenedor = document.querySelector('#section_cliente_registro');
  let contenedor2 = document.querySelector('#section_login');

  if (contenedor != undefined) {
      contenedor.classList.remove('ocultar');  
      contenedor2.classList.add('ocultar'); 
      boton_register.classList.add('ocultar'); 
      boton_login.classList.remove('ocultar'); 
  }
}

function hide_section_cliente_registro(){

  let contenedor = document.querySelector('#section_cliente_registro');

  if (contenedor != undefined) {
      // contenedor.classList.add('ocultar');      * * * lo desactive mientras pruebo el registro * * *
      boton_register.classList.remove('ocultar'); 
  }
}








	