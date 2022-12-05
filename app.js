const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const path = require('path')
const routes = require('./routes');

// url encoder pa captuarar datos de form
app.use(urlencoded({extended:false}));
app.use(express.json());

// dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//directorio public
app.use(express.static('public'))

//motor de plantillas
app.set('view engine','ejs');
// bycrypt
const bcrypt = require('bcryptjs');




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

connection.query("SELECT * FROM usuarios",function(error,results,fields){
    if(error)
        throw error;
        results.forEach(result=>{
            console.log(result);
        });
})


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