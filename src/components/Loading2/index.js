import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';
import {Content} from './style'
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
        color: 'red'
    }}
    spin
  />
);

const App = () => <Content><Spin indicator={antIcon} /></Content>;

export default App;