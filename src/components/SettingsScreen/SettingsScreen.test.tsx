import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import SettingsScreen from '.';
import { QuizProvider } from '../../contexts/QuizContext';

describe('SettingsScreen', () => {
  it('displays form', () => {
    render(
      <QuizProvider>
        <SettingsScreen />
      </QuizProvider>,
    );

    expect(screen.getByText('Your name')).toBeTruthy();
  });

  it('displays Start Quiz button', () => {
    render(
      <QuizProvider>
        <SettingsScreen />
      </QuizProvider>,
    );

    expect(screen.findByText('Start Quiz')).toBeTruthy();
  });
});
