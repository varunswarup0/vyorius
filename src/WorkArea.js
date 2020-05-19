import React from 'react';
import { Layout } from 'antd';
import { ChoiceToUser } from './ChoiceToUser';

// import { Preferences } from './Preferences';
// import { ConfirmationPage } from './ConfirmationPage';
// import { LiveTracking } from './LiveTracking';
// import { QRcode } from './QRcode';
// import { HistoryTracker } from './HistoryTracker';
// import GetGeoLoction from './GetGeoLocation';
// import { CardTable } from './CardTable';

const { Content } = Layout;

export const WorkArea = () => (
  <Content
    style={{
      margin: '24px 16px 0',
      textAlign: 'center',
    }}
  >
    <ChoiceToUser></ChoiceToUser>
  </Content>
);
