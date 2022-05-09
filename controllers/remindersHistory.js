const { response } = require('express');
const RemindersHistory = require('../models/remindersHistory');

module.exports.getHistory = (req, res) => {
  RemindersHistory.find({reminderId: req.query.reminderId})
    .then(history => res.send(history))
    .catch(() => res.status(500).send('Ошибка на серваке'))
}

module.exports.postAction = (req, res) => {
  RemindersHistory.find({reminderId: req.query.params.reminderId})
    .then(response => {

      if(response.length < 1 ) {
        RemindersHistory.create([{
          actionType: 'Напоминание создано',
          addedAtDay: req.body.params.addedAtDay,
          addedAtTime: req.body.params.addedAtTime,
        },
        {
          actionType: req.body.params.actionType,
          reminderId: req.body.params.reminderId,
          addedAtDay: req.body.params.addedAtDay,
          addedAtTime: req.body.params.addedAtTime,
          currentChatName: req.body.params.currentChatName || ' ',
          previousChatName: req.body.params.previousChatName || ' ',
        }
      ]) 
        return 
      }
      RemindersHistory.create({
        actionType: req.body.params.actionType,
        reminderId: req.body.params.reminderId,
        addedAtDay: req.body.params.addedAtDay,
        addedAtTime: req.body.params.addedAtTime,
        currentChatName: req.body.params.currentChatName || ' ',
        previousChatName: req.body.params.previousChatName || ' ',
      })
    })
      .then((msg) => res.status(200).send(response))
      .catch(() => res.status(500).send('Ошибка при добавления истории экшона'))
}

module.exports.postActions = (req, res) => {
  console.log(req.body.params[0])
  RemindersHistory.create(req.body.params)
  .then((msg) => res.status(200).send('Добавлено'))
  .catch(() => res.status(5000).send('Ошибка при добавления истории экшона'))
}

