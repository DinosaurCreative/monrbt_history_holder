const RemindersHistory = require('../models/remindersHistory');

module.exports.getHistory = (req, res) => {
  RemindersHistory.find({reminderId: req.query.reminderId})
    .then(history => res.send(history))
    .catch(() => res.status(500).send('Ошибка на серваке'))
}

module.exports.postAction = (req, res) => {
//"params", "query" ,"res", "body", "_body"
  const response = Object.keys(req);
  RemindersHistory.create({
    actionType: 'pause',
    reminderId: 13,
  })
  .then((r) => res.send({req: req.params}))
  .catch(() => res.status(500).send('Ошибка при добавления истории экшона'))
}
