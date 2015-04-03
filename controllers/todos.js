var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET todos */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todos' });
});


// router.route('/todos/:id').get(function(req, res) {
router.get('/:id', function(req, res, next) {
  models.Todo.findOne(req.params.id).then(function(todo) {
    if (todo == null) {
      res.status(404).send('Not found');
    } else {
      res.send(todo.title);
    }
  })
});

module.exports = router;
