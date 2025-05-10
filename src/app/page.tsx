'use client';

import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import {
  ConfigProvider,
  Layout,
  Button,
  Flex,
  Space,
  Input,
  Typography,
} from 'antd';
import { PresetColors } from 'antd/es/theme/internal';
import { MAX_WORD_LENGTH, solutionAtom } from './context/atoms';
import { SOLUTION } from './context/words';
import Gameboard from './components/Gameboard';
import Keyboard from './components/Keyboard';

const { Text, Title } = Typography;

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [customWord, setCustomWord] = useState('');
  const [randomColor, setRandomColor] = useState('');
  const [solution, setSolution] = useAtom(solutionAtom);

  useEffect(() => {
    setRandomColor(
      PresetColors[Math.floor(Math.random() * PresetColors.length)]
    );
  }, []);

  console.log(SOLUTION);

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeBorderColor: randomColor,
            hoverBorderColor: randomColor,
          },
        },
      }}
    >
      <Layout>
        <Flex style={{ height: '100vh' }} align="center" justify="center" wrap>
          {solution.length > 1 && (
            <>
              <Title style={{ color: randomColor }}>Zurdle</Title>
              <Gameboard />
              <Keyboard />
            </>
          )}
          {solution.length === 0 && (
            <>
              {!showForm && (
                <Flex gap="middle">
                  <Button
                    variant="solid"
                    color={PresetColors.find((value) => value === randomColor)}
                    onClick={() => setShowForm(true)}
                  >
                    Enter a Word
                  </Button>
                  <Button
                    variant="solid"
                    color={PresetColors.find((value) => value === randomColor)}
                    onClick={() => setSolution(SOLUTION)}
                  >
                    Use Random Word
                  </Button>
                </Flex>
              )}
              {showForm && (
                <Flex justify="center" vertical>
                  <Text strong>Enter a word for someone to guess:</Text>
                  <Space>
                    <Space.Compact>
                      <Input
                        className="setWordInput"
                        maxLength={MAX_WORD_LENGTH}
                        autoFocus
                        onChange={(e) => setCustomWord(e.currentTarget.value)}
                      />
                      <Button
                        type="primary"
                        disabled={customWord.length < 5}
                        style={{ background: randomColor }}
                        color={PresetColors.find(
                          (value) => value === randomColor
                        )}
                        onClick={() => setSolution(customWord)}
                      >
                        Go!
                      </Button>
                    </Space.Compact>
                  </Space>
                </Flex>
              )}
            </>
          )}
        </Flex>
      </Layout>
    </ConfigProvider>
  );
}
