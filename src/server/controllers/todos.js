var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET / */
router.get('/', function(req, res, next) {
  models.todo.findAll().then(function(todos) {
    res.json(todos)
  })

});

/* GET /:id */
router.get('/:id(\\d+)', function(req, res, next) {
  console.log("ID = " + req.params.id)
  models.todo.findOne(req.params.id).then(function(todo) {
    if (todo == null) {
      res.status(404)
    } else {
      res.json(todo)
    }
  })
});

/* POST / */
router.post('/', function(req, res, next) {
  models.todo.create(req.body).then(function(todo) {
    res.status(201).json(todo);
  });

});

/* PUT /:id */
router.put('/:id(\\d+)', function(req, res, next) {
  models.todo.update(req.body, { where: { id: req.params.id }}).then(function(todo) {
    res.status(200).end()
  });
});

/* DELETE /:id */
router.delete('/:id(\\d+)', function (req, res) {
  models.todo.destroy({ where: { id: req.params.id } }).then(function(todo) {
    res.status(200).end()
  });
});

module.exports = router;
