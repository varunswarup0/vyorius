import React from 'react';
import { Button, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;

export class QRcode extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <Space direction='vertical' size='small'>
        <Title
          level={2}
          style={{
            color: 'rgb(2, 162, 255)',
          }}
        >
          <br />
          <ArrowLeftOutlined /> Drone will scan <b>QR</b> code to drop package
        </Title>

        <img
          src={require('./images/QRCode.png')}
          style={{
            width: '25rem',
          }}
          alt='QRcode'
        />

        <Space>
          <Button shape='round' size={'large'} block>
            <b
              style={{
                color: 'rgb(2, 162, 255)',
                textDecoration: 'underline',
              }}
            >
              Help
            </b>
          </Button>
          <Button shape='round' size={'large'} block>
            <b>Share</b>
          </Button>
        </Space>
      </Space>
    );
  }
}
