'use client';

import { useState } from 'react';
import { useAtomValue } from 'jotai';
import { mainAtom, activeRowAtom, solutionAtom } from '../context/atoms';

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
  const solution = useAtomValue(solutionAtom);

  let value = '';
  let updatedClassName = className;

  const hasValue = () => {
    return value && value.length === 1;
  };

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
    value = state.currentGuessLetters[boxNumber];
  } else if (inGuessedRow()) {
    value = state.guesses[rowNumber][boxNumber];
  }

  // add css class for a box that has a letter in it
  updatedClassName = hasValue() ? className + ' filled-box' : className;

  // add css classes for guesses that have been made
  if (inGuessedRow()) {
    if (value === solution[boxNumber]) {
      updatedClassName += ' green-box';
    } else if (solution.includes(value)) {
      updatedClassName += ' yellow-box';
    } else {
      updatedClassName += ' gray-box';
    }
  }

  return (
    <div className={updatedClassName} key={'r' + rowNumber + 'k' + boxNumber}>
      {value}
    </div>
  );
}
