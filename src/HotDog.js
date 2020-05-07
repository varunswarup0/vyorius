import React from 'react';
import { Layout } from 'antd';
import { TitleBar } from './TitleBar';
import { WorkArea } from './WorkArea';
import { FootBar } from './FootBar';
export const HotDog = () => (
  <Layout>
    <TitleBar />
    <WorkArea />
    <FootBar />
  </Layout>
);
