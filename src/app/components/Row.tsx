'use client';

import { useState } from 'react';
import Box from './Box';

export default function Row(props: { rowNumber: number; rowLength: number }) {
  const [rowNumber] = useState(props.rowNumber);
  const [rowLength] = useState(props.rowLength);

  return (
    <>
      <div className="letter-row">
        {Array.from({ length: rowLength }).map((it, index) => (
          <Box
            className={'letter-box'}
            rowNumber={rowNumber}
            boxNumber={index}
            key={'r' + rowNumber + 'k' + index}
          />
        ))}
      </div>
    </>
  );
}
