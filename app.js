//INITIALISATION DES MODULES 

var express = require('express'); //express
var path = require('path');
var favicon = require('serve-favicon'); //icone du site
var logger = require('morgan'); //utilisateurs logging
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs'); //handlebars : systeme templating engine
var session = require('express-session'); //cookie sess
var index = require('./routes/index');
var app = express();

// INITIALISATION DES VIEWS
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.disable('etag')

// AFFICHER UNE INCONE A CÔTÉ DU TITLE
app.use(favicon(path.join(__dirname, 'public', 'img/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}))

app.use(express.static(path.join(__dirname, 'public')));

// res.locals = objet passé au hbs
app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});

app.use('/api', index); // inclu toutes les routes du site

// envoie une erreur 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// gestionnaire d'erreurs
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // renvoie la page d'erreurs
  res.status(err.status || 500);
});

app.listen(8080, function() {
  console.log("Let's goooo");
});

module.exports = app;
