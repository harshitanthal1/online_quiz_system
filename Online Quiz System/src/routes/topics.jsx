const express = require('express');
const router = express.Router();

const topics = [
  { _id: '1', name: 'Mathematics' },
  { _id: '2', name: 'Science' },
  { _id: '3', name: 'History' },
];

router.get('/', (req, res) => {
  res.json(topics);
});

module.exports = router;
