const Sequelize = require('sequelize');
const sequelize = require('../routes/connection').sequelize;

class LocationModel extends Sequelize.Model{}

LocationModel.init({
    id_location: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    location_description: Sequelize.STRING,
    image: Sequelize.STRING,
    town: Sequelize.STRING,
    capacity: Sequelize.INTEGER
}, {
    sequelize,
    modelName: 'location',
    timestamps: false
})

LocationModel.prototype.addLocation = function (location) {
    return location.save();
}

LocationModel.prototype.getLocation = function(id) {
    return LocationModel.findOne({
        where: {id_location: id}
    });
}

LocationModel.prototype.getAllLocations = function() {
    return LocationModel.findAll();
}

LocationModel.prototype.deleteLocation = function(id) {
    return LocationModel.destroy({
        where: {id_location: id}
    });
}

LocationModel.prototype.updateLocation = function(id, changes) {
    return LocationModel.update(changes, {
        where: {id_location: id}
    });
}

LocationModel.prototype.deleteCategory = function(location_id) {
    const query = 'DELETE FROM location_category WHERE id_location = ?'
    return sequelize.query(query, {
      raw: true,
      replacements: [location_id],
      type: Sequelize.QueryTypes.DELETE
    })
}

LocationModel.prototype.addCategory = function(location_id, category_id) {
    const query = 'INSERT INTO location_category VALUES (?, ?)';
    return sequelize.query(query, {
        raw: true,
        replacements: [location_id, category_id],
        type: Sequelize.QueryTypes.INSERT
    })
}

module.exports = LocationModel;