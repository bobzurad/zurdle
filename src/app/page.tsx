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

const { Content, Footer } = Layout;
const { Text, Title, Paragraph } = Typography;

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [customWord, setCustomWord] = useState('');
  const [state] = useAtom(mainAtom);
  const [solution, setSolution] = useAtom(solutionAtom);

  console.log(SOLUTION);

  return (
    <Layout>
      <Content className="mainContent">
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
              <Flex
                gap="middle"
                style={{ flexDirection: 'column', alignItems: 'center' }}
              >
                <Title level={2}>Welcome to Zurdle!</Title>
                <Text type="secondary" style={{ marginBottom: '6rem' }}>
                  (a Wordle clone)
                </Text>
                <Paragraph>
                  There are two ways to play:
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;1) You may enter a word for someone
                  else to guess.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;2) You may play yourself with a random
                  word.
                </Paragraph>
                <Title level={4}>How would you like to play?</Title>
                <Button variant="solid" onClick={() => setShowForm(true)}>
                  Enter a Word
                </Button>
                <Button variant="solid" onClick={() => setSolution(SOLUTION)}>
                  Use Random Word
                </Button>
              </Flex>
            )}
            {showForm && (
              <Flex className="enterWord" justify="center" vertical>
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
      </Content>
      <Footer className="footer">
        This site was created by a loving father to make his daughter happy.
        Source code is available
        <a href="https://github.com/bobzurad/zurdle">&nbsp;here</a>.
      </Footer>
    </Layout>
  );
}
