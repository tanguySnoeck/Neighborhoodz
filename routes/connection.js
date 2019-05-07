const Sequelize = require('sequelize')
// On exporte un module pour l'utiliser dans un autre fichier 
// Cette fonction 'connection' fait appel au module MYSQL (on a besoin de 
// lui pour faire le pont entre mon app et mes données dans ma Bd

const sequelize = new Sequelize('neighborhoodz', 'root', 'root', {dialect: 'mysql'})

module.exports = {
    sequelize
};