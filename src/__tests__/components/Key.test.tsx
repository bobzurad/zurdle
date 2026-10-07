import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Key from '../../app/components/Key';

test('Key', () => {
  render(<Key value="a" className="keyboard-button" />);
  expect(screen.getByRole('button', { name: 'a' })).toBeDefined();
});
