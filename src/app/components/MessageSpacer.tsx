'use client';

import { Typography } from 'antd';

const { Title } = Typography;

export default function MessageSpacer() {
  return (
    <div className="doneMessage">
      <Title level={3}>
        &nbsp;
        <br />
        &nbsp;
      </Title>
    </div>
  );
}
