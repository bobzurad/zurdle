import Row from "./components/Row";
import Key from "./components/Key";

const NUMBER_OF_GUESSES = 6;

export default function Home() {
  return (
    <>
      <div id="game-board">
        {Array
          .from({ length: NUMBER_OF_GUESSES })
          .map((it, i) => <Row rowNumber={i} rowLength={5} key={i} />)
        }
      </div>
      <div id="keyboard-cont">
        <div className="first-row">
          <Key value="q" />
          <button className="keyboard-button">w</button>
          <button className="keyboard-button">e</button>
          <button className="keyboard-button">r</button>
          <button className="keyboard-button">t</button>
          <button className="keyboard-button">y</button>
          <button className="keyboard-button">u</button>
          <button className="keyboard-button">i</button>
          <button className="keyboard-button">o</button>
          <button className="keyboard-button">p</button>
        </div>
        <div className="second-row">
          <button className="keyboard-button">a</button>
          <button className="keyboard-button">s</button>
          <button className="keyboard-button">d</button>
          <button className="keyboard-button">f</button>
          <button className="keyboard-button">g</button>
          <button className="keyboard-button">h</button>
          <button className="keyboard-button">j</button>
          <button className="keyboard-button">k</button>
          <button className="keyboard-button">l</button>
        </div>
        <div className="third-row">
          <button className="keyboard-button">Del</button>
          <button className="keyboard-button">z</button>
          <button className="keyboard-button">x</button>
          <button className="keyboard-button">c</button>
          <button className="keyboard-button">v</button>
          <button className="keyboard-button">b</button>
          <button className="keyboard-button">n</button>
          <button className="keyboard-button">m</button>
          <button className="keyboard-button">Enter</button>
        </div>
      </div>
    </>
  );
}
