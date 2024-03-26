const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  topicId: {
    type: Schema.Types.ObjectId,
    ref: 'Topic',
    required: true
  },
  text: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correctOptionIndex: {
    type: Number,
    required: true
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
