var express = require('express');
var path = require('path')
//var routes = require('.routes');
//var user = require ('.routes/user');
//var http = require('http);

//instanciar
var app = express();

app.configure(function(){
        app.set('views', __dirname + '/views');
        app.set('view engine', 'jade');
        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser('your secret here'));
        app.use(express.session());
        //app.use(app.router);
        app.use(express.static(path.join(__dirname,'public')));
}


//ruteo
app.get('/', routes.index)
app.get('/users', user.list);

app.get('/login', function(req, res){
        res.render('login', {title: 'login'});
)};

//escuchar
var server = app.listen(8180, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
