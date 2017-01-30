"use strict";
var mongoose = require("mongoose");
var animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    kind: {
        enum: ['bear', 'cat', 'horse'],
        type: String,
        required: true
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Animal', animalSchema);
