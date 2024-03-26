const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/quiz_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors({
    origin: 'http://localhost:3000' 
  }));
app.use(bodyParser.json());

const topicsRouter = require('./routes/topics');
const questionsRouter = require('./routes/questions');
const usersRouter = require('./routes/users');
const resultsRouter = require('./routes/results');
app.use('/api/topics', topicsRouter);
app.use('/api/questions', questionsRouter);
app.use('/api/users', usersRouter);
app.use('/api/results', resultsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
