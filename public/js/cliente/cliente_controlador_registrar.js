'use strict';

// // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// let boton_registrar_cliente = document.querySelector('#btn_registrar_cliente');

// if (boton_registrar_cliente != undefined) {
//     boton_registrar_cliente.addEventListener('click', obtener_datos_cliente);
// }

// const input_identificacion_cliente = document.querySelector('#txt-identificacion_cliente');
// const input_nombre_cliente = document.querySelector('#txt-nombre_cliente');
// const input_nombre2_cliente = document.querySelector('#txt-nombre2_cliente');
// const input_apellido_cliente = document.querySelector('#txt-apellido_cliente');
// const input_apellido2_cliente = document.querySelector('#txt-apellido2_cliente');
// const input_fecha_nacimiento = document.querySelector('#txt-fecha_nacimiento');
// const input_genero_cliente = document.querySelector('#txt-genero_cliente');
// const input_foto_perfil_cliente = document.querySelector('#txt-foto_perfil_cliente'); // * * *
// const input_contrasenna = document.querySelector('#txt-contrasenna');
// const input_contrasenna_confirmar = document.querySelector('#txt-contrasenna_confirmar');

// function obtener_datos_cliente(){
//     let info_cliente = [];
//     let bError = false;

//     let sidentificacion_cliente = input_identificacion_cliente.value;
//     let snombre_cliente = input_nombre_cliente.value;
//     let snombre2_cliente = input_nombre2_cliente.value;
//     let sapellido_cliente = input_apellido_cliente.value;
//     let sapellido2_cliente = input_apellido2_cliente.value;
//     let sfecha_nacimiento = input_fecha_nacimiento.value;
//     let sgenero_cliente = input_genero_cliente.value;
//     let sfoto_perfil_cliente = input_foto_perfil_cliente.value;    
//     let sdesactivado = false;


//     info_cliente.push(sidentificacion_cliente, snombre_cliente, snombre2_cliente, sapellido_cliente, sapellido2_cliente, sfecha_nacimiento, sgenero_cliente, sfoto_perfil_cliente, sdesactivado );

    
//     bError = validar_cliente();
//     if(bError == true){
//         swal({
//             type : 'warning',
//             title : 'No se pudo registrar el usuario',
//             text: 'Por favor revise los campos en rojo',
//             confirmButtonText : 'Entendido'
//         });
//         console.log('No se pudo registrar el usuario');
//     }else{
//         let resultado = registrar_cliente(infocliente);
//         console.log(imagenUrl); 
//        if (resultado == true){
//         swal({
//             type : 'success',
//             title : 'Registro exitoso',
//             text: 'El Pokémon se registró adecuadamente',
//             confirmButtonText : 'Entendido'
//         })
//         .then(
//             function(){
//                 window.location.href = "../html/registrar_cliente.html"
//             }
//         );

//        }
       
//         //imprimir_lista_cliente();
//         limpia_formulario();
//     }
    
// };

// function imprimir_lista_cliente(){
//     let lista_cliente = obtener_lista_cliente();

//     let tbody = document.querySelector('#tbl_cliente tbody');
//     tbody.innerHTML = '';

//     for(let i = 0; i < lista_cliente.length; i++){
//         let fila = tbody.insertRow();

//         let cFoto = fila.insertCell();
//         let cIdentificacion = fila.insertCell();
//         let cNombre = fila.insertCell();
//         let cApellido = fila.insertCell();
        

//         // let imagen = document.createElement('img');
//         // imagen.src = lista_cliente[i]['foto'];
//         // imagen.classList.add('imageSettings');

//         // cFoto.appendChild(imagen);
 

//         cIdentificacion.innerHTML = lista_cliente[i].Identificacion;
//         cNombre.innerHTML = lista_cliente[i].Nombre;
//         cApellido.innerHTML = lista_cliente[i].Apellido;
        


//         let foto = document.createElement('img');
//         let fotoUrl = '';
//         if(lista_cliente[i].foto){
//             fotoUrl = (lista_cliente[i].foto).replace('file', 'http'); 
//         }
//         foto.src = fotoUrl;

//         cFoto.appendChild(foto);

//     }

// };

// function filtrar_lista_cliente(){
//     let filtro = $("#txtFiltro").val();
//     let lista_cliente = obtener_lista_cliente();
//     filtro = filtro.toLowerCase();

