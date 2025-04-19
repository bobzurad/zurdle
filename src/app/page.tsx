import Gameboard from './components/Gameboard';
import Keyboard from './components/Keyboard';
import { SOLUTION } from './context/words';

export default function Home() {
  console.log(`solution is: ${SOLUTION}`);
  return (
    <>
      <Gameboard />
      <Keyboard />
    </>
  );
}
