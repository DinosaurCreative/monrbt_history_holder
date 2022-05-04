const express = require('express');
const mongoose = require('mongoose');
const PORT = 3001;

const app = express();
const router = require('./routes/remindersHistory');
const {dataBaseAdress} = require('./utils/config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(dataBaseAdress)
  .then(() => console.log(`connected to DB`))
  .catch((err) => console.log('notConnected', err));


app.use('/', router)

app.listen(PORT, () => {
  console.log(`Подключено к порту ${PORT}.`);
});