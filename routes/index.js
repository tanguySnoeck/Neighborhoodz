const locationController = require('../controllers/location_controller');
const categoryController = require('../controllers/category_controller');
const express = require('express');

const router = express.Router();

router.get('/location/:id', locationController.getLocationFromId);
router.get('/location', locationController.getAllLocations);
router.post('/location', locationController.addLocation);
router.delete('/location/:id', locationController.deleteLocation);
router.put('/location/:id', locationController.updateLocation);

router.get('/category/:id', categoryController.getCategory);
router.get('/category', categoryController.getAllCategories);
router.post('/category', categoryController.addCategory);
router.delete('/category/:id', categoryController.deleteCategory);
router.put('/category/:id', categoryController.updateCategory);

module.exports = router;