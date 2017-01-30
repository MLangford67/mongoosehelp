const connectionString:string = 'mongodb://Mlangford67:Carnifex6@ds159208.mlab.com:59208/piranhaspiderdb';

import * as mongodb from 'mongodb';

export default class Database {
  public static db:mongodb.Db;

  public static connect() {
    return mongodb.MongoClient.connect(connectionString).then((db) => {
        this.db = db;
    }).catch((err) => {
        console.error(err);
    });
  }
}


// const connectionString:string = 'mongodb://Mlangford67:Carnifex6@ds159208.mlab.com:59208/piranhaspiderdb';
//
mongoose.connect(connectionString).then(() => {
  // add sample data
  mongoose.connection.db.dropDatabase(() => {
      Animal.create({
         name: 'Fozzie Bear',
         kind: 'bear'
      },{
         name: 'Yogi Bear',
         kind: 'bear'
      },{
         name: 'Mister Ed',
         kind: 'horse'
      }).catch((err) => {
         console.error('failed to seed animals: ' + err.message);
         console.dir(err);
      });

 });
});
