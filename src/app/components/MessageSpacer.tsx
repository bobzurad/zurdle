'use client';

import { Typography } from 'antd';

const { Title } = Typography;

export default function MessageSpacer() {
  return (
    <Title level={3}>
      &nbsp;
      <br />
      &nbsp;
    </Title>
  );
}
