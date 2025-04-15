import { atom } from 'jotai';

type MainModel = {
  guesses: String[][];
  currentGuess: String[];
  numberOfGuesses: number;
  numberOfGuessesRemaining: number;
  wordLength: number;
};

export const mainAtom = atom({
  guesses: [],
  currentGuess: [],
  numberOfGuesses: 6,
  numberOfGuessesRemaining: 6,
  wordLength: 5,
} as MainModel);
