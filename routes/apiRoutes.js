// var fs = require('fs');

var dbJson = require('../db/db.json')
var fs = require("fs");
var path = require("path");

//initializing express router
var router = require("express").Router();
//create get route for notes
    router.get("/notes", function(req,res){
        res.json(dbJson);
    });

    router.post("/notes", function(req,res){

        var dataSent = req.body;

        dbJson.push(dataSent);
        //
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(dbJson), function(err) {
            console.log(err)
            res.json(dbJson);
        })

    });

// //create get route for index
//     router.get("*", function(req,res){
//         res.sendFile(path.join(__dirname, "../public/index.html"))
//     });

module.exports = router