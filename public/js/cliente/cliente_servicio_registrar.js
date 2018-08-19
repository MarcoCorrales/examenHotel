'use strict';
let lista_cliente = [];

function obtener_lista_cliente (){
    let lista = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/mostrar_cliente',
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


function registrar_cliente(pa_info_cliente){
    console.log(pa_info_cliente);
    let resultado = false;
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_cliente',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            identificacion_cliente : pa_info_cliente[0],
			nombre_cliente : pa_info_cliente[1],
            nombre2_cliente  : pa_info_cliente[2],
            apellido_cliente : pa_info_cliente[3],
            apellido2_cliente : pa_info_cliente[4],
            fecha_nacimiento : pa_info_cliente[5],
            genero_cliente : pa_info_cliente[6],
            foto_perfil_cliente: pa_info_cliente[7],
            contrasenna : pa_info_cliente[8],
            contrasenna_confirmar : pa_info_cliente[9],
            TipoUsuario:pa_info_cliente[10]

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
