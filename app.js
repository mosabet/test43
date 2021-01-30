'use strict'

var express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path'),
    fs = require('fs');

var calc = require('./calc.js');
var app = express();
var config = JSON.parse(fs.readFileSync(path.join(__dirname,"config.json")));
if(config.lcu === undefined || config.lcu.length ==0) {
    throw new Error("user could not be initialize, please reconfigure the app.");
}

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'www/public')));
app.set('views', [path.join(__dirname , '/views'),path.join(__dirname , '/www/views')]);
app.set('view engine', 'ejs');


app.get('/*', function (req, res) {
    res.render('index');
});
app.post('/calc', function (req, res) { //calculator REST api
    var co = req.body;
    res.send(calc.calculate(co));
});

//---------start server-------
http.createServer(app).listen(config.port||3000);