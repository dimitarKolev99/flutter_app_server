const express = require('express');
const router = express.Router();
const Product = require('../models/product');


router.get('/product/:id', function(req, res, next) {
    console.log(req.params)
    Product.find({ 'id': req.params.id }).then(function(products) {
        res.send(products);
    })
    .catch(next);
});

//get a list of products from the db
router.get('/product', function(req, res, next) {
    Product.find({}).then(function(products) {
        res.send(products);
    });
});



/* router.get('/product/category', function(req, res, next) {
    Product.find({ category: category }).then(function(products) {
        res.send(products);
    });
}); */


//add a new ninja to the db
router.post('/product', function(req, res, next) {
    Product.create(req.body).then(function(product) {
        res.send(product);
    })
    .catch(next);
});

/* //update a ninja in the db
router.put('/ninjas/:id', function(req, res, next) {
    Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function(ninja) {
        res.send(ninja);
    })
    .catch(next);
});


//delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next) {
    Ninja.findByIdAndRemove({ _id: req.params.id })
        .then(function(ninja) {
            res.send(ninja);
        })
        .catch(next);
}); */

module.exports = router;