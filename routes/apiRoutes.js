// var fs = require('fs');

var dbJson = require('../db/db.json')

//initializing express router
var router = require("express").Router();
//create get route for notes
    router.get("/notes", function(req,res){
        res.json(dbJson);
    });

    router.post("/notes", function(req,res){
        res.send("Hi World")
    });

// //create get route for index
//     router.get("*", function(req,res){
//         res.sendFile(path.join(__dirname, "../public/index.html"))
//     });

module.exports = router