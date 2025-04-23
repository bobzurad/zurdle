import { atom } from 'jotai';
import { SOLUTION } from './words';

const NUMBER_OF_GUESSES = 6;
const WORD_LENGTH = 5;

type GuessLetter = {
  className: string;
  value: string;
};

type MainModel = {
  guesses: GuessLetter[][];
  currentGuessLetters: GuessLetter[];
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

export const solutionAtom = atom(SOLUTION);
