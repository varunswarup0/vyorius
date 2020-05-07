import React from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './SideMenu.css';

function SideMenu() {
  return (
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
  );
}

export default SideMenu;
