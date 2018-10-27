var express = require('express');
var router = express.Router();
var beers = require('../controllers/beersController');

router.get('/', beers.index);
router.get('/new', beers.new);
router.post('/', beers.create);
router.get('/:id', beers.show);
router.delete('/:id', beers.destroy);
router.post('/:id/comments', beers.createComment);

module.exports = router;

