const express = require('express'); 
const app = express(); 
const PORT = 4000; 
const path = require('path');

app.listen(  PORT , ()=>{
    console.log('servidor corriendo en el puerto ' + PORT)
} )

// get , post, put , deleto 
//localhost:4000

// public
const public = path.join(__dirname , './public'); 
app.use(express.static(public)); 

app.set('view engine' , 'ejs'); 
app.set('views' , './src/views')

app.use(express.urlencoded({extended:false})); 
app.use(express.json());

const mainRoute = require('./routes/mainRoute'); 

app.use( '/' ,  mainRoute ); 

