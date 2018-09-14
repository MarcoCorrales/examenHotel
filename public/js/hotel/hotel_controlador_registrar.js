'use strict';

let boton_registrar_hotel = document.querySelector('#btn_registrar_hotel');

if (boton_registrar_hotel != undefined) {
    boton_registrar_hotel.addEventListener('click', obtener_datos_hotel);
}

let input_filtro_hotel = document.querySelector('#txt_filtro_hotel');

if (input_filtro_hotel != undefined) {
    input_filtro_hotel.addEventListener('keyup' , filtrar_lista_hotel);
}

const input_nombre_hotel = document.querySelector('#txt_nombre_hotel');
const input_ubicacion_hotel = document.querySelector('#txt_ubicacion_hotel');
const input_provincia_hotel = document.querySelector('#txt_provincia_hotel');
const input_canton_hotel = document.querySelector('#txt_canton_hotel');
const input_distrito_hotel = document.querySelector('#txt_distrito_hotel');
const input_direccion_exacta_hotel = document.querySelector('#txt_direccion_exacta_hotel');
const input_telefono_servicio_hotel = document.querySelector('#txt_telefono_servicio_hotel');
const input_correo_servicio_hotel = document.querySelector('#txt_correo_servicio_hotel');
const input_telefono_reservacion_hotel = document.querySelector('#txt_telefono_reservacion_hotel');
const input_correo_reservacion_hotel = document.querySelector('#txt_correo_reservacion_hotel');


// function elm(id) {                                           //* * *
//     return document.querySelector(id);
// }

// function listener(element, event, action) {                  //* * *
//     element.addEventListener(event, action);
// }


function obtener_datos_hotel() {

    let info_hotel = [];
    let bError = false;


    let snombre_hotel = input_nombre_hotel.value;
    let subicacion_hotel = input_ubicacion_hotel.value;
    let sprovincia_hotel = input_provincia_hotel.value;
    let scanton_hotel = input_canton_hotel.value;
    let sdistrito_hotel = input_distrito_hotel.value;
    let sdireccion_exacta_hotel = input_direccion_exacta_hotel.value;
    let stelefono_servicio_hotel = input_telefono_servicio_hotel.value;
    let scorreo_servicio_hotel = input_correo_servicio_hotel.value;
    let stelefono_reservacion_hotel = input_telefono_reservacion_hotel.value;
    let scorreo_reservacion_hotel = input_correo_reservacion_hotel.value;


    info_hotel.push(snombre_hotel, subicacion_hotel, sprovincia_hotel, scanton_hotel, sdistrito_hotel, sdireccion_exacta_hotel, stelefono_servicio_hotel, scorreo_servicio_hotel, stelefono_reservacion_hotel, scorreo_reservacion_hotel);


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

        let cfoto_hotel = fila.insertCell();
        let cnombre = fila.insertCell();
        // let cubicacion_hotel = fila.insertCell();
        let cprovincia_hotel = fila.insertCell();
        // let ccanton_hotel = fila.insertCell();
        // let cdistrito_hotel = fila.insertCell();
        // let cdireccion_exacta_hotel = fila.insertCell();
        let ctelefono_servicio_hotel = fila.insertCell();
        // let ccorreo_servicio_hotel = fila.insertCell();
        let ctelefono_reservacion_hotel = fila.insertCell();
        // let ccorreo_reservacion_hotel = fila.insertCell();
        
 
        // cfoto_hotel.innerHTML = lista_hotel[i].foto_hotel;
        cnombre.innerHTML = lista_hotel[i].nombre_hotel;
        // cubicacion_hotel.innerHTML = lista_hotel[i].ubicacion_hotel;
        cprovincia_hotel.innerHTML = lista_hotel[i].provincia_hotel;
        // ccanton_hotel.innerHTML = lista_hotel[i].canton_hotel;
        // cdistrito_hotel.innerHTML = lista_hotel[i].distrito_hotel;
        // cdireccion_exacta_hotel.innerHTML = lista_hotel[i].direccion_exacta_hotel;
        ctelefono_servicio_hotel.innerHTML= lista_hotel[i].telefono_servicio_hotel;
        // ccorreo_servicio_hotel.innerHTML= lista_hotel[i].telefono_reservacion_hotel;
        ctelefono_reservacion_hotel.innerHTML = lista_hotel[i].telefono_reservacion_hotel;
        // ccorreo_reservacion_hotel.innerHTML = lista_hotel[i].correo_reservacion_hotel;

    }

};
function imprimir_lista_hotel(){
    let lista_hotel = obtener_lista_hotel();

    let tbody = document.querySelector('#tbl_hotel tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < lista_hotel.length; i++){
        let fila = tbody.insertRow();

        let cfoto_hotel = fila.insertCell();
        let cnombre = fila.insertCell();
        // let cubicacion_hotel = fila.insertCell();
        let cprovincia_hotel = fila.insertCell();
        // let ccanton_hotel = fila.insertCell();
        // let cdistrito_hotel = fila.insertCell();
        // let cdireccion_exacta_hotel = fila.insertCell();
        let ctelefono_servicio_hotel = fila.insertCell();
        // let ccorreo_servicio_hotel = fila.insertCell();
        let ctelefono_reservacion_hotel = fila.insertCell();
        // let ccorreo_reservacion_hotel = fila.insertCell();
        
 
        // cfoto_hotel.innerHTML = lista_hotel[i].foto_hotel;
        cnombre.innerHTML = lista_hotel[i].nombre_hotel;
        // cubicacion_hotel.innerHTML = lista_hotel[i].ubicacion_hotel;
        cprovincia_hotel.innerHTML = lista_hotel[i].provincia_hotel;
        // ccanton_hotel.innerHTML = lista_hotel[i].canton_hotel;
        // cdistrito_hotel.innerHTML = lista_hotel[i].distrito_hotel;
        // cdireccion_exacta_hotel.innerHTML = lista_hotel[i].direccion_exacta_hotel;
        ctelefono_servicio_hotel.innerHTML= lista_hotel[i].telefono_servicio_hotel;
        // ccorreo_servicio_hotel.innerHTML= lista_hotel[i].telefono_reservacion_hotel;
        ctelefono_reservacion_hotel.innerHTML = lista_hotel[i].telefono_reservacion_hotel;
        // ccorreo_reservacion_hotel.innerHTML = lista_hotel[i].correo_reservacion_hotel;

    }

};

