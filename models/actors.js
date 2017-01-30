"use strict";
var mongoose = require("mongoose");
var actorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 10
    },
    lastName: {
        type: String,
        required: true,
        validate: {
            validator: function (value) { return value !== 'Hamill'; },
            message: '{VALUE} is not an actor!'
        }
    },
    hasAcademyAward: {
        type: Boolean,
        default: false
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Actor', actorSchema);
