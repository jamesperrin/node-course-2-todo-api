//@see http://mongoosejs.com/docs/documents.html

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.Promise = global.Promise;


//@see http://mongoosejs.com/docs/validation.html
const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// User model
// email
// - Require it
// - Trim it
// - Set min length to 1
// - Validation for email
const User = mongoose.model('User', {
  email: {
    type: String,
    require: true,
    trim: true,
    minLength: 1
  }
});

// var newTodo = new Todo({
//   text: 'Cooked dinner',
//   completed: false
// });

// newTodo.save().then((doc) => {
//   console.log('Saved newTodo');
//   console.log(JSON.stringify(doc, undefined, 2))
// }, (e) => {
//   console.log('Unable to save todo.');
// });


// var otherNewTodo = new Todo({
//   text: 'Read a book'
// });

var NewUser = new User({
  email: 'JimBob@example.com'
});

NewUser.save().then((doc) => {
  console.log('Saved NewUser');
  console.log(JSON.stringify(doc, undefined, 2))
}, (e) => {
  console.log('Unable to save todo.');
});