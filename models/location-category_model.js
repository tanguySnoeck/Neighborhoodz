const Sequelize = require('sequelize');
const sequelize = require('../routes/connection').sequelize;

class LocationCategoryModel extends Sequelize.Model{}

LocationCategoryModel.init({
  id_location: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  id_category: {
    type: Sequelize.INTEGER,
    primaryKey: true
  }
}, {
  sequelize,
  modelName: 'location_category',
  tableName: 'location_category',
  timestamps: false
})

LocationCategoryModel.prototype.add = function(location_category) {
  return location_category.save()
}

LocationCategoryModel.prototype.update = function(id_location){}

LocationCategoryModel.prototype.delete = function(id_location) {
  return LocationCategoryModel.destroy({
    where: {id_location: id_location}
  })
}

module.exports = LocationCategoryModel