const express = require('express');
const bodyParser = require('body-parser');

const {
  ObjectID
} = require('mongodb');

const {
  mongoose
} = require('./db/mongoose');
const {
  Todo
} = require('./models/todo');
const {
  User
} = require('./models/user');

const app = express();

app.use(bodyParser.json());

// POST TODOS
app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET TODOS
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    });
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET /todos/1234567
app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send('Invalid Todo.');
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send('Unable to find Todo.');
    }

    res.send({
      todo
    });

  }).catch((e) => {
    res.status(400).send('Unable to find Todo.');
  });
});


//  @see https://stackoverflow.com/questions/14322989/first-heroku-deploy-failed-error-code-h10
app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})

module.exports = {
  app
};