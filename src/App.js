import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');
  const [jokeType, setJokeType] = useState('Chuck Norris');

  useEffect(() => {
    fetchJoke();
  }, [jokeType]);

  const fetchJoke = () => {
    let apiURL = '';
    if (jokeType === 'Chuck Norris') {
      apiURL = 'https://api.chucknorris.io/jokes/random';
    } else if (jokeType === 'Dad') {
      apiURL = 'https://icanhazdadjoke.com/';
    }

    fetch(apiURL, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (jokeType === 'Chuck Norris') {
          setJoke(data.value);
        } else if (jokeType === 'Dad') {
          setJoke(data.joke);
        }
      });
  };

  const handleJokeTypeChange = (event) => {
    setJokeType(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Joke Generator</h1>
      <div className="button-container">
        <button className="button" onClick={() => setJokeType('Chuck Norris')}>
          Chuck Norris Jokes
        </button>
        <button className="button" onClick={() => setJokeType('Dad')}>
          Dad Jokes
        </button>
      </div>
      <p className="joke">{joke}</p>
      <button className="button" onClick={fetchJoke}>
        Get Another Joke
      </button>
    </div>
  );
}

export default App;
