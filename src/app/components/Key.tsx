"use client";

import { MouseEventHandler, useState } from "react";

export default function Key(props: { value: String }) {

    const [value] = useState(props.value);

    const keyClick = (e: any) => {
        console.log(e.target);
        console.log(value);
    };

    return (
        <>
            <button className="keyboard-button" onClick={keyClick}>{value}</button>
        </>
    );
}