var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var AnimalService = (function () {
            function AnimalService($resource) {
                this.AnimalResource = $resource('/api/animals/:id');
            }
            AnimalService.prototype.get = function (id) {
                return this.AnimalResource.get({ id: id });
            };
            AnimalService.prototype.list = function () {
                return this.AnimalResource.query();
            };
            AnimalService.prototype.save = function (animal) {
                return this.AnimalResource.save({ id: animal._id }, animal).$promise;
            };
            AnimalService.prototype.remove = function (animalId) {
                return this.AnimalResource.remove({ id: animalId }).$promise;
            };
            return AnimalService;
        }());
        Services.AnimalService = AnimalService;
        angular.module('MyApp').service('animalService', AnimalService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
