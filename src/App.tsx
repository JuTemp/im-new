import React, { useState } from 'react';
import './App.css';
import { MyHeader } from './components/Header';
import { Constant } from './components/constants.js';
import MyContent from './components/Content';
import { MyFooter } from './components/Footer';
import { createWs } from './utils/Websocket';
import { Layout, Space } from 'antd';
import { MyRightSider } from './components/RightSider';
import { onConnect, onEnter, onLeave, onMessage } from './reducer/wsForPages';

const App = () => {

  const [status, setStatus] = useState(Constant)

  createWs(() => onConnect(status),
    () => onEnter(status),
    () => onLeave(status),
    () => onMessage(status))

  return (
    <Space direction="vertical" size={[0, 0]}>
      <MyHeader logo={status.Header.logo} color='#ffc0cb' >
        <span>{status.Header.p}</span>
      </MyHeader>
      <Layout hasSider >
        <MyContent bgImg={status.Content.bgImg} messages={status.Content.messages} />
        <MyRightSider users={status.RightSider.users} />
      </Layout>
      <MyFooter submitText={status.Footer.SubmitText} />
    </Space>
  )
}

export default App;
