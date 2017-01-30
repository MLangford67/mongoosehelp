"use strict";
var connectionString = 'mongodb://Mlangford67:Carnifex6@ds159208.mlab.com:59208/piranhaspiderdb';
var mongodb = require("mongodb");
var Database = (function () {
    function Database() {
    }
    Database.connect = function () {
        var _this = this;
        return mongodb.MongoClient.connect(connectionString).then(function (db) {
            _this.db = db;
        }).catch(function (err) {
            console.error(err);
        });
    };
    return Database;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Database;
mongoose.connect(connectionString).then(function () {
    mongoose.connection.db.dropDatabase(function () {
        Animal.create({
            name: 'Fozzie Bear',
            kind: 'bear'
        }, {
            name: 'Yogi Bear',
            kind: 'bear'
        }, {
            name: 'Mister Ed',
            kind: 'horse'
        }).catch(function (err) {
            console.error('failed to seed animals: ' + err.message);
            console.dir(err);
        });
    });
});
