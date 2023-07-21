import React from 'react';
import './App.css';
import MyHeader from './components/Header';
import { constant } from './components/constants.js';

const App = () => {

  return (
    <>
      <MyHeader logo={constant.Headers.logo} color='#ffc0cb' >
        <p>{constant.Headers.p}</p>
      </MyHeader>
    </>
  )
}

export default App;
