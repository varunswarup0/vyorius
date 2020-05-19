import React from 'react';
import { Card, Col, Row, Typography, Space } from 'antd';

import { MedicineBoxFilled, HomeFilled, PhoneFilled } from '@ant-design/icons';
const { Title } = Typography;
const { Meta } = Card;
export class CardTable extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className='site-card-wrapper'>
        <Row gutter={15}>
          <Space>
            <Col span={6}>
              <Card
                style={{
                  width: 300,
                }}
                cover={
                  <>
                    <Title
                      level={3}
                      style={{
                        textAlign: 'center',
                        paddingTop: '1rem',
                      }}
                    >
                      BENSUPS HOSPITAL
                    </Title>
                    {/* </Button> */}
                    <img
                      alt='Medical Supplies'
                      src='https://tinyurl.com/yat2wy3j'
                    />
                  </>
                }
                actions={[<Title level={4}>BOOK NOW</Title>]}
              >
                <Meta
                  description={
                    <Space direction='vertical' key='Medicine'>
                      <Space size={'middle'}>
                        <HomeFilled />
                        Dwarka Sector 12
                      </Space>
                      <Space size={'middle'}>
                        <PhoneFilled />
                        011 4555 0000
                      </Space>
                      <Space size={'middle'}>
                        <MedicineBoxFilled />
                        Blood Collection Tubes & Medical Rubber Products
                      </Space>
                    </Space>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  width: 300,
                }}
                cover={
                  <>
                    <Title
                      level={3}
                      style={{
                        textAlign: 'center',
                        paddingTop: '1rem',
                      }}
                    >
                      BENSUPS HOSPITAL
                    </Title>
                    {/* </Button> */}
                    <img
                      alt='Medical Supplies'
                      src='https://tinyurl.com/yat2wy3j'
                    />
                  </>
                }
                actions={[<Title level={4}>BOOK NOW</Title>]}
              >
                <Meta
                  description={
                    <Space direction='vertical' key='Medicine'>
                      <Space size={'middle'}>
                        <HomeFilled />
                        Dwarka Sector 12
                      </Space>
                      <Space size={'middle'}>
                        <PhoneFilled />
                        011 4555 0000
                      </Space>
                      <Space size={'middle'}>
                        <MedicineBoxFilled />
                        Blood Collection Tubes & Medical Rubber Products
                      </Space>
                    </Space>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  width: 300,
                }}
                cover={
                  <>
                    <Title
                      level={3}
                      style={{
                        textAlign: 'center',
                        paddingTop: '1rem',
                      }}
                    >
                      BENSUPS HOSPITAL
                    </Title>
                    {/* </Button> */}
                    <img
                      alt='Medical Supplies'
                      src='https://tinyurl.com/yat2wy3j'
                    />
                  </>
                }
                actions={[<Title level={4}>BOOK NOW</Title>]}
              >
                <Meta
                  description={
                    <Space direction='vertical' key='Medicine'>
                      <Space size={'middle'}>
                        <HomeFilled />
                        Dwarka Sector 12
                      </Space>
                      <Space size={'middle'}>
                        <PhoneFilled />
                        011 4555 0000
                      </Space>
                      <Space size={'middle'}>
                        <MedicineBoxFilled />
                        Blood Collection Tubes & Medical Rubber Products
                      </Space>
                    </Space>
                  }
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{
                  width: 300,
                }}
                cover={
                  <>
                    <Title
                      level={3}
                      style={{
                        textAlign: 'center',
                        paddingTop: '1rem',
                      }}
                    >
                      BENSUPS HOSPITAL
                    </Title>
                    {/* </Button> */}
                    <img
                      alt='Medical Supplies'
                      src='https://tinyurl.com/yat2wy3j'
                    />
                  </>
                }
                actions={[<Title level={4}>BOOK NOW</Title>]}
              >
                <Meta
                  description={
                    <Space direction='vertical' key='Medicine'>
                      <Space size={'middle'}>
                        <HomeFilled />
                        Dwarka Sector 12
                      </Space>
                      <Space size={'middle'}>
                        <PhoneFilled />
                        011 4555 0000
                      </Space>
                      <Space size={'middle'}>
                        <MedicineBoxFilled />
                        Blood Collection Tubes & Medical Rubber Products
                      </Space>
                    </Space>
                  }
                />
              </Card>
            </Col>
          </Space>
        </Row>
      </div>
    );
  }
}
