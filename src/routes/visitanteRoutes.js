const express = require('express');
const router = express.Router();
const controller = require('../controller/visitanteController');

router.get("/total-por-genero", async (req, res) => {
    res.send(await controller.visitantesPorGenero());
})

module.exports = router;    