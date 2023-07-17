import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import QuizScreen from '.';

describe('Question', () => {
  it('displays the question number', () => {
    render(<QuizScreen />);

    expect(screen.findByText(/Question.*/)).toBeTruthy();
  });

  it('displays the total points', () => {
    render(<QuizScreen />);

    expect(screen.findByText(/Points.*/)).toBeTruthy();
  });
});
