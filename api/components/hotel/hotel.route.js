// 'use strict';

const express = require('express');
const router = express.Router();
const hotel = require('./hotel.api');


// app.use(app.router);
// routes.initialize(app);


router.route('/registrar_hotel')
    .post(function (req, res) {
        hotel.registrar(req, res);
    });

router.route('/mostrar_hotel')
.get(function(req, res){
    hotel.mostrar(req,res);
});



router.route('/listar__hotel')
    .get(function (req, res) {
        hotel.listar(req, res);
    });


router.route('/filtrar__hotel')
    .get(function (req, res) {
        hotel.filtrar__hotel(req, res);
    });

// router.route('/desactivar_hotel')
//     .post(function (req, res) {
//         hotel.desactivar(req, res);
//     });

// router.route('/actualizar_hotel')
//     .post(function (req, res) {
//         hotel.actualizar_hotel(req, res);
//     });

module.exports = router;