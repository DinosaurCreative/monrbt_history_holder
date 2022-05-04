const mongoose = require('mongoose');
const moment = require('moment');

const remindersHistorySchema = new mongoose.Schema({
  actionType: {
    type: String,
    required: true,
  },
  addedAt: {
    type: String,
    default: moment().format(),
  },
  reminderId: {
    type: Number,
    required: true,
  }
}, { versionKey: false });

module.exports = mongoose.model('remindersHistory', remindersHistorySchema);