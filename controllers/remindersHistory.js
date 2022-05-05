const RemindersHistory = require('../models/remindersHistory');

module.exports.getHistory = (req, res) => {
  RemindersHistory.find({reminderId: req.query.reminderId})
    .then(history => res.send(history))
    .catch(() => res.status(500).send('Ошибка на серваке'))
}

module.exports.postAction = (req, res) => {
  RemindersHistory.create({
    actionType: req.body.params.actionType,
    reminderId: req.body.params.reminderId,
  })
  .then((msg) => res.status(200).send('Добавлено'))
  .catch(() => res.status(5000).send('Ошибка при добавления истории экшона'))
}

module.exports.postActions = (req, res) => {
  RemindersHistory.create(req.body.params)
  .then((msg) => res.status(200).send('Добавлено'))
  .catch(() => res.status(5000).send('Ошибка при добавления истории экшона'))
}
