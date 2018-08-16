'use strict';

const express = require('express');
const router = express.Router();
const cliente = require('./cliente.api');


// app.use(app.router);
// routes.initialize(app);


router.route('/registrar_cliente')
    .post(function (req, res) {
        cliente.registrar(req, res);
    });

router.route('/listar__cliente')
    .get(function (req, res) {
        cliente.listar(req, res);
    });


router.route('/filtrar__cliente')
    .get(function (req, res) {
        cliente.filtrar__cliente(req, res);
    });

router.route('/desactivar_cliente')
    .post(function (req, res) {
        cliente.desactivar(req, res);
    });

router.route('/actualizar_cliente')
    .post(function (req, res) {
        cliente.actualizar_cliente(req, res);
    });

module.exports = router;