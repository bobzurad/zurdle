import { atom } from 'jotai';

const NUMBER_OF_GUESSES = 6;

type MainModel = {
  guesses: string[][];
  currentGuessLetters: string[];
  numberOfGuesses: number;
  numberOfGuessesRemaining: number;
  wordLength: number;
};

//TODO: probably don't need this function
const initGuesses = () => {
  let guesses = [];
  for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
    guesses[i] = [];
  }
  return guesses;
};

export const mainAtom = atom({
  guesses: [],
  currentGuessLetters: [],
  numberOfGuesses: NUMBER_OF_GUESSES,
  numberOfGuessesRemaining: 6,
  wordLength: 5,
} as MainModel);

export const activeRowAtom = atom((get) => {
  const state = get(mainAtom);
  return state.numberOfGuesses - state.numberOfGuessesRemaining;
});
