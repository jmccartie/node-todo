var express = require('express');
var router = express.Router();

/* GET todos */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todos' });
});


// router.route('/todos/:id').get(function(req, res) {
router.get('/:id', function(req, res, next) {
  todo = req.models.todo.get(req.params.id, function (err, todo) {
    if (err) {
      return res.send(err);
    }

    res.send(todo.title);
  });

});

module.exports = router;
