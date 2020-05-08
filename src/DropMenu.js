import React from 'react';
import { Menu, message } from 'antd';
import { RightOutlined } from '@ant-design/icons';

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}
export const DropMenu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key='1' icon={<RightOutlined />}>
      Multi Rotor Drone
    </Menu.Item>
    <Menu.Item key='2' icon={<RightOutlined />}>
      Fixed Wing Drone
    </Menu.Item>
    <Menu.Item key='3' icon={<RightOutlined />}>
      Single Rotor Helicopter
    </Menu.Item>
  </Menu>
);
