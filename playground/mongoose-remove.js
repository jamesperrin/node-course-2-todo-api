const {
  ObjectID
} = require('mongodb');

const {
  monngoose
} = require('./../server/db/mongoose');

const {
  Todo
} = require('./../server/models/todo');

const {
  User
} = require('./../server/models/user');

// Todo remove all
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '5ab02c4e2e58482733241ea4'}).then((todo) => { 
  console.log(todo);
});

//Todo.findByIdAndRemove
Todo.findByIdAndRemove('5ab02c4e2e58482733241ea4').then((todo) => { 
  console.log(todo);
});


