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

  let value = '';
  let updatedClassName = className;

  if (
    activeRow === rowNumber &&
    state.currentGuessLetters.length >= boxNumber
  ) {
    value = state.currentGuessLetters[boxNumber];
  } else if (
    state.guesses.length >= rowNumber &&
    state.guesses[rowNumber] &&
    state.guesses[rowNumber].length >= boxNumber
  ) {
    value = state.guesses[rowNumber][boxNumber];
  }

  updatedClassName =
    value && value.length === 1 ? className + ' filled-box' : className;

  return (
    <div className={updatedClassName} key={'r' + rowNumber + 'k' + boxNumber}>
      {value}
    </div>
  );
}
