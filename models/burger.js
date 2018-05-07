var orm = require('../config/orm.js');


burger = {
    all: function(cb) {
        orm.selectAll(function(res){
            cb(res);
        })
    },
    insert: function(name, cb) {
        orm.insertOne(name, cb)
    },

    update: function(id, cb) {
        orm.updateOne(id,cb);

    },
    delete: function(id, cb) {
        orm.deleteOne(id, cb);
    }
}

module.exports = burger;