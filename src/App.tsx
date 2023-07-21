import React from 'react';
import IMLogo from './icons/im-logo.png';
// Cannot find module './icons/im-logo.png' or its corresponding type declarations. ts(2307)
import './App.css';
import MyHeader from './components/Header';

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
