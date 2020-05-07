import React from 'react';
import { Input } from 'antd';
import { UserOutlined, BellFilled, SettingFilled } from '@ant-design/icons';
import { Layout } from 'antd';
const { Header } = Layout;

export const TitleBar = () => (
  <Header
    className='site-layout-sub-header-background' // style={{ padding: 0 }}
  >
    <div className='selected-menu-item'>
      <>&nbsp; MAINTENNACE SUMMARY</>
      &nbsp;&nbsp;
      <>
        <Input className='search' placeholder='Search...' />
        &nbsp;&nbsp; &nbsp;&nbsp;
        <UserOutlined />
        &nbsp;&nbsp;
        <BellFilled />
        &nbsp;&nbsp;
        <SettingFilled />
      </>
    </div>
  </Header>
);
