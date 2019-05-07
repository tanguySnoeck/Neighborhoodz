const CategoryModel = require('../models/category_model');

function getCategory(req, res) {
    new CategoryModel().getCategory(req.params.id).then(results => {
        res.json(results);
    }, err => {
        res.status(400).json(err)
    });
}

async function addCategory(req, res) {
    category = await CategoryModel.build(req.body);

    new CategoryModel().addCategory(category).then(results => {
        res.status(200).json(results);
    }, err => {
        res.status(400).json(err);
    });
}

function getAllCategories(req, res) {
    new CategoryModel().getAllCategories().then(results => {
        res.json(results);
    }, err => {
        res.status(400).json(err);
    });
}

function deleteCategory(req, res){
    new CategoryModel().deleteCategory(req.params.id).then(results => {
        res.json(results);
    }, err => {
        res.status(400).json(err);
    });
}

function updateCategory(req, res) {
    new CategoryModel().updateCategory(req.params.id, req.body).then(results => {
        res.json(results);
    }, err => {
        res.status(400).json(err);
    });
}
module.exports = {
    getCategory,
    addCategory,
    getAllCategories,
    deleteCategory,
    updateCategory
}