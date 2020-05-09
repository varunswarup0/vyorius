import React from 'react';
import { Layout, Button, Space } from 'antd';
// import Map from './Map';
import GetGeoLoction from './GetGeoLocation';
const { Content } = Layout;
export const WorkArea = () => (
  <Content
    style={{
      margin: '24px 16px 0',
    }}
  >
    <div
      className='site-layout-background'
      style={{
        padding: 24,
        minHeight: 360,
      }}
    >
      <GetGeoLoction />
      {/* <Map
        // google={this.props.google}
        center={{ lat: 18.5204, lng: 73.8567 }}
        height='300px'
        zoom={15}
      /> */}
    </div>
  </Content>
);
