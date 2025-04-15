'use client';

import { useState } from 'react';
import { useAtomValue } from 'jotai';
import { mainAtom } from '../context/atoms';

export default function Box(props: {
  className: string;
  rowNumber: number;
  boxNumber: number;
}) {
  const [className] = useState(props.className);
  const [rowNumber] = useState(props.rowNumber);
  const [boxNumber] = useState(props.boxNumber);

  const state = useAtomValue(mainAtom);

  let value = '';

  if (
    state.guesses.length >= rowNumber &&
    state.guesses[rowNumber] &&
    state.guesses[rowNumber].length >= boxNumber
  ) {
    value = state.guesses[rowNumber][boxNumber].toUpperCase();
  }

  return (
    <div className={className} key={'r' + rowNumber + 'k' + boxNumber}>
      {value}
    </div>
  );
}
