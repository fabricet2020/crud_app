const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

// Print a message using morgan
app.use(morgan('tiny'));

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

app.get('/',(req,res)=> {
    res.send("CSE 341 Group 6 - Final Application");
})

app.listen(PORT,()=>{console.log(`Application running on Port number: ${PORT}`)}); 