const LocationModel = require('../models/location_model');

function getLocationFromId(req, res) {
    new LocationModel().getLocation(req.params.id).then(results => {
        res.json(results)
    }, err => {
        res.status(400).json(err);
    });
}

async function addLocation(req, res) {
    const location = await LocationModel.build(req.body);

    new LocationModel().addLocation(location).then(results => {
        res.json(results);
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
    new LocationModel().deleteLocation(req.params.id).then(results => {
        res.json(results);
    }, err => {
        res.status(400).json(err);
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