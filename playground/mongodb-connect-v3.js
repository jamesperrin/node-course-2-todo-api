// MongoDB module v3

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(`mongodb://localhost:27017/TodoApp`, (err, client) => {
  if (err) {
    return console.log('Unable to connection to MongDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo\n', err);
    }

    console.log(JSON.stringify(results.ops, undefined, 2));
  });

  client.close();
});