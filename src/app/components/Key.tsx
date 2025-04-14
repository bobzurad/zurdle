'use client';

import { useState } from 'react';
import { useAtom } from 'jotai';
import { mainAtom } from '../context/atoms';

export default function Key(props: { value: String }) {
  const [value] = useState(props.value);
  const [state, setState] = useAtom(mainAtom);

  const keyClick = (e: any) => {
    console.log(e.target);
    console.log(value);
  };

  return (
    <>
      <button className="keyboard-button" onClick={keyClick}>
        {value}
      </button>
    </>
  );
}
