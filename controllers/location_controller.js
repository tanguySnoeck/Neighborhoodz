const LocationModel = require('../models/location_model');

function getLocationFromId(req, res) {
    new LocationModel().getLocation(req.params.id).then(results => {
        res.json(results)
    }, err => {
        res.status(400).json(err);
    });
}

async function addLocation(req, res) {
    const cat_id = req.body.cat_id
    delete req.body['cat_id']
    
    const location = await LocationModel.build(req.body);
    const locationModel = new LocationModel()
    
    locationModel.addLocation(location).then(result => {
        locationModel.addCategory(result.id_location, cat_id).then(result => {
          res.json(result)
        }, err => {
          console.log(err)
          res.status(400).json(err);
        })
    }, err => {
        res.status(400).json(err);
    })
    
}

function getAllLocations(req, res) {
    new LocationModel().getAllLocations().then(results => {
        res.json(results);
    }, err => {
        res.status(400).json(err);
    });
}

function deleteLocation(req, res) {
    const locationModel = new LocationModel()
    const location_id = req.params.id

    locationModel.deleteCategory(location_id).then(result => {
      locationModel.deleteLocation(location_id).then(result => {
        res.json(result)
      }, err => {
        res.status(400).json(err)
      })
    }, err => {
      console.log(err)
      res.status(400).json(err)
    })
}

function updateLocation(req, res) {
    new LocationModel().updateLocation(req.params.id, req.body).then(results => {
        res.json(results);
    }, err => {
        res.status(400).json(err);
    })
}

module.exports = {
    getLocationFromId,
    addLocation,
    getAllLocations,
    deleteLocation,
    updateLocation
}