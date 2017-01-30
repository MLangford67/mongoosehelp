namespace MyApp.Services {


  export class AnimalService {
      private AnimalResource;

      public get(id) {
        return this.AnimalResource.get({id:id});
      }

      public list() {
        return this.AnimalResource.query();
      }

      public save(animal) {
        return this.AnimalResource.save({id:animal._id}, animal).$promise;
      }

      public remove(animalId) {
        return this.AnimalResource.remove({id:animalId}).$promise;
      }

      constructor($resource:ng.resource.IResourceService) {
        this.AnimalResource = $resource('/api/animals/:id');
      }
  }

  angular.module('MyApp').service('animalService', AnimalService);
}


// The AnimalService in the above code has four methods:
//
// get() - retrieves an animal with a matching id.
// list() - retrieves all of the animals.
// save() - either creates or updates an animal.
// remove() - deletes an animal with a matching id.