//     let listaFiltrada = [];

//     for(let i = 0; i < lista_cliente.length; i++){
//         let nombreCompleto = lista_cliente[i].Nombre.toLowerCase(); // + " " + lista_cliente[i].Tipo.toLowerCase()       

//         if(nombreCompleto.includes(filtro)){
//             listaFiltrada.push(lista_cliente[i]);
//         }
//     }

//     let tbody = document.querySelector('#tblcliente tbody');
//     tbody.innerHTML = '';

//     for(let i = 0; i < listaFiltrada.length; i++){
//         let fila = tbody.insertRow();

//         let cFoto = fila.insertCell();
//         let cIdentificacion = fila.insertCell();
//         let cNombre = fila.insertCell();
//         let cApellido = fila.insertCell();

//         // let imagen = document.createElement('img');
//         // imagen.src = lista_cliente[i]['foto'];
//         // imagen.classList.add('imageSettings');

//         // cFoto.appendChild(imagen);
 

//         cIdentificacion.innerHTML = lista_cliente[i].Identificacion;
//         cNombre.innerHTML = lista_cliente[i].Nombre;
//         cApellido.innerHTML = lista_cliente[i].Apellido;

        
//         let foto = document.createElement('img');
//         let fotoUrl = '';
//         if(listaFiltrada[i].foto){
//             fotoUrl = (listaFiltrada[i].foto).replace('file', 'http'); 
//         }
//         foto.src = fotoUrl;

//         cFoto.appendChild(foto);
        

//     }

// };

// function validar_cliente(){
//     let bError = false;

//     let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
//     let regexSoloNumeros = /^[0-9]{1,3}$/;                         // * * * 


//     //Validación de la identificacion_cliente 
//     if (input_identificacion_cliente.value == '' || (regexSoloNumeros.test(input_identificacion_cliente.value) == false)) {
//         input_identificacion_cliente.classList.add('error-input');
//         bError = true;
//     } else {
//         input_identificacion_cliente.classList.remove('error-input');
//     }

//     //Validación del nombre_cliente 
//     if (input_nombre_cliente.value == '' || (regexSoloLetras.test(input_nombre_cliente.value) == false)) {
//         input_nombre_cliente.classList.add('error-input');
//         bError = true;
//     } else {
//         input_nombre_cliente.classList.remove('error-input');
//     }

//     //Validación del apellido_cliente 
//     if (input_apellido_cliente.value == '' || (regexSoloLetras.test(input_apellido_cliente.value) == false)) {
//         input_apellido_cliente.classList.add('error-input');
//         bError = true;
//     } else {
//         input_apellido_cliente.classList.remove('error-input');
//     }

 
//     //Validación de la fecha nacimiento 
//     if (input_fecha_nacimiento.value == '') {
//         input_fecha_nacimiento.classList.add('error-input');
//         bError = true;
//     } else {
//         input_fecha_nacimiento.classList.remove('error-input');
//     }

//     //Validación genero del cliente
//     if (input_genero_cliente.value == '') {
//         input_genero_cliente.classList.add('error-input');
//         bError = true;
//     } else {
//         input_genero_cliente.classList.remove('error-input');
//     }

//     return bError;
// };

// function limpia_formulario(){
    
//     input_identificacion_cliente.value =''; 
//     input_nombre_cliente.value ='';
//     input_nombre2_cliente.value ='';
//     input_apellido_cliente.value =''; 
//     input_apellido2_cliente.value =''; 
//     input_fecha_nacimiento.value ='';
//     input_genero_cliente.value ='';
//     input_foto_perfil_cliente.value ='';    // * * *    
//     input_contrasenna.value ='';   
//     input_contrasenna_confirmar.value ='';    
//     }     
    
// //  $(document).ready(function() {
// //     imprimir_lista_cliente();
// //  });

//    //filtrar_lista_cliente('Prueba', 'lkflkashshfj')


// // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
















let boton_registrar_cliente = document.querySelector('#btn_registrar_cliente');

if (boton_registrar_cliente != undefined) {
    boton_registrar_cliente.addEventListener('click', obtener_datos_cliente);
}

