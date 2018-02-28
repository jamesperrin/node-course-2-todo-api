//Object destructuring
// var user = { name: 'Andrew', age: 25 };
// var { name } = user;

// MongoDB module v2
//const MongoClient = require('mongodb').MongoClient;
//Using Object destructuring
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, db) => {
  if (err) {
    return console.log('Unable to connection to MongDB server');
  }

  console.log('Connected to MongoDB server');

  db.collection('Todos').insertOne({
    text: 'Walk the dog.',
    completed: true
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo\n', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // inser new do into User collection {name, age, location}
  // db.collection('Users').insertOne({
  //   name: 'James',
  //   age: 25,
  //   location: 'Spokane'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user\n', err);
  //   }

  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));

  // });

  db.close();
});