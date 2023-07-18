import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import StartScreen from '.';
import { QuizProvider } from '../../contexts/QuizContext';

describe('StartScreen', () => {
  it('should render Logo component', () => {
    render(
      <QuizProvider>
        <StartScreen />
      </QuizProvider>,
    );

    expect(screen.getByText(/Trivia.*Quiz.*Time/i)).toBeTruthy();
  });

  it("should render Button component with Let's Play label", () => {
    render(
      <QuizProvider>
        <StartScreen />
      </QuizProvider>,
    );

    expect(screen.findByText(/Let's Play/i)).toBeTruthy();
  });
});
