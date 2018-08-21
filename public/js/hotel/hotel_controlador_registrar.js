'use strict';

let boton_registrar_hotel = document.querySelector('#btn_registrar_hotel');

if (boton_registrar_hotel != undefined) {
    boton_registrar_hotel.addEventListener('click', obtener_datos_hotel);
}



let input_filtro_hotel = document.querySelector('#txt_filtro_hotel');

if (input_filtro_hotel != undefined) {
    input_filtro_hotel.addEventListener('keyup' , filtrar_lista_hotel);
}



const input_identificacion_hotel = document.querySelector('#txt-identificacion_hotel');
const input_nombre_hotel = document.querySelector('#txt-nombre_hotel');
const input_nombre2_hotel = document.querySelector('#txt-nombre2_hotel');
const input_apellido_hotel = document.querySelector('#txt-apellido_hotel');
const input_apellido2_hotel = document.querySelector('#txt-apellido2_hotel');
const input_fecha_nacimiento_hotel = document.querySelector('#txt-fecha_nacimiento_hotel');
const input_genero_hotel = document.querySelector('#txt-genero_hotel');
const input_foto_perfil_hotel = document.querySelector('#input_foto'); // * * *
const input_contrasenna_hotel = document.querySelector('#txt-contrasenna_hotel');
const input_contrasenna_hotel_confirmar = document.querySelector('#txt-contrasenna_hotel_confirmar');


// function elm(id) {                                           //* * *
//     return document.querySelector(id);
// }

// function listener(element, event, action) {                  //* * *
//     element.addEventListener(event, action);
// }


function obtener_datos_hotel() {

    let info_hotel = [];
    let bError = false;

    let sidentificacion_hotel = Number(input_identificacion_hotel.value);
    let snombre_hotel = input_nombre_hotel.value;
    let snombre2_hotel = input_nombre2_hotel.value;
    let sapellido_hotel = input_apellido_hotel.value;
    let sapellido2_hotel = input_apellido2_hotel.value;
    let sfecha_nacimiento_hotel = input_fecha_nacimiento_hotel.value;
    let sgenero_hotel = input_genero_hotel.value;
    let sfoto_perfil_hotel = input_foto_perfil_hotel.value;    
    // let sdesactivado = false;
    let scontrasenna_hotel = input_contrasenna_hotel.value;
    let scontrasenna_hotel_confirmar = input_contrasenna_hotel_confirmar.value;
    // let TipoUsuario =




    info_hotel.push(sidentificacion_hotel, snombre_hotel, snombre2_hotel, sapellido_hotel, sapellido2_hotel, sfecha_nacimiento_hotel, sgenero_hotel, sfoto_perfil_hotel, scontrasenna_hotel, scontrasenna_hotel_confirmar);


    bError = validar_hotel();

    if (bError == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });
        console.log('No se pudo registrar');
        show_section_hotel_registro();
    } else {
        registrar_hotel(info_hotel);
        swal({
            type: 'success',
            title: 'Registro exitoso',
            text: 'Se registró adecuadamente',
            confirmButtonText: 'Entendido'
        }).then(
            function () {
                hide_section_hotel_registro();
                // window.location.href = "../../html/hotel/indexTablahotel.html";           //* * *
            }
        );
 
        limpia_formulario();
        imprimir_lista_hotel();
    }

}


