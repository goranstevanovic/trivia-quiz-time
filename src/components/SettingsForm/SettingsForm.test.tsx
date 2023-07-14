import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import SettingsForm from '.';

describe('SettingsForm', () => {
  it('should display labels and input elements', () => {
    render(<SettingsForm />);

    expect(screen.getAllByLabelText('Your name')).toBeTruthy();
    expect(screen.getAllByLabelText('Number of questions')).toBeTruthy();
    expect(screen.getAllByLabelText('Category')).toBeTruthy();
    expect(screen.getAllByLabelText('Difficulty')).toBeTruthy();
  });
});
