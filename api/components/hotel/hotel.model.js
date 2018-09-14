// 'use strict';

let mongoose = require('mongoose');

let hotel_Schema = new mongoose.Schema({

    nombre_hotel : {type : String, unique : true, required: true},
    ubicacion_hotel : {type : String, required: false},
    provincia_hotel : {type : String, required: true},
    canton_hotel : {type : String, required: true},
    distrito_hotel : {type : String, required: true},
    direccion_exacta_hotel : {type : String, required: true},
    telefono_servicio_hotel: {type : Number, required: true},
    correo_servicio_hotel : {type : String, required: false},
    telefono_reservacion_hotel: {type : Number, required: true},
    correo_reservacion_hotel : {type : String, required: false},
    tipo_usuario_hotel: {type: Number, required: true} 
});

module.exports = mongoose.model('hotel', hotel_Schema);



