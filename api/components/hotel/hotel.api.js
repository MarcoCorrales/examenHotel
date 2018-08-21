'use strict';


const hotel_Model = require('./hotel.model');

module.exports.registrar = function(req, res){

    let nuevo_hotel = new hotel_Model({
        identificacion_hotel : req.body.identificacion_hotel,
        nombre_hotel : req.body.nombre_hotel,
        nombre2_hotel : req.body.nombre2_hotel,
        apellido_hotel : req.body.apellido_hotel,
        apellido2_hotel : req.body.apellido2_hotel,
        fecha_nacimiento : req.body.fecha_nacimiento,
        genero_hotel : req.body.genero_hotel,
        foto_perfil_hotel: req.body.foto_perfil_hotel,
        contrasenna : req.body.contrasenna,
        contrasenna_confirmar : req.body.contrasenna_confirmar,
        TipoUsuario: 3   
    });

    nuevo_hotel.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo completar su registro. Ocurrió un error el siguiente error: ' + error});
        }else{
            res.json({success : true, msg : 'Registro exitoso'});
        }

    });

};

// * * * * *

module.exports.mostrar = function(req, res){ 

    hotel_Model.find().then(
        function(hotel){
            res.send(hotel);
    });        

};


// module.exports.listar = function(req, res){
//     hotel_Model.find().then(
//         function(hotel){
//             res.send(hotel);
//         });
// };

// module.exports.desactivar = function(req, res){
    
//     hotel_Model.update(
//         {_id: req.body._id}, 
//         {
//             desactivado : req.body.desactivado
//         },
//         function(error){
//             if(error){
//                 res.json({success : false, msg : 'No se pudo desactivar. Ocurrió el siguiente error: ' + error});
//             }else{
//                 res.json({success : true, msg : 'Se desactivó con éxito'});
//             }
//         }
//     )
// };

// module.exports.filtrar_hotel = function(req, res){
//     hotel_Model.find(req.body.nombre_hotel).then( //* * * * *
//         function(hotel){
//             res.send(hotel);
//         });
// };


// module.exports.actualizar_hotel = function (req, res) {
//     hotel_Model.findByIdAndUpdate(req.body._id,{

//         identificacion_hotel : req.body.identificacion_hotel,
//         nombre_hotel : req.body.nombre_hotel,
//         nombre2_hotel : req.body.nombre2_hotel,
//         apellido_hotel : req.body.apellido_hotel,
//         apellido2_hotel : req.body.apellido2_hotel,
//         fecha_nacimiento : req.body.fecha_nacimiento,
//         genero_hotel : req.body.genero_hotel,
//         foto_perfil_hotel: req.body.foto_perfil_hotel
//         // contrasenna : req.body.contrasenna,
//         // contrasenna_confirmar : req.body.contrasenna_confirmar,
//         // TipoUsuario: 3,
//         foto : req.body.foto    
//     },


//         function (err, user) {
//             if (err) {
//                 res.json({ success: false, msg: 'No se ha actualizado.' + handleError(err) });

//             } else {
//                 res.json({ success: true, msg: 'Se ha actualizado con éxito.' + res });
//             }
//         });
// };
