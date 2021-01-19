var path = require("path");
//initializing express router
var router = require("express").Router();
//create get route for notes
    router.get("/notes", function(req,res){
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });

//create get route for index
    router.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

module.exports = router