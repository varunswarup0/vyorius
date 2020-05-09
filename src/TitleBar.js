import React from 'react';
import { Input, Row, Col, Space } from 'antd';
import { UserOutlined, BellFilled, SettingFilled } from '@ant-design/icons';
import { Layout } from 'antd';
const { Header } = Layout;

export const TitleBar = () => (
  <Header
    className='site-layout-sub-header-background' // style={{ padding: 0 }}
  >
    <Row>
      <Col span={15}>
        <div className='title-bar-menu-item'>MAINTENNACE SUMMARY</div>
      </Col>
      <Col span={6}>
        <div className='title-bar-search'>
          <Input className='search' placeholder='Search...' />
        </div>
      </Col>
      <Col span={3}>
        <div className='title-bar-icons'>
          <Space size={'middle'}>
            <UserOutlined />
            <BellFilled />
            <SettingFilled />
          </Space>
        </div>
      </Col>
    </Row>
  </Header>
);
