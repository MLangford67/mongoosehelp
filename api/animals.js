"use strict";
var express = require("express");
var animal_1 = require("../models/animal");
var router = express.Router();
router.get('/', function (req, res) {
    animal_1.default.find().then(function (animals) {
        res.json(animals);
    }).catch(function (err) {
        res.status(500);
        console.error(err);
    });
});
router.get('/:id', function (req, res) {
    animal_1.default.findById(req.params['id']).then(function (animal) {
        res.json(animal);
    });
});
router.post('/', function (req, res) {
    var animal = new animal_1.default();
    animal.name = req.body.name;
    animal.kind = req.body.kind;
    animal.save().then(function (newAnimal) {
        res.json(newAnimal);
    }).catch(function (err) {
        res.status(400).json(err);
    });
});
router.post('/:id', function (req, res) {
    var animalId = req.params.id;
    animal_1.default.findById(animalId).then(function (animal) {
        animal.name = req.body.name;
        animal.kind = req.body.kind;
        animal.save().then(function (updatedAnimal) {
            res.json(updatedAnimal);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    }).catch(function () {
        res.sendStatus(404);
    });
});
router.delete('/:id', function (req, res) {
    var animalId = req.params.id;
    animal_1.default.remove({ _id: animalId }).then(function () {
        res.sendStatus(200);
    }).catch(function (err) {
        res.status(500);
        console.log(err);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
