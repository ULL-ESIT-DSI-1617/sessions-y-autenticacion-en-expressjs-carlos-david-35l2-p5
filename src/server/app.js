"use strict";
let express = require('express'),
    app = express(),
    session = require('express-session');
let cookieParser = require('cookie-parser');
let path = require('path');
let util = require("util");
let router = express.Router();  //rutas

//myserver_middleware.js

//module.exports = router;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//        app.set('views', __dirname + '/views');
//        app.set('view engine', 'jade');
//        app.use(express.favicon());
//        app.use(express.logger('dev'));
//        app.use(express.bodyParser());
//        app.use(express.methodOverride());
//        app.use(express.cookieParser('your secret here'));
//        app.use(express.session());
        //app.use(app.router);
//        app.use(express.static(path.join(__dirname,'public')));


//ruteo
//app.get('/', routes.index)
//app.get('/users', user.list);

app.get('/', function(req, res){
//res.sendfile(__dirname + '/gh-pages/index.html');
console.log('peticion a la /')
});

app.get('/login', function(req, res){
        res.render('login', {title: 'login'});
});

app.use(cookieParser());
app.use(session({
    secret: 'Pruebas_Carlos_David',
    resave: true,
    saveUninitialized: false
}))

app.use(function(req, res, next) {
  console.log("Cookies :  "+util.inspect(req.cookies));
  console.log("session :  "+util.inspect(req.session));
  next();
});

//escuchar
var server = app.listen(8091, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
