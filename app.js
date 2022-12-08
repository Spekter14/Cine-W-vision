const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const path = require('path')
const routes = require('./routes');

const cookieParser = require('cookie-parser')

// url encoder pa captuarar datos de form
app.use(urlencoded({extended:false}));
app.use(express.json());

// dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//directorio public
app.use(express.static('public'))

//motor de plantillas
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

// bycrypt
const bcrypt = require('bcrypt');

//trabajar cookies
app.use(cookieParser())


//7- variables de session
const session = require('express-session');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

const connection = require('./database/db');

console.log(__dirname);



app.use('/', routes);

// registrar usuario
app.post('/register', async (req, res)=>{
	const user = req.body.user;
	const name = req.body.name;
    const rol = req.body.rol;
	const pass = req.body.pass;
	//let passwordHash = await bcrypt.hash(pass, 8);
    connection.query('INSERT INTO users SET ?',{user:user, name:name, rol:rol, pass:pass}, async (error, results)=>{
        if(error){
            console.log(error);
        }else{            
			res.render('register', {
				alert: true,
				alertTitle: "Registration",
				alertMessage: "¡Successful Registration!",
				alertIcon:'success',
				showConfirmButton: false,
				timer: 1500,
				ruta: ''
			});
            //res.redirect('/');         
        }
	});
})

//comprar boleto
app.post('/compra_boleto2', async (req, res)=>{

	console.log(req.body);
	console.log(req.session.cliente)
	console.log(req.session.name)


	const boletos = req.body.count;
	const total = req.body.total;
    const pelicula = req.body.pelicula;
	const hora = req.body.hora;
	const cliente = req.session.cliente
	//let passwordHash = await bcrypt.hash(pass, 8);
    connection.query('INSERT INTO boletos SET ?',{boletos:boletos, total:total, pelicula:pelicula, hora:hora, cliente:cliente}, async (error, results)=>{
        if(error){
            console.log(error);
        }else{            
			res.render('login', {
				alert: true,
				alertTitle: "Compra",
				alertMessage: "¡Compra completada!",
				alertIcon:'success',
				showConfirmButton: false,
				timer: 1500,
				ruta: ''
			});
            //res.redirect('/');         
        }
	});
})

// autenticacion login
app.post('/auth', async (req, res)=> {
	const user = req.body.user;
	const pass = req.body.pass;
	console.log(req.body.user);
    let passwordHash = await bcrypt.hash(pass, 8);

	if (user && pass) {
		connection.query('SELECT * FROM users WHERE user = ?', [user], async (error, results, fields)=> {
            let match = pass == results[0].pass;
            console.log(match); 
			  
			if( results.length == 0 || !(match)) { 
                
				res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "USUARIO y/o PASSWORD incorrectas",
                        alertIcon:'error',
                        showConfirmButton: true,
                        timer: false,
                        ruta: 'login'    
                    });
				
				//Mensaje simple y poco vistoso
                //res.send('Incorrect Username and/or Password!');				
			} else {         
				//creamos una var de session y le asignamos true si INICIO SESSION       
				req.session.loggedin = true;                
				req.session.name = results[0].name;
				req.session.cliente = results[0].id;
				console.log(results[0].id)
				console.log(req.session.cliente)
				console.log(req.body)
				res.render('login', {
					alert: true,
					alertTitle: "Conexión exitosa",
					alertMessage: "¡LOGIN CORRECTO!",
					alertIcon:'success',
					showConfirmButton: false,
					timer: 1500,
					ruta: ''
				});        			
			}			
			res.end();
		});
	} else {	
		res.send('Please enter user and Password!');
		res.end();
	}
});

//sesion

app.get('/', (req, res)=> {
	if (req.session.loggedin) {
		res.render('index',{
			login: true,
			name: req.session.name			
		});		
	} else {
		res.render('index',{
			login:false,
			name:'iniciar sesión',			
		});				
	}
	res.end();
});

// salir session

app.get('/logout', function (req, res) {
	req.session.destroy(() => {
	  res.redirect('/') // siempre se ejecutará después de que se destruya la sesión
	})
});


//cargar boletos de usuario

app.get('/user', (req,res)=>{  
	  
  const id = req.session.cliente;
  const name =req.session.name;
  console.log(name);
  connection.query('SELECT * FROM boletos WHERE cliente=?',[id] , (error, results) => {
  console.log(results);
      if (error) {
          throw error;
      }else{            
          res.render('user.ejs', {results:results,name:name});            
      }        
  });
});


// app.get('/movies', (req, res)=> {
// 	if (req.session.loggedin) {
// 		res.render('descripcionPeli5',{
// 			login: true,
// 			name: req.session.name			
// 		});		
// 	} else {
// 		res.render('descripcionPeli5',{
// 			login:false,
// 			name:'iniciar sesión',			
// 		});				
// 	}
// 	res.end();
// });



// connection.query("SELECT * FROM users",function(error,results,fields){
//   if(error)
//       throw error;
//        results.forEach(result=>{
//            console.log(result);
//         });
// })



// connection.query("SELECT * FROM usuarios", function(error,results,fields){
// 	if(error)
// 		throw error;
// 		results.foreach(result=>{
// 			console.log(result);
// 		});

// })

// app.get('/',(req,res)=>{

//     res.render('index');
// })


// app.get('/',(req,res)=>{

//     res.render('descripcionPeli');
// })

app.listen(3000,(req,res)=>{

    console.log('server running in localhost:3000');
})