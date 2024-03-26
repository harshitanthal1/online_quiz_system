const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

router.post('/', async (req, res) => {
  const { userId, topicId, score } = req.body;
  const newResult = new Result({ userId, topicId, score });
  await newResult.save();
  res.json(newResult);
});

module.exports = router;
