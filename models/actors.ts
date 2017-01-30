// basic exmple of schema

// let movieSchema = new mongoose.Schema({
//   title: {
//     type:String,
//     required: true
//   },
//   dateReleased: {
//     type: Date,
//     required: true
//   },
//   rating: {
//     enum:['G', 'PG', 'R'],
//     type: String,
//     required: true
//   }
// });


// more complex schema example

// let actorSchema = new mongoose.Schema({
//   firstName: {
//     type:String,
//     required: true,
//     minlength: 3,
//     maxlength: 10
//   },
//   lastName: {
//     type:String,
//     required:true,
//     validate:{
//       validator:(value) => value !== 'Hamill',
//       message: '{VALUE} is not an actor!'
//     }
//   },
//   hasAcademyAward: {
//     type: Boolean,
//     default: false
//   }
// });

// A Mongoose schema is compiled into a Mongoose model.
// A model is a JavaScript constructor function that you can use to create document

// let Actor = mongoose.model('Actor', actorSchema);



//The advantage of using the create() method is that it enables you to create
// several actors at once. In the code above, two actors are added to the database.
// The disadvantage of using the create() method is that it does not provide you with
//statement completion -- you have to remember the names of all of the fields and your editor can't help you.

// Actor.create({
//   firstName:'Carrie',
//   lastName:'Fisher'
// },
// {
//   firstName:'Harrison',
//   lastName:'Ford'
// }).then(() => {
//   console.log('Actors created');
// }).catch((err) => {
//   console.error(err);
// });


import * as mongoose from 'mongoose';

export interface IActor extends mongoose.Document {
  firstName: string;
  lastName: string;
  hasAcademyAward: boolean
}

let actorSchema = new mongoose.Schema({
  firstName: {
    type:String,
    required: true,
    minlength: 3,
    maxlength: 10
  },
  lastName: {
    type:String,
    required:true,
    validate:{
      validator:(value) => value !== 'Hamill', 
      message: '{VALUE} is not an actor!'
    }
  },
  hasAcademyAward: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model<IActor>('Actor', actorSchema);
