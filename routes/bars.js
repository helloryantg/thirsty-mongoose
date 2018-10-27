var express = require('express');
var router = express.Router();
var bars = require('../controllers/barsController');

router.get('/', bars.index);
router.get('/new', bars.new);
router.post('/', bars.create);
router.get('/:id', bars.show);
router.post('/:id/beers', bars.addBeer);
router.delete('/:id/beers/:beerId', bars.removeBeer);

module.exports = router;
