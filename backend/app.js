const express = require('express');
const app = express();
var http = require('http');

app.use('/',express.static(__dirname + '/'));

var mongoose = require('mongoose');

var  datains = require('./names.model');

var db = 'mongodb+srv://vaibhav:xY5v3ktMpyAfuAMu@cluster0-zo9rt.mongodb.net/node-angular?retryWrites=true';
//var db = 'mongodb://localhost/vaibhav';

mongoose.connect(db)
    .then(()=>{
        console.log('Conneced to database');
    })
    .catch(()=>{
        console.log("Connection failed");
    });
   


app.use((req,res,next) => {

    res.setHeader("Access-Control-Allow-Origin","*");
    

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE,OPTIONS");


  
    next();

});


var bodyParser = require('body-parser');
app.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({extended:false});


app.post('/insert',function(req,res){

   

    console.log('We are trying to add th names inside the mongoDB:-'+ req.body.firstname);
    var posts = new datains();


   

    var posts = new datains({

        firstname: req.body.firstname,
        lastname: req.body.lastname


    });

   
    console.log(posts);
    
    posts.save();

/*
    const post = [
        {

            firstname:'Vaibhav',
            lastname:'Gera'
        }
    ]
*/

/*
    res.status(200).json({
        message:'Posts recevied',
        posts:req.body
    });

    */

 //  res.render('The name you entered has been added');
/*
 posts.save(function(err,data){
     if(err){
         console.log("There is an error")
         res.send(JSON.stringify("Error saving the number"))

     }else{
        console.log(data)
        res.send(JSON.stringify("Success"));
     }
 })
 */

 res.send(JSON.stringify('the name you provided has been saved'));
})

module.exports = app;




