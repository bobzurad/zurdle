'use client';

import { useState } from 'react';
import { useAtom } from 'jotai';
import { Layout, Button, Flex, Space, Input, Typography } from 'antd';
import { MAX_WORD_LENGTH, solutionAtom } from './context/atoms';
import { SOLUTION } from './context/words';
import Gameboard from './components/Gameboard';
import Keyboard from './components/Keyboard';

const { Text } = Typography;

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [customWord, setCustomWord] = useState('');
  const [solution, setSolution] = useAtom(solutionAtom);

  console.log(SOLUTION);
  console.log(solution);

  return (
    <Layout>
      <Flex style={{ height: '100vh' }} align="center" justify="center" wrap>
        {solution.length > 1 && (
          <>
            <Gameboard />
            <Keyboard />
          </>
        )}
        {solution.length === 0 && (
          <>
            {!showForm && (
              <Flex gap="middle">
                <Button onClick={() => setShowForm(true)}>Enter a Word</Button>
                <Button onClick={() => setSolution(SOLUTION)}>
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
  );
}
