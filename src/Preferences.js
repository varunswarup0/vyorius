import React from 'react';
import { Dropdown } from 'antd';
import { Checkbox } from 'antd';
import { Card } from 'antd';
import { Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { Menu } from 'antd';

const { Title } = Typography;
const { Text } = Typography;
export const menu = (
  <Menu>
    <Menu.Item key='1'>5 PM - 6 PM</Menu.Item>
    <Menu.Item key='2'>6 PM - 7 PM</Menu.Item>
    <Menu.Item key='3'>7 PM - 8 PM</Menu.Item>
  </Menu>
);
export class Preferences extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
  render() {
    return (
      <Space direction='vertical' size='small'>
        <Title
          style={{
            paddingBottom: '0',
          }}
        >
          Select Delivery Type
        </Title>
        <Card
          style={{
            borderRadius: '10px 10px 10px 10px',
            textAlign: 'left',
            margin: '0',
          }}
        >
          {' '}
          <Space direction='vertical'>
            <Checkbox>
              <Space direction='vertical'>
                <Title
                  strong
                  type='warning'
                  level={3}
                  style={{
                    textAlign: 'left',
                    margin: '0',
                  }}
                >
                  &nbsp;Delivery
                </Title>
                <Text
                  strong
                  style={
                    {
                      // color: 'rgb(2, 162, 255)',
                    }
                  }
                >
                  {' '}
                  &nbsp;&nbsp;Schedule a delivery at your nearest station.{' '}
                </Text>
              </Space>
            </Checkbox>
            <Checkbox>
              <Space direction='vertical'>
                <Title
                  strong
                  type='warning'
                  level={3}
                  style={{
                    textAlign: 'left',
                    margin: '0',
                  }}
                >
                  &nbsp;Pick-up
                </Title>
                <Text
                  strong
                  style={
                    {
                      // color: 'rgb(2, 162, 255)',
                    }
                  }
                >
                  {' '}
                  &nbsp;&nbsp;Schedule a pickup from your your nearest station.{' '}
                </Text>
              </Space>
            </Checkbox>
          </Space>
        </Card>
        <br />
        <Title
          style={{
            paddingBottom: '0',
          }}
        >
          Select Delivery Location
        </Title>
        <Card
          style={{
            borderRadius: '10px 10px 10px 10px',
            textAlign: 'left',
          }}
        >
          <Space direction='vertical'>
            <Checkbox>
              <Space direction='vertical'>
                <Title
                  strong
                  type='warning'
                  level={3}
                  style={{
                    textAlign: 'left',
                    margin: '0',
                  }}
                >
                  &nbsp;Origin Address
                </Title>
                <Text
                  strong
                  style={
                    {
                      // color: 'rgb(2, 162, 255)',
                    }
                  }
                >
                  {' '}
                  &nbsp;&nbsp;We will let you know the nearest station to place
                  your package.{' '}
                </Text>
              </Space>
            </Checkbox>
            <Checkbox>
              <Space direction='vertical'>
                <Title
                  strong
                  type='warning'
                  level={3}
                  style={{
                    textAlign: 'left',
                    margin: '0',
                  }}
                >
                  &nbsp;Destination Address
                </Title>
                <Text
                  strong
                  style={
                    {
                      // color: 'rgb(2, 162, 255)',
                    }
                  }
                >
                  {' '}
                  &nbsp;&nbsp;We will let you know the nearest station to get
                  your package.{' '}
                </Text>
              </Space>
            </Checkbox>
          </Space>
        </Card>
        <br />
        <Space size={'large'}>
          <Title
            style={{
              paddingBottom: '0',
            }}
          >
            Select Time Slot{' '}
          </Title>
          <Dropdown overlay={menu}>
            <Button
              style={{
                height: '3rem',
                paddingBottom: '0rem',
                paddingTop: '0.5rem',
                // backgroundColor: 'black',
                // borderRadius: '25px 25px 25px 25px',
              }}
            >
              <Title
                level={4}
                // style={{
                //   color: 'white',
                // }}
              >
                5 PM - 6 PM &nbsp;{' '}
                <DownOutlined
                  style={{
                    fontSize: '0.9rem',
                    color: 'rgb(2, 162, 255)',
                  }}
                />
              </Title>
            </Button>
          </Dropdown>
        </Space>
        <br />
        <Button type='primary' shape='round' size={'large'} block>
          <Title
            level={4}
            style={{
              color: 'white',
            }}
          >
            NEXT
          </Title>
        </Button>
      </Space>
    );
  }
}
