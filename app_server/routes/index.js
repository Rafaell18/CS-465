var express = require('express');
var router = express.Router();

const ctrlTravlr = require('../controllers/traveler');

router.get('/', ctrlTravlr.travel);

module.exports = router;