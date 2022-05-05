const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const {dataBaseAdress} = require('./utils/config');

const { PORT = 3001 } = process.env;

const app = express();
app.use(cors('*'));
const router = require('./routes/remindersHistory');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(dataBaseAdress)
  .then(() => console.log(`connected to DB`))
  .catch((err) => console.log('notConnected', err));


app.use('/', router)

app.listen(PORT, () => {
  console.log(`Подключено к порту ${PORT}.`);
});
