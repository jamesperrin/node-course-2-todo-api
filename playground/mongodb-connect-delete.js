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

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // deleteMany - Deletes duplicate documents/record
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // db.collection('Todos').deleteMany({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Users').deleteMany({
  //   name: 'Andrew'
  // }).then((result) => {
  //   console.log(result);
  // });

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // deleteOne - Deletes first matched document/record
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //findOneAndDetele - Deteles found document/record
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((docs) => {
  //   console.log(docs);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a973b57b064f481631f1320')
  }).then((docs) => {
    console.log(docs);
  });

  //db.close();
});