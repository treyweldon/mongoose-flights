const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');
const ticketsCtrl = require('../controllers/tickets')

router.post('/flights/:id/destinations', destinationsCtrl.create);

router.post('/flights/:id/destinations', ticketsCtrl.create);

module.exports = router;