import { atom } from 'jotai';

export type MainModel = {
  currentGuess: [];
  numberOfGuesses: number;
  numberOfGuessesRemaining: number;
  wordLength: number;
};

export const mainAtom = atom({
  currentGuess: [],
  numberOfGuesses: 6,
  numberOfGuessesRemaining: 6,
  wordLength: 5,
} as MainModel);
