'use client';

import { useState } from 'react';
import { useAtom } from 'jotai';
import { mainAtom } from '../context/atoms';

export default function Key(props: { value: string }) {
  const [value] = useState(props.value);
  const [state, setState] = useAtom(mainAtom);

  const keyClick = (e: any) => {
    if (
      (value.toUpperCase() === 'DEL' &&
        state.currentGuessLetters.length === 0) ||
      (value.toUpperCase() === 'ENTER' &&
        state.currentGuessLetters.length !== state.wordLength) ||
      (value.toUpperCase() !== 'DEL' &&
        value.toUpperCase() !== 'ENTER' &&
        state.currentGuessLetters.length === state.wordLength)
    ) {
      // we've reached one of the following invalid use cases:
      // - delete key was pressed when there's nothing to delete
      // - enter key was pressed before filling the row
      // - letter key was pressed after filling the row
      return;
    }

    console.log(`key pressed: ${value}`);

    if (value.toUpperCase() === 'DEL') {
      // delete key was pressed
      state.currentGuessLetters.pop();
    } else if (value.toUpperCase() === 'ENTER') {
      // enter key was pressed
      state.guesses.push(state.currentGuessLetters);
      state.currentGuessLetters = [];
      state.numberOfGuessesRemaining--;
    } else {
      // letter key was pressed
      state.currentGuessLetters.push(value);
    }

    console.log(`setting updated state...`);
    console.log(state);

    setState({ ...state });
  };

  return (
    <>
      <button
        className="keyboard-button"
        onClick={keyClick}
        disabled={state.numberOfGuessesRemaining === 0}
      >
        {value}
      </button>
    </>
  );
}
