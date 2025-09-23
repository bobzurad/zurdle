import { atom } from 'jotai';

const NUMBER_OF_GUESSES = 6;
export const MAX_WORD_LENGTH = 5;

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
  solved: boolean;
};

export const mainAtom = atom({
  guesses: [],
  currentGuessLetters: [],
  numberOfGuesses: NUMBER_OF_GUESSES,
  numberOfGuessesRemaining: NUMBER_OF_GUESSES,
  wordLength: MAX_WORD_LENGTH,
  solved: false
} as MainModel);

export const activeRowAtom = atom((get) => {
  const state = get(mainAtom);
  return state.numberOfGuesses - state.numberOfGuessesRemaining;
});

export const solutionAtom = atom('');
