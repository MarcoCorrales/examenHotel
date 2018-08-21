'use strict';
let lista_hotel = [];

function obtener_lista_hotel (){
    let lista = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/mostrar_hotel',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
    
    return lista;
}


function registrar_hotel(pa_info_hotel){
    console.log(pa_info_hotel);
    let resultado = false;
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_hotel',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            identificacion_hotel : pa_info_hotel[0],
			nombre_hotel : pa_info_hotel[1],
            nombre2_hotel  : pa_info_hotel[2],
            apellido_hotel : pa_info_hotel[3],
            apellido2_hotel : pa_info_hotel[4],
            fecha_nacimiento : pa_info_hotel[5],
            genero_hotel : pa_info_hotel[6],
            foto_perfil_hotel: pa_info_hotel[7],
            contrasenna : pa_info_hotel[8],
            contrasenna_confirmar : pa_info_hotel[9],
            TipoUsuario:pa_info_hotel[10]

        }
      });
    
      peticion.done(function(response){
          if (response.success==true){
              //respuesta = response;
              resultado = true
          }
          else{
            //respuesta = response;
            alert("Error");
            console.log(response);
          }
            
      });
    
      peticion.fail(function(response){
          alert("Error");
       console.log(response);
      });

      return resultado;
}
