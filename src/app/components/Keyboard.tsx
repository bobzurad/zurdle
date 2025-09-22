'use client';

import Key from '../components/Key';

export default function Keyboard(props: {}) {
  return (
    <div id="keyboard-cont">
      <div className="first-row">
        <Key value="q" className="keyboard-button" />
        <Key value="w" className="keyboard-button" />
        <Key value="e" className="keyboard-button" />
        <Key value="r" className="keyboard-button" />
        <Key value="t" className="keyboard-button" />
        <Key value="y" className="keyboard-button" />
        <Key value="u" className="keyboard-button" />
        <Key value="i" className="keyboard-button" />
        <Key value="o" className="keyboard-button" />
        <Key value="p" className="keyboard-button" />
      </div>
      <div className="second-row">
        <Key value="a" className="keyboard-button" />
        <Key value="s" className="keyboard-button" />
        <Key value="d" className="keyboard-button" />
        <Key value="f" className="keyboard-button" />
        <Key value="g" className="keyboard-button" />
        <Key value="h" className="keyboard-button" />
        <Key value="j" className="keyboard-button" />
        <Key value="k" className="keyboard-button" />
        <Key value="l" className="keyboard-button" />
      </div>
      <div className="third-row">
        <Key value="Enter" className="keyboard-button key-text-small" />
        <Key value="z" className="keyboard-button" />
        <Key value="x" className="keyboard-button" />
        <Key value="c" className="keyboard-button" />
        <Key value="v" className="keyboard-button" />
        <Key value="b" className="keyboard-button" />
        <Key value="n" className="keyboard-button" />
        <Key value="m" className="keyboard-button" />
        <Key value="Del" className="keyboard-button key-text-small" />
      </div>
    </div>
  );
}
