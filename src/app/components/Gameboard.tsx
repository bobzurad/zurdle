'use client';

import { useAtomValue } from 'jotai';
import { mainAtom } from '../context/atoms';
import Row from './Row';

export default function Gameboard() {
  const state = useAtomValue(mainAtom);

  return (
    <div id="game-board">
      {Array.from({ length: state.numberOfGuesses }).map((it, i) => (
        <Row rowNumber={i} rowLength={state.wordLength} key={i} />
      ))}
    </div>
  );
}
