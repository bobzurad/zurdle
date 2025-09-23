'use client';

import { useState } from 'react';
import { useAtom } from 'jotai';
import { Layout, Button, Flex, Space, Input, Typography } from 'antd';
import 'animate.css';
import { MAX_WORD_LENGTH, mainAtom, solutionAtom } from './context/atoms';
import { SOLUTION } from './context/words';
import Gameboard from './components/Gameboard';
import Keyboard from './components/Keyboard';
import Message from './components/Message';
import MessageSpacer from './components/MessageSpacer';

const { Text, Title } = Typography;

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [customWord, setCustomWord] = useState('');
  const [state] = useAtom(mainAtom);
  const [solution, setSolution] = useAtom(solutionAtom);

  console.log(SOLUTION);

  return (
    <Layout>
      <Flex style={{ height: '100vh' }} align="center" justify="center" wrap>
        {solution.length > 1 && (
          <>
            <div className="zurdleTitle">
              <Title level={2}>Zurdle</Title>
            </div>
            {!state.solved && state.numberOfGuessesRemaining > 0 && (
              <MessageSpacer />
            )}
            {state.solved && (
              <Message type="success" buttonColor="green" message="Hooray!!!" />
            )}
            {!state.solved && state.numberOfGuessesRemaining === 0 && (
              <Message
                type="danger"
                buttonColor="danger"
                message={'Sorry. The word was: ' + solution.toUpperCase()}
              />
            )}
            <Gameboard />
            <Keyboard />
          </>
        )}
        {solution.length === 0 && (
          <>
            {!showForm && (
              <Flex gap="middle">
                <Button variant="solid" onClick={() => setShowForm(true)}>
                  Enter a Word
                </Button>
                <Button variant="solid" onClick={() => setSolution(SOLUTION)}>
                  Use Random Word
                </Button>
              </Flex>
            )}
            {showForm && (
              <Flex justify="center" vertical>
                <Text strong>Enter a 5 letter word for someone to guess:</Text>
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
