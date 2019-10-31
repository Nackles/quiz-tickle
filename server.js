// Express NPM package to make this a backend server
let express = require("express");
let path = require("path");

// Setting up express server
var app = express();
var PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home screen : auth screen
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
})

// Main (Menu)
app.get("/lobby", function(req, res){
    res.sendFile(path.join(__dirname, "playing.html"));
})

// Quiz game active
app.get("/playing", function(req, res){
    res.sendFile(path.join(__dirname, "playing.html"));
})

// Activating listener on PORT
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
