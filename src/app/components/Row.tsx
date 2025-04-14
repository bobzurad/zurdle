"use client";

import { useState } from "react";

export default function Row(props: { rowNumber: number, rowLength: number }) {

    const [rowNumber] = useState(props.rowNumber);
    const [rowLength] = useState(props.rowLength);

    return (
        <>
            <div className="letter-row">
                {Array
                    .from({ length: rowLength })
                    .map((it, index) => <div className="letter-box" key={"r" + rowNumber + "k" + index} />)
                }
            </div>
        </>
    );
}