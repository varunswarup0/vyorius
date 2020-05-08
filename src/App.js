import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { HamBurger } from './HamBurger';
import { HotDog } from './HotDog';
import './App.css';

function App() {
  return (
    <Layout className='layout'>
      <HamBurger />
      <HotDog />
    </Layout>
  );
}

export default App;
