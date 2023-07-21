import React from 'react';
import IMLogo from './icons/im-logo.png';
import './App.css';
import MyHeader from './components';

const App = () => {

  return (
    <>
      <MyHeader logo={IMLogo} color='#ffc0cb' >
        <p>This is JuTemp's Instant Messaging Application.</p>
      </MyHeader>
    </>
  )
}

export default App;
