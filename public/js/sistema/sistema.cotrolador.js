
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

let boton_lista_cliente = document.querySelector('#btn_lista_cliente');
boton_lista_cliente.addEventListener('click',hide_section_cliente_registro);

let boton_registrar_hotel_administrador = document.querySelector('#btn_hotel_admin');
boton_registrar_hotel_administrador.addEventListener('click',show_section_hotel_registro);

let boton_hotel_registro = document.querySelector('#btn_registrar_hotel');
boton_hotel_registro.addEventListener('click',hide_section_hotel_registro);

let boton_lista_hotel = document.querySelector('#btn_lista_hotel');
boton_lista_hotel.addEventListener('click',hide_section_hotel_registro);







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
  let contenedor3 = document.querySelector('#section_cliente_lista');
  let contenedor4 = document.querySelector('#section_hotel_registro');
  let contenedor5 = document.querySelector('#section_hotel_lista');
  

  if (contenedor != undefined) {
      contenedor.classList.remove('ocultar');
      contenedor2.classList.add('ocultar'); 
      contenedor3.classList.add('ocultar');
      contenedor4.classList.add('ocultar');
      contenedor5.classList.add('ocultar');  
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
  let contenedor2 = document.querySelector('#section_cliente_lista');
  let contenedor3 = document.querySelector('#section_hotel_registro');
  let contenedor4 = document.querySelector('#section_hotel_lista');
  let contenedor5 = document.querySelector('#section_login');

  if (contenedor != undefined) {
      contenedor.classList.remove('ocultar');
      contenedor2.classList.add('ocultar'); 
      contenedor3.classList.add('ocultar');  
      contenedor4.classList.add('ocultar'); 
      contenedor5.classList.add('ocultar'); 
      boton_register.classList.add('ocultar'); 
      boton_login.classList.remove('ocultar'); 
  }
}

function hide_section_cliente_registro(){

  let contenedor = document.querySelector('#section_cliente_registro');
  let contenedor2 = document.querySelector('#section_cliente_lista');
  let contenedor3 = document.querySelector('#section_hotel_registro');
  let contenedor4 = document.querySelector('#section_hotel_lista');
  let contenedor5 = document.querySelector('#section_login');

  if (contenedor != undefined) {
      contenedor.classList.add('ocultar');   
      contenedor2.classList.remove('ocultar');   
      contenedor3.classList.add('ocultar'); 
      contenedor4.classList.add('ocultar'); 
      contenedor5.classList.add('ocultar');    
      boton_register.classList.remove('ocultar'); 
  }
}


function show_section_hotel_registro(){

  let contenedor = document.querySelector('#section_hotel_registro');
  let contenedor2 = document.querySelector('#section_hotel_lista');
  let contenedor3 = document.querySelector('#section_cliente_registro');
  let contenedor4 = document.querySelector('#section_cliente_lista');
  let contenedor5 = document.querySelector('#section_login');

  if (contenedor != undefined) {
      contenedor.classList.remove('ocultar');  
      contenedor2.classList.add('ocultar');  
      contenedor3.classList.add('ocultar'); 
      contenedor4.classList.add('ocultar'); 
      contenedor5.classList.add('ocultar'); 

      boton_login.classList.remove('ocultar'); 
  }
}
function hide_section_hotel_registro(){

  let contenedor = document.querySelector('#section_hotel_registro');
  let contenedor2 = document.querySelector('#section_hotel_lista');
  let contenedor3 = document.querySelector('#section_cliente_registro');
  let contenedor4 = document.querySelector('#section_cliente_lista');
  let contenedor5 = document.querySelector('#section_login');
  
  if (contenedor != undefined) {
      contenedor.classList.add('ocultar');   
      contenedor2.classList.remove('ocultar'); 
      contenedor3.classList.add('ocultar');  
      contenedor4.classList.add('ocultar'); 
      contenedor5.classList.add('ocultar'); 
  }
}




	