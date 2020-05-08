import React from 'react';
import { Dropdown, Button } from 'antd';
import { DownOutlined, RocketFilled } from '@ant-design/icons';
import { DropMenu } from './DropMenu';
import { SideMenu } from './SideMenu';
import { Layout } from 'antd';
const { Sider } = Layout;

export const HamBurger = () => (
  <Sider
    breakpoint='lg'
    collapsedWidth='0'
    onBreakpoint={(broken) => {
      console.log(broken);
    }}
    onCollapse={(collapsed, type) => {
      console.log(collapsed, type);
    }}
  >
    <div className='logo'>
      <img src={require('./images/logo.png')} alt='logo' />
      VYORIUS
    </div>
    <div className='user'>
      <img src={require('./images/user.png')} alt='user' />
    </div>
    <div className='user'>MICHEL</div>
    <br />
    <center>
      <Dropdown overlay={DropMenu}>
        <Button>
          <RocketFilled />
          Drone <DownOutlined />
        </Button>
      </Dropdown>
    </center>
    <br />
    <SideMenu />
  </Sider>
);
