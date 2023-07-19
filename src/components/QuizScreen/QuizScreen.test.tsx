import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import QuizScreen from '.';
import { QuizProvider } from '../../contexts/QuizContext';

describe('Question', () => {
  it('displays the question number', () => {
    render(
      <QuizProvider>
        <QuizScreen />
      </QuizProvider>,
    );

    expect(screen.findByText(/Question.*/)).toBeTruthy();
  });

  it('displays the total points', () => {
    render(
      <QuizProvider>
        <QuizScreen />
      </QuizProvider>,
    );

    expect(screen.findByText(/Points.*/)).toBeTruthy();
  });
});
