import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import SettingsScreen from '.';

describe('SettingsScreen', () => {
  it('displays form', () => {
    render(<SettingsScreen />);

    expect(screen.getByText('Your name')).toBeTruthy();
  });

  it('displays Start Quiz button', () => {
    render(<SettingsScreen />);

    expect(screen.findByText('Start Quiz')).toBeTruthy();
  });
});
