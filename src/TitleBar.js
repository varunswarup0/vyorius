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
      MAINTENNACE SUMMARY
      <Input className='search' placeholder='Search...' />
      <UserOutlined />
      <BellFilled />
      <SettingFilled />
    </div>
  </Header>
);
