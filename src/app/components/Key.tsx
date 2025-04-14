'use client';

import { useState } from 'react';
import { useAtom } from 'jotai';
import { mainAtom } from '../context/atoms';

export default function Key(props: { value: String }) {
  const [value] = useState(props.value);
  const [state, setState] = useAtom(mainAtom);

  const keyClick = (e: any) => {
    if (state.currentGuess.length === state.wordLength) {
      return;
    }

    // TODO: we shouldn't update the DOM here. The DOM should be a reflection of the state
    let row =
      document.getElementsByClassName('letter-row')[
        state.numberOfGuesses - state.numberOfGuessesRemaining
      ];
    let box = row.children[state.currentGuess.length];
    box.textContent = value.toUpperCase();
    box.classList.add('filled-box');
    state.currentGuess.push(value);
    setState(state);
  };

  return (
    <>
      <button className="keyboard-button" onClick={keyClick}>
        {value}
      </button>
    </>
  );
}
