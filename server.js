const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

//Link to the connection DB
const connectDB=require('./server/database/connection');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

// Print a message using morgan
app.use(morgan('FT Banyingela'));

// Call the DB connection
connectDB();

// Parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// Set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

// Load my assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
// css/styles.css

/* // Load routers 
//app.use('/', require('./server/routes/router'))
app.get('/',(req,res)=> {
    //res.send("CSE 341 Group 6 - Final Application");
    res.render('index');
})

app.get('/add-user',(req,res)=>{
    res.render('add_user');
   
})

app.get('/update-user',(req,res)=>{
    res.render('update_user'); 
}) */

// Redirect to routers
app.use('/', require('./server/routes/router'))
 
app.listen(PORT,()=>{console.log(`Application running on Port number: ${PORT}`)}); 