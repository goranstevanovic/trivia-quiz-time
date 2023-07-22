import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import ErrorScreen from '.';
import { QuizProvider } from '../../contexts/QuizContext';

describe('ErrorScreen', () => {
  it('displays correct text', () => {
    render(
      <QuizProvider>
        <ErrorScreen />
      </QuizProvider>,
    );

    const message =
      'Oops! Something went wrong while loading questions and answers for the quiz. Please try again.';

    expect(screen.getByText(message)).toBeDefined();
  });
});
