import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import QuizScreen from '.';

describe('Question', () => {
  it('displays the component name', () => {
    render(<QuizScreen />);

    expect(screen.getByText(/QuizScreen/)).toBeTruthy();
  });
});
