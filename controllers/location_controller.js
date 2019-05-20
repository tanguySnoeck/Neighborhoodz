const LocationModel = require('../models/location_model');
const LocationCategoryModel = require('../models/location-category_model')

function getLocationFromId(req, res) {
    new LocationModel().getLocation(req.params.id).then(results => {
        res.json(results)
    }, err => {
        res.status(400).json(err);
    });
}

async function addLocation(req, res) {
    const categories = req.body.categories
    delete req.body['categories'] // Je supprime l'attribut 'cat_id' de l'objet req.body
    
    const locationModel = new LocationModel()
    const locationCategoryModel = new LocationCategoryModel()
    
    const location = await LocationModel.build(req.body);

    locationModel.addLocation(location).then(async result => {
      const location_id = result.id_location 

      for (let i = 0; i < categories.length; i++) {
        const location_category = await LocationCategoryModel.build({
          id_location: location_id,
          id_category: categories[i]
        })
  
        await locationCategoryModel.add(location_category)
      }
    }, err => {
      console.log(err)
      res.status(400).json(err)
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
    const locationCategoryModel = new LocationCategoryModel()
    const location_id = req.params.id

    locationCategoryModel.delete(location_id).then(result => { // Je supprime d'abord l'association catégorie - location
      locationModel.deleteLocation(location_id).then(result => { // Puis je supprime la location elle-même 
        res.json(result)
      }, err => {
        res.status(400).json(err)
      })
    }, err => {
      console.log(err)
      res.status(400).json(err)
    })
}

async function updateLocation(req, res) {
    const locationModel = new LocationModel()
    const locationCategoryModel = new LocationCategoryModel()

    const categories = req.body.categories
    const location_id = req.params.id
    
    await locationCategoryModel.delete(location_id)

    for (let i = 0; i < categories.length; i++) {
      try {
        const location_category = await LocationCategoryModel.build({
            id_location: location_id,
            id_category: categories[i]
        })
        await locationCategoryModel.add(location_category).catch(err => { throw err })
      } catch (err) {
        console.log(err)
        res.status(400).json(err)
        return
      }
    }
    
    locationModel.updateLocation(location_id, req.body).then(result => {
      res.json(result)
    }, err => {
      console.log(err)
      res.status(400).json(err)
    })
}

module.exports = {
    getLocationFromId,
    addLocation,
    getAllLocations,
    deleteLocation,
    updateLocation
}