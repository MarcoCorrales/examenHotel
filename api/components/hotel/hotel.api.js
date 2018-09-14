'use strict';


const hotel_Model = require('./hotel.model');

module.exports.registrar = function(req, res){

    let nuevo_hotel = new hotel_Model({

        nombre_hotel : req.body.nombre_hotel,
        ubicacion_hotel : req.body.ubicacion_hotel,
        provincia_hotel : req.body.provincia_hotel,
        canton_hotel : req.body.canton_hotel,
        distrito_hotel : req.body.distrito_hotel,
        direccion_exacta_hotel : req.body.direccion_exacta_hotel,
        telefono_servicio_hotel: req.body.telefono_servicio_hotel,
        correo_servicio_hotel : req.body.correo_servicio_hotel,
        telefono_reservacion_hotel: req.body.telefono_reservacion_hotel,
        correo_reservacion_hotel : req.body.correo_reservacion_hotel,
        tipo_usuario_hotel: 0   
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


//     },


//         function (err, user) {
//             if (err) {
//                 res.json({ success: false, msg: 'No se ha actualizado.' + handleError(err) });

//             } else {
//                 res.json({ success: true, msg: 'Se ha actualizado con éxito.' + res });
//             }
//         });
// };
