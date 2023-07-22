import React from 'react';
import './App.css';
import { MyHeader } from './components/Header';
import { Constant } from './components/constants.js';
import MyContent from './components/Content';
import { MyFooter } from './components/Footer';

const App = () => {
  console.log('App')
  return (
    <>
      <MyHeader logo={Constant.Header.logo} color='#ffc0cb' >
        <span>{Constant.Header.p}</span>
      </MyHeader>
      <MyContent bgImg={Constant.Content.bgImg} messages={Constant.Content.messages} />
      <MyFooter submitText={Constant.Footer.SubmitText} />
    </>
  )
}

export default App;
