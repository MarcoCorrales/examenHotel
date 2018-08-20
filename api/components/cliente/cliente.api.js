'use strict';


const cliente_Model = require('./cliente.model');

module.exports.registrar = function(req, res){

    let nuevo_cliente = new cliente_Model({
        identificacion_cliente : req.body.identificacion_cliente,
        nombre_cliente : req.body.nombre_cliente,
        nombre2_cliente : req.body.nombre2_cliente,
        apellido_cliente : req.body.apellido_cliente,
        apellido2_cliente : req.body.apellido2_cliente,
        fecha_nacimiento : req.body.fecha_nacimiento,
        genero_cliente : req.body.genero_cliente,
        foto_perfil_cliente: req.body.foto_perfil_cliente,
        contrasenna : req.body.contrasenna,
        contrasenna_confirmar : req.body.contrasenna_confirmar,
        TipoUsuario: 3   
    });

    nuevo_cliente.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo completar su registro. Ocurrió un error el siguiente error: ' + error});
        }else{
            res.json({success : true, msg : 'Registro exitoso'});
        }

    });

};

// * * * * *

module.exports.mostrar = function(req, res){ 

    cliente_Model.find().then(
        function(cliente){
            res.send(cliente);
    });        

};


// module.exports.listar = function(req, res){
//     cliente_Model.find().then(
//         function(cliente){
//             res.send(cliente);
//         });
// };

// module.exports.desactivar = function(req, res){
    
//     cliente_Model.update(
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

// module.exports.filtrar_cliente = function(req, res){
//     cliente_Model.find(req.body.nombre_cliente).then( //* * * * *
//         function(cliente){
//             res.send(cliente);
//         });
// };


// module.exports.actualizar_cliente = function (req, res) {
//     cliente_Model.findByIdAndUpdate(req.body._id,{

//         identificacion_cliente : req.body.identificacion_cliente,
//         nombre_cliente : req.body.nombre_cliente,
//         nombre2_cliente : req.body.nombre2_cliente,
//         apellido_cliente : req.body.apellido_cliente,
//         apellido2_cliente : req.body.apellido2_cliente,
//         fecha_nacimiento : req.body.fecha_nacimiento,
//         genero_cliente : req.body.genero_cliente,
//         foto_perfil_cliente: req.body.foto_perfil_cliente
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
