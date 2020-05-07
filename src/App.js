import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import './App.css';
import { HamBurger } from './HamBurger';
import { HotDog } from './HotDog';

function App() {
  return (
    <Layout className='layout'>
      <HamBurger />
      <HotDog />
    </Layout>
  );
}

export default App;
