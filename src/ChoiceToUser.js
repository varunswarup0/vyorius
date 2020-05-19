import React from 'react';
import { Input } from 'antd';
import { Dropdown } from 'antd';
import { Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { Menu } from 'antd';

const { Title } = Typography;
export const menu = (
  <Menu>
    <Menu.Item key='1'>KN95 - COVID-19 Safety Face Mask</Menu.Item>
    <Menu.Divider />
    <Menu.Item key='2'>CPE Shoe cover</Menu.Item>
    <Menu.Divider />
    <Menu.Item key='3'>Disposable SMS Medical Gown</Menu.Item>
    <Menu.Divider />
    <Menu.Item key='4'>Medical Protective Goggles</Menu.Item>
    <Menu.Divider />
    <Menu.Item key='5'>Medical Infrared Thermometer</Menu.Item>
    <Menu.Divider />
    <Menu.Item key='6'>Hand Sanitizer</Menu.Item>
  </Menu>
);
export class ChoiceToUser extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
  render() {
    return (
      <Space direction='vertical' size='small'>
        <Title>
          <b>PRODUCT SPECIFICATION</b>
        </Title>
        <Title
          level={2}
          style={{
            paddingBottom: '0',
          }}
        >
          Select Product Type
        </Title>
        <Dropdown overlay={menu}>
          <Button
            style={{
              height: '3rem',
              paddingBottom: '0rem',
              paddingTop: '0.5rem',
            }}
          >
            <Title
              level={4} // style={{
            >
              Blood Collection Tubes &nbsp;{' '}
              <DownOutlined
                style={{
                  fontSize: '0.9rem',
                  color: 'rgb(2, 162, 255)',
                }}
              />
            </Title>
          </Button>
        </Dropdown>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Space size='small'>
          <Space direction={'vertical'}>
            <Title
              level={4}
              style={{
                fontSize: '1rem',
              }}
            >
              Name
            </Title>
            <Input placeholder='Name I' />
          </Space>
          <Space direction={'vertical'}>
            <Title
              level={4}
              style={{
                fontSize: '1rem',
              }}
            >
              No. of Units
            </Title>
            <Input placeholder='2' />
          </Space>
        </Space>
        <Space size='small'>
          <Space direction={'vertical'}>
            <Title
              level={4}
              style={{
                fontSize: '1rem',
              }}
            >
              Weight
            </Title>
            <Input placeholder='Kg' />
          </Space>
          <Space direction={'vertical'}>
            <Title
              level={4}
              style={{
                fontSize: '1rem',
              }}
            >
              Volume
            </Title>
            <Input placeholder='L' />
          </Space>
        </Space>
      </Space>
    );
  }
}
