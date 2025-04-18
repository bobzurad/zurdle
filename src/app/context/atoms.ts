import { atom } from 'jotai';

const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;

type MainModel = {
  guesses: string[][];
  currentGuessLetters: string[];
  numberOfGuesses: number;
  numberOfGuessesRemaining: number;
  wordLength: number;
};

export const mainAtom = atom({
  guesses: [],
  currentGuessLetters: [],
  numberOfGuesses: NUMBER_OF_GUESSES,
  numberOfGuessesRemaining: NUMBER_OF_GUESSES,
  wordLength: WORD_LENGTH,
} as MainModel);

export const activeRowAtom = atom((get) => {
  const state = get(mainAtom);
  return state.numberOfGuesses - state.numberOfGuessesRemaining;
});