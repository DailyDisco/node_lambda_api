import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    fetchWoohoo();
  }, []);

  const [myMessage, setMyMessage] = useState('');

  async function fetchWoohoo() {
    console.log('calling API');

    // get the name of the api and path from the aws-exports.js file
    API.get('myLambdaAPI', '/woohoo', {})
      .then((response) => {
        // handle success
        setMyMessage(response.success);
        console.log(`Response: ${response}`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <p>{myMessage}</p>
      </header>
    </div>
  );
}

export default App;
