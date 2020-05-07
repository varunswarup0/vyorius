import React from 'react';
import 'antd/dist/antd.css';
import { Dropdown, Layout, Menu, Button, message, Input } from 'antd';
import {
  RightOutlined,
  DownOutlined,
  RocketFilled,
  UserOutlined,
  BellFilled,
  SettingFilled,
} from '@ant-design/icons';
import './App.css';
const { Header, Content, Footer, Sider } = Layout;

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<RightOutlined />}>
      Multi Rotor Drone
    </Menu.Item>
    <Menu.Item key="2" icon={<RightOutlined />}>
      Fixed Wing Drone
    </Menu.Item>
    <Menu.Item key="3" icon={<RightOutlined />}>
      Single Rotor Helicopter
    </Menu.Item>
  </Menu>
);

function App() {
  return (
    <Layout className="layout">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo">
          <img src={require('./images/logo.png')} alt="logo" />
          &nbsp; VYORIUS
        </div>
        <div className="user">
          <img src={require('./images/user.png')} alt="user" />
        </div>
        <div className="user">MICHEL</div>
        <br />
        <center>
          <Dropdown overlay={menu}>
            <Button>
              <RocketFilled />
              Drone <DownOutlined />
            </Button>
          </Dropdown>
        </center>
        <br />
        <Menu
          className="menu"
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ fontSize: '3px' }}
        >
          <Menu.Item className="menu-item" key="1" icon={<RightOutlined />}>
            MAINTANCE SUMMARY
          </Menu.Item>
          <Menu.Item className="menu-item" key="2" icon={<RightOutlined />}>
            FLIGHT LOGS
          </Menu.Item>
          <Menu.Item className="menu-item" key="3" icon={<RightOutlined />}>
            DAILY REPORT
          </Menu.Item>
          <Menu.Item className="menu-item" key="4" icon={<RightOutlined />}>
            MAINTANCE REPORT
          </Menu.Item>
          <Menu.Item className="menu-item" key="5" icon={<RightOutlined />}>
            INSPECTION REPORT
          </Menu.Item>
          <Menu.Item className="menu-item" key="6" icon={<RightOutlined />}>
            INCIDENT REPORT
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          // style={{ padding: 0 }}
        >
          <div className="selected-menu-item">
            <>&nbsp; MAINTENNACE SUMMARY</>
            {/* </div> */}&nbsp;&nbsp;
            <>
              <Input className="search" placeholder="Search..." />
              &nbsp;&nbsp;
              {/* <div className="icons"> */}
              &nbsp;&nbsp;
              <UserOutlined />
              &nbsp;&nbsp;
              <BellFilled />
              &nbsp;&nbsp;
              <SettingFilled />
            </>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {/* content */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
