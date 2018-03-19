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

// var id = '5aafd7ce40d34184137d3be711';

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');  
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log(todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }

//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id: ', todo);
// }).catch((e) => { 
//   console.log(e);
// });

User.findById('5ab000c11e7146266b9bf8d8').then((user) => {
  if (!user) {
    console.log('Unable to find User.');
  }

  console.log(JSON.stringify(user, undefined, 2));

}).catch((e) => {
  console.log(e);
});