import React from 'react';
import { Button, Space } from 'antd';
import { Card } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const { Text } = Typography;
export class HistoryTracker extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
  render() {
    return (
      <Space direction='vertical' size='large'>
        <Space size={'small'} direction='vertical'>
          <Title
            level={2}
            style={{
              paddingBottom: '0',
            }}
          >
            Welcome{' '}
            <span
              style={{
                color: 'rgb(2, 162, 255)',
              }}
            >
              Adam Sandler
            </span>
            <div>
              <Text
                strong
                style={{
                  fontSize: '0.8rem',
                }}
              >
                Amazon connected
              </Text>
            </div>
          </Title>
        </Space>
        <Space size={'small'} direction='vertical'>
          <Title level={4}>Upcoming Delivery</Title>
          <Card
            style={{
              borderRadius: '10px 10px 10px 10px',
            }}
          >
            <Text
              style={{
                fontSize: '0.8rem',
              }}
              type='secondary'
            >
              <Space direction='vertical'>
                <Space>
                  <b>Order no. :</b> AMZA1097AS
                </Space>
                <Space>
                  <b>Delivery Type :</b> Rooftop Delivery
                </Space>
                <Space>
                  <b>Time Slot :</b> 5pm - 6pm
                </Space>
              </Space>
            </Text>
          </Card>
        </Space>
        <Space>
          <Button shape='round' size={'large'} block>
            <b>QR code</b>
          </Button>
          <Button disabled shape='round' size={'large'} block>
            <b>Track</b>
          </Button>
        </Space>

        <Space direction='vertical' size='middle'>
          <Title level={4}>
            <br />
            Previous Delivery
          </Title>
          <Card
            style={{
              borderRadius: '10px 10px 10px 10px',
            }}
          >
            <Text
              style={{
                fontSize: '0.8rem',
              }}
              type='secondary'
            >
              &nbsp; No Previous Delivery
            </Text>
          </Card>
        </Space>
        <Button type='primary' shape='round' size={'large'} block>
          <Title
            level={4}
            style={{
              color: 'white',
            }}
          >
            NEW &nbsp;DELIVERY
          </Title>
        </Button>
      </Space>
    );
  }
}
