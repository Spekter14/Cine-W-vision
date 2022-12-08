const express = require('express');
const router = express.Router();



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
  


// router.get('/descripcionPeli5', (req, res) => {
//     console.log('Request para descripcion peli');
//     res.render('descripcionPeli5');
//   });


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

  // router.get('/compra_boleto2', (req, res) => {
  //   console.log('Request para compra de boleto');
  //   res.render('compra_boleto2');
  // });

  

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


router.get('/login', (req, res) => {
    console.log('Request para ranking');
    res.render('login');
  });

  router.get('/register', (req, res) => {
    console.log('Request para ranking');
    res.render('register');
  });


  router.get('/movies5', (req, res)=> {
    if (req.session.loggedin) {
      res.render('descripcionPeli5',{
        login: true,
        name: req.session.name			
      });		
    } else {
      res.render('descripcionPeli5',{
        login:false,
        name:'iniciar sesión',			
      });				
    }
    res.end();
  });
  

  router.get('/compra_boleto2', (req, res)=> {
    console.log(req.session)
    if (req.session.loggedin) {
      res.render('compra_boleto2',{
        login: true,
        name: req.session.name,
        cliente: req.session.cliente			
      });		
    } else {
      res.render('compra_boleto2',{
        login:false,
        name:'iniciar sesión',			
      });				
    }
    res.end();
  });



  // router.get('/user', (req, res)=> {
  //   console.log(req.session)
  //   if (req.session.loggedin) {
  //     res.render('user',{
  //       login: true,
  //       name: req.session.name,
  //       cliente: req.session.cliente			
  //     });		
  //   } else {
  //     res.render('user',{
  //       login:false,
  //       name:'iniciar sesión',			
  //     });				
  //   }
  //   res.end();
  // });


// router.get('/user', (req,res)=>{    
//   const id = req.session.cliente;
//   connection.query('SELECT * FROM boletos WHERE cliente=?',[id] , (error, results) => {
//   console.log(results);
//       if (error) {
//           throw error;
//       }else{            
//           res.render('user.ejs', {user:results});            
//       }        
//   });
// });
  

  

module.exports = router;