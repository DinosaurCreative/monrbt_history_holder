const RemindersHistory = require('../models/remindersHistory');

module.exports.getHistory = (req, res) => {
  RemindersHistory.find({reminderId: 123})
    .then(history => res.send({req}))
    .catch(() => res.status(500).send('Ошибка на серваке'))
}

module.exports.postAction = (req, res) => {
  const { actionType, reminderId } = req.body;
  RemindersHistory.create({
    actionType,
    reminderId
  })
  .then((r) => res.send(r))
  .catch(() => res.status(500).send('Ошибка при добавления истории экшона'))
}
