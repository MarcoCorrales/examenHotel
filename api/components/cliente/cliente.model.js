'use strict';

let mongoose = require('mongoose');

let cliente_Schema = new mongoose.Schema({

    identificacion_cliente : {type : String, unique : true, required: true},
    nombre_cliente : {type : String, required : true},
    nombre2_cliente : {type : String, required : false},
    apellido_cliente : {type : String, required : true},
    apellido2_cliente : {type : String, required : false},
    fecha_nacimiento : {type : Date, required : false},
    genero_cliente : {type : String, required : false},
    foto_perfil_cliente: {type : String}, // * * *
    // desactivado : {type : Boolean, required : true}, // * * *
    contrasenna : {type: String, required: true},
    contrasenna_confirmar : {type: String, required: true},
    TipoUsuario: {type: Number, required: true}    
    // foto  : {type : String}
});

module.exports = mongoose.model('cliente', cliente_Schema);



