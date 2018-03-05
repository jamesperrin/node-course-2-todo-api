//Object destructuring
// var user = { name: 'Andrew', age: 25 };
// var { name } = user;

// MongoDB module v2
//const MongoClient = require('mongodb').MongoClient;
//Using Object destructuring
const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
  if (err) {
    return console.log('Unable to connection to MongDB server');
  }

  console.log('Connected to MongoDB server');


  //findOneAndUpdate
  // @see https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/#db.collection.findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //     _id: new ObjectID('5a9db51810e2076b418b10e8')
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   });

  //findOneAndUpdate
  // @see https://docs.mongodb.com/manual/reference/operator/update/inc/#up._S_inc
  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5a94961ad6e5ac378689aeb6')
    }, {
      $set: {
        name: 'Bob'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    })
    .then((result) => {
      console.log(result);
    });

  db.close();
});