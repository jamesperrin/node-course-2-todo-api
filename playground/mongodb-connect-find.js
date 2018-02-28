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

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a972d2ff3cc78165c637728')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));

  // }, (err) => {
  //   console.log('Unable to fetch todos \n', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);

  // }, (err) => {
  //   console.log('Unable to fetch todos \n', err);
  // });

  db.collection('Users').find({
    name: 'Mike'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    console.log('Unable to fetch todos \n', err);
  });

  //db.close();
});