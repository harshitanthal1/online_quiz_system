import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get('/api/topics')
      .then(response => {
        setTopics(response.data);
      })
      .catch(error => {
        console.error('Error fetching topics:', error);
      });
  }, []);

  return (
    <div>
      <h1>Quiz Topics</h1>
      <ul>
        {topics.map(topic => (
          <li key={topic._id}>
            <Link to={`/displayquestion/${topic._id}`}>{topic.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
