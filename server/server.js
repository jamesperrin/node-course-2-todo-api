const express = require('express');
const bodyParser = require('body-parser');

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

//  @see https://stackoverflow.com/questions/14322989/first-heroku-deploy-failed-error-code-h10
app.listen(process.env.PORT || 3000, function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})

module.exports = { app };