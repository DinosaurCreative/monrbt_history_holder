const mongoose = require('mongoose');
const moment = require('moment');

const remindersHistorySchema = new mongoose.Schema({
  actionType: {
    type: String,
    required: true,
  },
  addedAtDay: {
    type: String,
    required: true,
  },
  addedAtTime: {
    type: String,
    required: true,
  },
  reminderId: {
    type: String,
    required: true,
  },
  previousChatName: {
    type: String,
  },
  currentChatName: {
    type: String,
  }
}, { versionKey: false });

module.exports = mongoose.model('remindersHistory', remindersHistorySchema);