$(document).ready(function() {
    imprimir_lista_hotel();
 });



function validar_hotel() {

    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]+$/;                        


    if (input_nombre_hotel.value == '' || (regexSoloLetras.test(input_nombre_hotel.value) == false)) {
        input_nombre_hotel.classList.add('error-input');
        bError = true;
    } else {
        input_nombre_hotel.classList.remove('error-input');
    }


    if (input_provincia_hotel.value == '' || (regexSoloLetras.test(input_provincia_hotel.value) == false)) {
        input_provincia_hotel.classList.add('error-input');
        bError = true;
    } else {
        input_provincia_hotel.classList.remove('error-input');
    }

    if (input_canton_hotel.value == '' || (regexSoloLetras.test(input_canton_hotel.value) == false)) {
        input_canton_hotel.classList.add('error-input');
        bError = true;
    } else {
        input_canton_hotel.classList.remove('error-input');
    }

    if (input_distrito_hotel.value == '' || (regexSoloLetras.test(input_distrito_hotel.value) == false)) {
        input_distrito_hotel.classList.add('error-input');
        bError = true;
    } else {
        input_distrito_hotel.classList.remove('error-input');
    }

    if (input_direccion_exacta_hotel.value == '') {
        input_direccion_exacta_hotel.classList.add('error-input');
        bError = true;
    } else {
        input_direccion_exacta_hotel.classList.remove('error-input');
    }

    if (input_telefono_servicio_hotel.value == '') {
        input_telefono_servicio_hotel.classList.add('error-input');
        bError = true;
    } else {
        input_telefono_servicio_hotel.classList.remove('error-input');
    }
    if (input_correo_servicio_hotel.value == '') {
        input_correo_servicio_hotel.classList.add('error-input');
        bError = true;
    } else {
        input_correo_servicio_hotel.classList.remove('error-input');
    }

    if (input_telefono_reservacion_hotel.value == '') {
        input_telefono_reservacion_hotel.classList.add('error-input');
        bError = true;
    } else {
        input_telefono_reservacion_hotel.classList.remove('error-input');
    }
    if (input_correo_reservacion_hotel.value == '') {
        input_correo_reservacion_hotel.classList.add('error-input');
        bError = true;
    } else {
        input_correo_reservacion_hotel.classList.remove('error-input');
    }

    return bError;
}


function limpia_formulario() {

    input_nombre_hotel.value ='';
    input_ubicacion_hotel.value ='';
    input_provincia_hotel.value =''; 
    input_canton_hotel.value =''; 
    input_distrito_hotel.value ='';
    input_direccion_exacta_hotel.value ='';
    input_telefono_servicio_hotel.value ='';   
    input_correo_servicio_hotel.value ='';   
    input_telefono_reservacion_hotel.value ='';   
    input_correo_reservacion_hotel.value ='';    

}

