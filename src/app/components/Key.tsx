'use client';

import { useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { mainAtom, solutionAtom } from '../context/atoms';

export default function Key(props: { value: string }) {
  const [value] = useState(props.value);
  const [state, setState] = useAtom(mainAtom);
  const solution = useAtomValue(solutionAtom);

  const getClassName = (value: string, index: number) => {
    if (solution[index] === value) {
      return 'green-box';
    } else if (solution.includes(value)) {
      return 'yellow-box';
    } else {
      return 'gray-box';
    }
  };

  // GuessLetter that matches the value of this Key
  const getMatchedLetter = () => {
    if (state.guesses.length > 0) {
      for (let i = state.guesses.length - 1; i >= 0; i--) {
        const found = state.guesses[i].find((guessLetter, index) => {
          return guessLetter.value === value;
        });
        if (found) {
          return found;
        }
      }
    } else {
      return undefined;
    }
  };

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
      state.guesses.push(
        state.currentGuessLetters.map((guessLetter, index) => ({
          value: guessLetter.value,
          className: getClassName(guessLetter.value, index),
        }))
      );
      state.currentGuessLetters = [];
      state.numberOfGuessesRemaining--;
    } else {
      // letter key was pressed
      state.currentGuessLetters.push({ value, className: '' });
    }

    console.log(`setting updated state...`);
    console.log(state);

    setState({ ...state });
  };

  // css classes for guessed letters
  let className = 'keyboard-button';
  let matchedLetter = getMatchedLetter();
  if (matchedLetter) {
    className += ' ' + matchedLetter.className;
  }

  return (
    <>
      <button
        className={className}
        onClick={keyClick}
        disabled={state.numberOfGuessesRemaining === 0}
      >
        {value}
      </button>
    </>
  );
}
