'use client';

import Key from '../components/Key';

export default function Keyboard(props: {}) {
  return (
    <div id="keyboard-cont">
      <div className="first-row">
        <Key value="q" />
        <Key value="w" />
        <Key value="e" />
        <Key value="r" />
        <Key value="t" />
        <Key value="y" />
        <Key value="u" />
        <Key value="i" />
        <Key value="o" />
        <Key value="p" />
      </div>
      <div className="second-row">
        <Key value="a" />
        <Key value="s" />
        <Key value="d" />
        <Key value="f" />
        <Key value="g" />
        <Key value="h" />
        <Key value="j" />
        <Key value="k" />
        <Key value="l" />
      </div>
      <div className="third-row">
        <Key value="Del" />
        <Key value="z" />
        <Key value="x" />
        <Key value="c" />
        <Key value="v" />
        <Key value="b" />
        <Key value="n" />
        <Key value="m" />
        <Key value="Enter" />
      </div>
    </div>
  );
}
