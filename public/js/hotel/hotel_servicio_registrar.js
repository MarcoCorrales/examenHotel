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
            
			nombre_hotel : pa_info_hotel[0],
            ubicacion_hotel  : pa_info_hotel[1],
            provincia_hotel : pa_info_hotel[2],
            canton_hotel : pa_info_hotel[3],
            distrito_hotel : pa_info_hotel[4],
            direccion_exacta_hotel : pa_info_hotel[5],
            telefono_servicio_hotel: pa_info_hotel[6],
            correo_servicio_hotel : pa_info_hotel[7],
            telefono_reservacion_hotel : pa_info_hotel[8],
            correo_reservacion_hotel:pa_info_hotel[9],
            tipo_usuario_hotel:pa_info_hotel[10]

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
