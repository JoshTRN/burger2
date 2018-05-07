var connection = require('./connection.js');


orm = {
    selectAll: function(cb) {
        connection.query('SELECT * FROM burgers', function(err, result){
            if (err) throw err;
            cb(result)
        })
    },
    
    insertOne: function(name, cb) {
        connection.query('INSERT INTO burgers SET ?', {
            burger_name: name
        }, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    updateOne: function( id, cb) {
        connection.query('UPDATE burgers SET devoured = true WHERE ?', {
            id: id
        }, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    deleteOne: function(id, cb) {
        connection.query('DELETE FROM burgers WHERE ?', {
            id:id
        }, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;