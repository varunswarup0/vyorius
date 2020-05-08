import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { HamBurger } from './HamBurger';
import { HotDog } from './HotDog';
import './App.css';

class Home extends Component {
  render() {
    return (
      <Layout className='layout'>
        <HamBurger />
        <HotDog />
      </Layout>
    );
  }
}

export default Home;
