const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  topicId: {
    type: Schema.Types.ObjectId,
    ref: 'Topic',
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
