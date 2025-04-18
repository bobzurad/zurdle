'use client';

import { useState } from 'react';
import { useAtom } from 'jotai';
import { mainAtom } from '../context/atoms';

export default function Key(props: { value: string }) {
  const [value] = useState(props.value);
  const [state, setState] = useAtom(mainAtom);

  const keyClick = (e: any) => {
    if (state.currentGuessLetters.length === state.wordLength) {
      return;
    }

    state.currentGuessLetters.push(value);
    console.log(state);
    // TODO: do this when enter key is pressed
    // if (!state.guesses[currentRow]) {
    //   state.guesses.push(state.currentGuessLetters);
    // }
    setState({ ...state });
  };

  return (
    <>
      <button className="keyboard-button" onClick={keyClick}>
        {value}
      </button>
    </>
  );
}
