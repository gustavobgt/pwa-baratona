import React from 'react';
import { askForPermissionToReceiveNotifications } from '../../firebase';

const Home = () => {
  return (
    <div>
      <h1 style={{ color: 'white' }}>Home</h1>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
		    <button onClick={askForPermissionToReceiveNotifications} >
          Click to receive notifications
        </button>
    </div>
  );
};

export default Home;
