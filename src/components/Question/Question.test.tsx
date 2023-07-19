import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Question from '.';
import { QuizProvider } from '../../contexts/QuizContext';

describe('Question', () => {
  it('displays the component name', () => {
    render(
      <QuizProvider>
        <Question />
      </QuizProvider>,
    );

    expect(screen.findByText(/[easy|medium|hard]:*/i)).toBeTruthy();
  });
});
