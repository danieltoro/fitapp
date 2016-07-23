var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*Fisiometricos*/

router.get('/fisicos', function(req, res, next) {
  res.render('fisicos', { title: 'Hello, World' });
});
router.get('/resumen', function(req, res, next) {
  res.render('resumen', { title: 'Hello, World' });
});
router.get('/pliometricos', function(req, res, next) {
  res.render('pliometricos', { title: 'Hello, World' });
});


/*Rutina*/
router.get('/rm', function(req, res, next) {
  res.render('rm', { title: 'Hello, World' });
});
router.get('/ejercicios', function(req, res, next) {
  res.render('ejercicios', { title: 'Hello, World' });
});



/*Nutricion*/
router.get('/macros', function(req, res, next) {
  res.render('macros', { title: 'Hello, World' });
});
router.get('/dieta', function(req, res, next) {
  res.render('dieta', { title: 'Hello, World' });
});

module.exports = router;
