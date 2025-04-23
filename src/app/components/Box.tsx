'use client';

import { useState } from 'react';
import { useAtomValue } from 'jotai';
import { mainAtom, activeRowAtom } from '../context/atoms';

export default function Box(props: {
  className: string;
  rowNumber: number;
  boxNumber: number;
}) {
  const [className] = useState(props.className);
  const [rowNumber] = useState(props.rowNumber);
  const [boxNumber] = useState(props.boxNumber);

  const state = useAtomValue(mainAtom);
  const activeRow = useAtomValue(activeRowAtom);

  let guess = { value: '', className };

  const inActiveRow = () => {
    return (
      activeRow === rowNumber && state.currentGuessLetters.length >= boxNumber
    );
  };

  const inGuessedRow = () => {
    return (
      state.guesses.length >= rowNumber &&
      state.guesses[rowNumber] &&
      state.guesses[rowNumber].length >= boxNumber
    );
  };

  // read the value from the state
  if (inActiveRow()) {
    guess = state.currentGuessLetters[boxNumber];
  } else if (inGuessedRow()) {
    guess = state.guesses[rowNumber][boxNumber];
  }

  return (
    <div
      className={
        guess !== undefined ? className + ' ' + guess.className : className
      }
      key={'r' + rowNumber + 'k' + boxNumber}
    >
      {guess !== undefined ? guess.value : ''}
    </div>
  );
}
