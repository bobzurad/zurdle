'use client';

import { useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { Button } from 'antd';
import { mainAtom, solutionAtom } from '../context/atoms';

export default function Key(props: { value: string; className: string }) {
  const [value] = useState(props.value);
  const [state, setState] = useAtom(mainAtom);
  const solution = useAtomValue(solutionAtom);

  const numberOfInstancesOfValueInSolution = (value: string): number => {
    let numInstances = 0;

    [...solution].forEach((solutionValue: string) => {
      if (solutionValue === value) {
        numInstances++;
      }
    });

    return numInstances;
  };

  const isConditionYellow = (value: string, index: number): boolean => {
    const valueIsInSolution = solution.includes(value);

    if (valueIsInSolution && numberOfInstancesOfValueInSolution(value) === 1) {
      const correctIndex = solution.indexOf(value);
      const valueIsAlreadyInCorrectIndex =
        state.currentGuessLetters[correctIndex].value === value;

      // value is in the solution AND value is not already in correct index
      return !valueIsAlreadyInCorrectIndex;
    }

    //if (numberOfInstancesOfValueInSolution(value) > 1) {
    if (solution.includes(value)) {
      // value is in the solution muliple times AND not all instances are in correct index
      const incorrectIndexes = [-1]; //stores where yellow tiles are needed for current value
      [...solution].forEach((solutionLetter: string, index: number) => {
        if (solutionLetter !== value) {
          incorrectIndexes.push(index);
        }
      });

      return incorrectIndexes.indexOf(index) > 0; // currently guessed letter is in the wrong index
    }

    return false;
  };

  const getClassName = (value: string, index: number): string => {
    if (solution[index] === value) {
      return 'green-box';
    } else if (isConditionYellow(value, index)) {
      return 'yellow-box';
    }
    return 'red-box';
  };

  // GuessLetter that matches the value of this Key
  const getMatchedLetter = () => {
    if (state.guesses.length > 0) {
      for (let i = state.guesses.length - 1; i >= 0; i--) {
        const found = state.guesses[i].find((guessLetter) => {
          return guessLetter.value === value;
        });
        if (found) {
          return found;
        }
      }
    } else {
      return undefined;
    }
  };

  const keyClick = () => {
    if (
      (value.toUpperCase() === 'DEL' &&
        state.currentGuessLetters.length === 0) ||
      (value.toUpperCase() === 'ENTER' &&
        state.currentGuessLetters.length !== state.wordLength) ||
      (value.toUpperCase() !== 'DEL' &&
        value.toUpperCase() !== 'ENTER' &&
        state.currentGuessLetters.length === state.wordLength)
    ) {
      // we've reached one of the following invalid use cases:
      // - delete key was pressed when there's nothing to delete
      // - enter key was pressed before filling the row
      // - letter key was pressed after filling the row
      return;
    }

    if (value.toUpperCase() === 'DEL') {
      // delete key was pressed
      state.currentGuessLetters.pop();
    } else if (value.toUpperCase() === 'ENTER') {
      // enter key was pressed
      state.guesses.push(
        state.currentGuessLetters.map((guessLetter, index) => ({
          value: guessLetter.value,
          className: getClassName(guessLetter.value, index),
        }))
      );
      // is the current guess the solution?
      const currentGuessWord = state.currentGuessLetters
        .map((letter) => letter.value)
        .toString()
        .replaceAll(',', '');
      if (currentGuessWord === solution) {
        state.numberOfGuessesRemaining = 0;
        state.solved = true;
      } else {
        state.numberOfGuessesRemaining--;
      }
      // clear state
      state.currentGuessLetters = [];
    } else {
      // letter key was pressed
      state.currentGuessLetters.push({ value, className: 'filled-box' });
    }

    setState({ ...state });
  };

  // css classes for guessed letters
  let updatedClassName = props.className;
  const matchedLetter = getMatchedLetter();
  if (matchedLetter) {
    updatedClassName += ' ' + matchedLetter.className;
  }

  return (
    <>
      <Button
        className={updatedClassName}
        onClick={keyClick}
        disabled={state.numberOfGuessesRemaining === 0}
      >
        {value}
      </Button>
    </>
  );
}
