//Require Package
var express = require("express");

//import routes
var html = require("./routes/htmlRoutes")
var api = require("./routes/apiRoutes")

//tell node we are creating a server
var app = express();
//Set initial port
var PORT = process.env.PORT || 3000;

//set express to initialize api routes
app.use("/api", api);
//set express to initialize html routes
app.use("/", html) ;

//listener
app.listen(PORT, function(){
    console.log("The App is listening on PORT: " + PORT)
});