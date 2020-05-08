import React from 'react';
import { Dropdown, Button, Layout } from 'antd';
import { DownOutlined, RocketFilled } from '@ant-design/icons';
import { DropMenu } from './DropMenu';
import { SideMenu } from './SideMenu';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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
      {/* <img src={require('./images/user.png')} alt='user' /> */}
      <Avatar size={64} icon={<UserOutlined />} />
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
