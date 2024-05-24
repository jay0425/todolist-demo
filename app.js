/*

기본 셋팅 : npm세팅, express, mongoose, app 리스너

*/

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');

const app = express();
app.use(bodyParser.json());
app.use('/api', indexRouter);

const mongoURI = `mongodb://localhost:27017/todo-demo`;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log('mongoose connected');
  })
  .catch((err) => {
    console.log('DB connection fail', err);
  });

app.listen(5001, () => {
  console.log('server on 5001');
});
