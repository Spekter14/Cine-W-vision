const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Request for home recieved');
  res.render('index');
});

router.get('/descripcionPeli', (req, res) => {
  console.log('Request for para descripcion peli');
  res.render('descripcionPeli');
});

router.get('/descripcionPeli2', (req, res) => {
    console.log('Request for para descripcion peli');
    res.render('descripcionPeli2');
  });
  
router.get('/descripcionPeli3', (req, res) => {
    console.log('Request for para descripcion peli');
    res.render('descripcionPeli3');
  });
  

router.get('/descripcionPeli4', (req, res) => {
    console.log('Request for para descripcion peli');
    res.render('descripcionPeli4');
  });
  

router.get('/descripcionPeli6', (req, res) => {
    console.log('Request for para descripcion peli');
    res.render('descripcionPeli6');
  });
  


router.get('/descripcionPeli5', (req, res) => {
    console.log('Request para descripcion peli');
    res.render('descripcionPeli5');
  });


  router.get('/descripcionPeli7', (req, res) => {
    console.log('Request for para descripcion peli');
    res.render('descripcionPeli7');
  });
  

  router.get('/descripcionPeli8', (req, res) => {
    console.log('Request for para descripcion peli');
    res.render('descripcionPeli8');
  });


  router.get('/descripcionPeli9', (req, res) => {
    console.log('Request for para descripcion peli');
    res.render('descripcionPeli9');
  });


  router.get('/descripcionPeli10', (req, res) => {
    console.log('Request for para descripcion peli');
    res.render('descripcionPeli10');
  });

  router.get('/compra_boleto2', (req, res) => {
    console.log('Request para compra de boleto');
    res.render('compra_boleto2');
  });

  

router.get('/formatos', (req, res) => {
  console.log('Request para formatos');
  res.render('formatos');
});


router.get('/pelicula', (req, res) => {
    console.log('Request para cartelera');
    res.render('pelicula');
  });

router.get('/ranking', (req, res) => {
    console.log('Request para ranking');
    res.render('ranking');
  });

  
module.exports = router;