const input_identificacion_cliente = document.querySelector('#txt-identificacion_cliente');
const input_nombre_cliente = document.querySelector('#txt-nombre_cliente');
const input_nombre2_cliente = document.querySelector('#txt-nombre2_cliente');
const input_apellido_cliente = document.querySelector('#txt-apellido_cliente');
const input_apellido2_cliente = document.querySelector('#txt-apellido2_cliente');
const input_fecha_nacimiento = document.querySelector('#txt-fecha_nacimiento');
const input_genero_cliente = document.querySelector('#txt-genero_cliente');
const input_foto_perfil_cliente = document.querySelector('#txt-foto_perfil_cliente'); // * * *
const input_contrasenna = document.querySelector('#txt-contrasenna');
const input_contrasenna_confirmar = document.querySelector('#txt-contrasenna_confirmar');


// function elm(id) {                                           //* * *
//     return document.querySelector(id);
// }

// function listener(element, event, action) {                  //* * *
//     element.addEventListener(event, action);
// }


function obtener_datos_cliente() {

    let info_cliente = [];
    let bError = false;

    let sidentificacion_cliente = Number(input_identificacion_cliente.value);
    let snombre_cliente = input_nombre_cliente.value;
    let snombre2_cliente = input_nombre2_cliente.value;
    let sapellido_cliente = input_apellido_cliente.value;
    let sapellido2_cliente = input_apellido2_cliente.value;
    let sfecha_nacimiento = input_fecha_nacimiento.value;
    let sgenero_cliente = input_genero_cliente.value;
    let sfoto_perfil_cliente = input_foto_perfil_cliente.value;    
    // let sdesactivado = false;
    let scontrasenna = input_contrasenna.value;
    let scontrasenna_confirmar = input_contrasenna_confirmar.value;
    // let TipoUsuario =




    info_cliente.push(sidentificacion_cliente, snombre_cliente, snombre2_cliente, sapellido_cliente, sapellido2_cliente, sfecha_nacimiento, sgenero_cliente, sfoto_perfil_cliente, scontrasenna, scontrasenna_confirmar);


    bError = validar_cliente();

    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
        console.log('No se pudo registrar');
    } else {
        registrar_cliente(info_cliente);
        swal({
            type: 'success',
            title: 'Registro exitoso',
            text: 'Se registró adecuadamente',
            confirmButtonText: 'Entendido'
        }).then(
            function () {
                // window.location.href = "../../html/cliente/indexTablacliente.html";           //* * *
            }
        );
        limpia_formulario();
    }

}


function validar_cliente() {

    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]+$/;                         // * * * 


    //Validación de la identificacion_cliente 
    if (input_identificacion_cliente.value == '') {
        input_identificacion_cliente.classList.add('error-input');
        bError = true;
    } else {
        input_identificacion_cliente.classList.remove('error-input');
    }

    //Validación del nombre_cliente 
    if (input_nombre_cliente.value == '' || (regexSoloLetras.test(input_nombre_cliente.value) == false)) {
        input_nombre_cliente.classList.add('error-input');
        bError = true;
    } else {
        input_nombre_cliente.classList.remove('error-input');
    }

    //Validación del apellido_cliente 
    if (input_apellido_cliente.value == '' || (regexSoloLetras.test(input_apellido_cliente.value) == false)) {
        input_apellido_cliente.classList.add('error-input');
        bError = true;
    } else {
        input_apellido_cliente.classList.remove('error-input');
    }

 
    //Validación de la fecha nacimiento 
    if (input_fecha_nacimiento.value == '') {
        input_fecha_nacimiento.classList.add('error-input');
        bError = true;
    } else {
        input_fecha_nacimiento.classList.remove('error-input');
    }

    //Validación genero del cliente
    if (input_genero_cliente.value == '') {
        input_genero_cliente.classList.add('error-input');
        bError = true;
    } else {
        input_genero_cliente.classList.remove('error-input');
    }

    return bError;
}


function limpia_formulario() {

    input_identificacion_cliente.value =''; 
    input_nombre_cliente.value ='';
    input_nombre2_cliente.value ='';
    input_apellido_cliente.value =''; 
    input_apellido2_cliente.value =''; 
    input_fecha_nacimiento.value ='';
    input_genero_cliente.value ='';
    input_foto_perfil_cliente.value ='';    // * * *    
    input_contrasenna.value ='';   
    input_contrasenna_confirmar.value ='';    
}





