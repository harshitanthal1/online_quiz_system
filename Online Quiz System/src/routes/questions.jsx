const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.get('/:topicId', async (req, res) => {
  const questions = await Question.find({ topicId: req.params.topicId });
  res.json(questions);
});

module.exports = router;
