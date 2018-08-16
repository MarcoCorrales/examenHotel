'use strict';
let mongoose = require('mongoose');

let cliente_Schema = new mongoose.Schema({

    identificacion_cliente : {type : String, required: true},
    nombre_cliente : {type : String, required : true},
    nombre2_cliente : {type : String, required : false},
    apellido_cliente : {type : String, required : true},
    apellido2_cliente : {type : String, required : false},
    fecha_nacimiento : {type : Date, required : true},
    genero_cliente : {type : String, required : true},
    foto_perfil_cliente: {type : String, required: true}, // * * *
    // desactivado : {type : Boolean, required : true}, // * * *
    contrasenna : {type: String, required: true},
    contrasenna_confirmar : {type: String, required: true},
    TipoUsuario: {type: Number, required: true}    
});

module.exports = mongoose.model('cliente', cliente_Schema);