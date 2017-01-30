var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(animalService) {
                this.animalService = animalService;
                this.animal = {};
                this.animals = this.animalService.list();
            }
            HomeController.prototype.save = function () {
                var _this = this;
                this.animalService.save(this.animal).then(function () {
                    _this.animals = _this.animalService.list();
                    _this.animal = {};
                }).catch(function (err) {
                    console.error(err);
                });
            };
            HomeController.prototype.remove = function (animalId) {
                var _this = this;
                this.animalService.remove(animalId).then(function () {
                    _this.animals = _this.animalService.list();
                }).catch(function (err) {
                    console.error(err);
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var EditController = (function () {
            function EditController(animalService, $state, $stateParams) {
                this.animalService = animalService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                var animalId = $stateParams['id'];
                this.animal = this.animalService.get(animalId);
            }
            EditController.prototype.save = function () {
                var _this = this;
                this.animalService.save(this.animal).then(function () {
                    _this.$state.go('home');
                }).catch(function (err) {
                    console.error(err);
                });
            };
            return EditController;
        }());
        Controllers.EditController = EditController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
