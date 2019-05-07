// On exporte un module pour l'utiliser dans un autre fichier 
// Cette fonction 'connection' fait appel au module MYSQL (on a besoin de 
// lui pour faire le pont entre mon app et mes données dans ma BdD

module.exports = {
    connection: function () {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root'
        });

        connection.connect();
        return connection;
    }
};