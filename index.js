//===================
// FileName: index.js
// WebSite: https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
//===================

// IMPORT express-- most imports are at TOP of file
let express = require('express')
// IMPORT Body parser
let bodyParser = require('body-parser');
// IMPORT Mongoose
let mongoose = require('mongoose');
// INIT APP--Must do this early on in the file
let app = express();

// IMPORT ROUTES-- the "." means root, /routes goes into DIR to file
let apiRoutes = require("./routes/api-routes")

// CONFIG bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
 }));
app.use(bodyParser.json());

// CONNECT to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub');

// INIT Mongoose Conn
var db = mongoose.connection;

// SET server port
var port = process.env.PORT || 8080;

// SEND message for default URL
app.get('/', (req, res) => res.send('Hello World with Express and Nodemon'));

// USE Api routes in the App
app.use('/api', apiRoutes)

// LAUNCH app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});