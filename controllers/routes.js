var express = require('express');
var app = express();
var burger = require('../models/burger.js');

app.get('/', function(req, res) {
    burger.all(function(burger_data){
        res.render('index', {burger_data})
    });
});

app.post('/burgers/update', function(req, res) {
    burger.update(req.body.burger_id, function(result){
        res.redirect('/');
    })
});

app.post('/burgers/add', function(req, res) {
    console.log(req.body);
    burger.insert(req.body.burger_name, function(result) {
        res.redirect('/');
    })
})

app.delete('/burgers/delete/:id', function(req, res) {
    console.log(req.params.id);
    burger.delete(req.params.id, function(result) {
        res.send(true);
    });
})

module.exports = app;