'use client';

import { useState } from 'react';
import { Typography, Button } from 'antd';
import { BaseType } from 'antd/es/typography/Base';
import { ButtonProps } from 'antd/es/button/button';

const { Title } = Typography;

export default function Message(props: {
  message: string;
  type: BaseType;
  buttonColor: ButtonProps['color'];
}) {
  const [message] = useState(props.message);
  const [type] = useState(props.type);
  const [buttonColor] = useState(props.buttonColor);

  return (
    <div className="doneMessage">
      <Title
        level={3}
        type={type}
        className="animate__animated animate__backInRight"
      >
        {message}
      </Title>
      <Button
        color={buttonColor}
        variant="solid"
        className="animate__animated animate__backInRight"
        onClick={() => window.location.reload()}
      >
        Play Again
      </Button>
    </div>
  );
}
