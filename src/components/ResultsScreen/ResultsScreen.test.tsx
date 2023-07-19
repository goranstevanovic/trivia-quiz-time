import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import ResultsScreen from '.';
import { QuizProvider } from '../../contexts/QuizContext';

describe('ResultsScreen', () => {
  it('displays the component name', () => {
    render(
      <QuizProvider>
        <ResultsScreen />
      </QuizProvider>,
    );

    expect(screen.getByText(/Results/)).toBeTruthy();
  });
});
