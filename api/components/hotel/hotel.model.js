// 'use strict';

let mongoose = require('mongoose');

let hotel_Schema = new mongoose.Schema({

    identificacion_hotel : {type : String, unique : true, required: true},
    nombre_hotel : {type : String, required : true},
    nombre2_hotel : {type : String, required : false},
    apellido_hotel : {type : String, required : true},
    apellido2_hotel : {type : String, required : false},
    fecha_nacimiento : {type : Date, required : false},
    genero_hotel : {type : String, required : false},
    foto_perfil_hotel: {type : String}, // * * *
    // desactivado : {type : Boolean, required : true}, // * * *
    contrasenna : {type: String, required: true},
    contrasenna_confirmar : {type: String, required: true},
    TipoUsuario: {type: Number, required: true}    
    // foto  : {type : String}
});

module.exports = mongoose.model('hotel', hotel_Schema);



