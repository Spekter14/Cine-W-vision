const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();

// url encoder pa captuarar datos de form
app.use(urlencoded({extended:false}));
app.use(express.json());

// dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./envc/.env'});

//directorio public
app.use('/resourses',express.static('public'));
app.use('/resourses',express.static(__dirname+ 'public'));

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
app.get('/',(req,res)=>{

    res.send('holas mundo');
})

app.listen(3000,(req,res)=>{

    console.log('server running in localhost:3000');
})