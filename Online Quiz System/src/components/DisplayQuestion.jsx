import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DisplayQuestion() {
  const { topicId } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get(`/api/questions/${topicId}`)
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, [topicId]);

  return (
    <div>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => (
          <li key={question._id}>{question.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayQuestion;