function validar_hotel() {

    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]+$/;                         // * * * 


    //Validación de la identificacion_hotel 
    if (input_identificacion_hotel.value == '') {
        input_identificacion_hotel.classList.add('error-input');
        bError = true;
    } else {
        input_identificacion_hotel.classList.remove('error-input');
    }

    //Validación del nombre_hotel 
    if (input_nombre_hotel.value == '' || (regexSoloLetras.test(input_nombre_hotel.value) == false)) {
        input_nombre_hotel.classList.add('error-input');
        bError = true;
    } else {
        input_nombre_hotel.classList.remove('error-input');
    }

    //Validación del apellido_hotel 
    if (input_apellido_hotel.value == '' || (regexSoloLetras.test(input_apellido_hotel.value) == false)) {
        input_apellido_hotel.classList.add('error-input');
        bError = true;
    } else {
        input_apellido_hotel.classList.remove('error-input');
    }

 
    //Validación de la fecha nacimiento 
    if (input_fecha_nacimiento_hotel.value == '') {
        input_fecha_nacimiento_hotel.classList.add('error-input');
        bError = true;
    } else {
        input_fecha_nacimiento_hotel.classList.remove('error-input');
    }

    //Validación genero del hotel
    if (input_genero_hotel.value == '') {
        input_genero_hotel.classList.add('error-input');
        bError = true;
    } else {
        input_genero_hotel.classList.remove('error-input');
    }

    return bError;
}


function limpia_formulario() {

    input_identificacion_hotel.value =''; 
    input_nombre_hotel.value ='';
    input_nombre2_hotel.value ='';
    input_apellido_hotel.value =''; 
    input_apellido2_hotel.value =''; 
    input_fecha_nacimiento_hotel.value ='';
    input_genero_hotel.value ='';
    input_foto_perfil_hotel.value ='';    // * * *    
    input_contrasenna_hotel.value ='';   
    input_contrasenna_hotel_confirmar.value ='';    
}

function imprimir_lista_hotel(){
    let lista_hotel = obtener_lista_hotel();

    let tbody = document.querySelector('#tbl_hotel tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < lista_hotel.length; i++){
        let fila = tbody.insertRow();

        let cFoto = fila.insertCell();
        let cIdentificacion = fila.insertCell();
        let cNombre = fila.insertCell();
        let cApellido = fila.insertCell();
        
 

        cIdentificacion.innerHTML = lista_hotel[i].identificacion_hotel;
        cNombre.innerHTML = lista_hotel[i].nombre_hotel;
        cApellido.innerHTML = lista_hotel[i].apellido_hotel;
        


        // let foto = document.createElement('img');
        // let fotoUrl = '';
        // if(lista_hotel[i].foto_perfil_hotel){
        //     fotoUrl = (lista_hotel[i].foto_perfil_hotel).replace('file', 'http'); 
        // }
        // foto.src = fotoUrl;

        // cFoto.appendChild(foto_perfil_hotel);

    }

};

function filtrar_lista_hotel(){
    let filtro = $("#txt_filtro_hotel").val();
    let lista_hotel = obtener_lista_hotel();
    filtro = filtro.toLowerCase();

    let lista_filtrada_hotel = [];

    for(let i = 0; i < lista_hotel.length; i++){
        let nombre_completo = lista_hotel[i].nombre_hotel.toLowerCase(); // + " " + lista_hotel[i].Tipo.toLowerCase()       

        if(nombre_completo.includes(filtro)){
            lista_filtrada_hotel.push(lista_hotel[i]);
        }
    }

    let tbody = document.querySelector('#tbl_hotel tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < lista_filtrada_hotel.length; i++){
        let fila = tbody.insertRow();

        let cFoto = fila.insertCell();
        let cIdentificacion = fila.insertCell();
        let cNombre = fila.insertCell();
        let cApellido = fila.insertCell();
 

        cIdentificacion.innerHTML = lista_hotel[i].identificacion_hotel;
        cNombre.innerHTML = lista_hotel[i].nombre_hotel;
        cApellido.innerHTML = lista_hotel[i].apellido_hotel;

        
        // let foto = document.createElement('img');
        // let fotoUrl = '';
        // if(lista_hotel[i].foto_perfil_hotel){
        //     fotoUrl = (lista_hotel[i].foto_perfil_hotel).replace('file', 'http'); 
        // }
        // foto.src = fotoUrl;

        // cFoto.appendChild(foto_perfil_hotel);
        

    }

};

$(document).ready(function() {
    imprimir_lista_hotel();
 });
