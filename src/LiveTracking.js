import React from 'react';
import { Space } from 'antd';
import { Checkbox } from 'antd';
import { Card } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
const { Text } = Typography;
export class LiveTracking extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <Space direction='vertical' size='small'>
        <br />
        <Title
          style={{
            paddingBottom: '0',
          }}
        >
          Delivery Tracker
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
            <Space direction='vertical'>
              <Space>
                <b
                  style={{
                    color: 'rgb(2, 162, 255)',
                  }}
                >
                  Order Details :
                </b>{' '}
                BloodTest Machine A-10{' '}
              </Space>
              <Space>
                <b
                  style={{
                    color: 'rgb(2, 162, 255)',
                  }}
                >
                  Order no. :
                </b>{' '}
                AMZA1097AS
              </Space>
            </Space>
          </Text>
        </Card>
        <img
          src={require('./images/GetGeoLocation.png')}
          alt='GetGeoLocation'
          style={{
            width: '25rem',
          }}
        />
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
                <b>Delivery Type :</b>
                <span
                  style={{
                    color: 'rgb(2, 162, 255)',
                  }}
                >
                  Rooftop Delivery{' '}
                </span>
              </Space>
              <Space>
                <b>Estimated time :</b> 12 mins
              </Space>
              <Space>
                <b>Time of Arrival :</b> 5:38 PM
              </Space>
            </Space>
          </Text>
        </Card>
        <Checkbox>
          <Text
            strong
            style={{
              color: 'rgb(2, 162, 255)',
            }}
          >
            {' '}
            Get notified before a minute of arrival{' '}
          </Text>
        </Checkbox>
      </Space>
    );
  }
}
