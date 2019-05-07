// Dépendances
var express = require('express'); // module express
var router = express.Router(); //router exporté
var mysql = require('mysql'); //module MySQL
var conn = require('./oldConnection'); //notre connexion à la BdD
var connection = conn.connection(); //notre connexion à la BdD
var fs = require('fs'); // module permettant lecture de fichiers
var locations;
const locationController = require('../controllers/location_controller');

// on présente les données de ma BdD - table 'locations'
connection.query('SELECT * FROM neighborhoodz.locations', function (err, rows) {
    if (err) throw err;
    locations = rows;
});  //pareil

// on présente les données de ma BdD -  table 'categories'
connection.query('SELECT * FROM neighborhoodz.categories', function (err, rows) {
    if (err) throw err;
    categories = rows;
});  //pareil

// ROUTE POINTANT LA HOMEPAGE 
router.get('/', function (req, res, next) {
  
  res.render('index', 
  { 
    title: 'Neighborhoodz',
    locations:locations
  }
  );
});

// ROUTE POINTANT LA PAGE ADMIN 
router.get('/admin', function (req, res, next) {
  
  res.render('admin', 
  { 
    title: 'Neighborhoodz',
    locations:locations
  }
  );
});

// ROUTE POINTANT L'EDITION DES LOCATIONS

router.get('/admin/edit/:id', function (req, res, next) {
  var locationId = req.params.id;
  var location = locations.filter(function(item){
    return item.id_location == locationId;
    })[0];  
  res.render('edit', 
  { 
    title: locations.title,
    location: location,
    categories: categories
  }
  );
});

// ROUTE POINTANT LA SUPPRESSION DES LOCATIONS
router.get('/admin/remove/:id',function(req,res,next){
  var locationId = req.params.id;
  var location = locations.filter(function(item){
    return connection.query("DELETE FROM neighborhoodz.locations WHERE id_location = '" + locationId  + "' "), function (err, result){
      if(err) throw err;
      console.log("a été supprimé : "+ result.affectedRows);
    };
  });
  res.render('index')
});


//--------- ROUTES VERS LES AUTRES PAGES GÉNÉRALES DU SITE

router.get('/:id', function(req,res,next){
  var locationId = req.params.id;
  
  res.render('location_card',
  {
    title:'Neighborhoodz'
  });
});

// EXPORTATION DU MODULE ROUTER
module.exports = router;
