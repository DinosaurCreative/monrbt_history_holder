const RemindersHistory = require('../models/remindersHistory');

module.exports.getHistory = (req, res) => {
  const reminderId = req.params;
  RemindersHistory.find({reminderId: 123})
    .then(history => res.send(reminderIds))
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
