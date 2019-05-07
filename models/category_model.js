const Sequelize = require('sequelize');
const sequelize = require('../routes/connection').sequelize;

class CategoryModel extends Sequelize.Model {}

CategoryModel.init({
    id_category: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cat_name: Sequelize.STRING,
    cat_type: Sequelize.STRING,
    color: Sequelize.STRING,
}, {
    sequelize,
    modelName: 'category',
    timestamps: false
});

CategoryModel.prototype.addCategory = function (category) {
    return category.save();
}

CategoryModel.prototype.getCategory = function (id) {
    return CategoryModel.findOne({
        where: {id_category: id}
    });
}

CategoryModel.prototype.getAllCategories = function () {
    return CategoryModel.findAll();
}

CategoryModel.prototype.deleteCategory = function(id) {
    return CategoryModel.destroy({
        where: {id_category: id}
    });
}

CategoryModel.prototype.updateCategory = function(id, changes) {
    return CategoryModel.update(changes, {
        where : {id_category: id}
    });
}

module.exports = CategoryModel;