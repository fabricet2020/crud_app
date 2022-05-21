const express = require('express');
const route = express.Router()

const services=require('../services/render');

/**
 * @description Root Route
 * @method GET
 */

 route.get('/',services.homeRoutes);

/**
 * @description Root Route
 * @method GET
 */

 route.get('/add-user',services.add_user);
 
/**
 * @description Root Route
 * @method GET
 */

 route.get('/update-user',services.update_user);
/* route.get('/',(req,res)=> {
    //res.send("CSE 341 Group 6 - Final Application");
    res.render('index');
})

route.get('/add-user',(req,res)=>{
    res.render('add_user');
   
})

route.get('/update-user',(req,res)=>{
    res.render('update_user'); 
}) */

//TO be able to use the route
module.exports = route