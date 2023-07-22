import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import ErrorScreen from '.';

describe('ErrorScreen', () => {
  it('displays correct text', () => {
    render(<ErrorScreen />);

    const message =
      'Something went wrong while trying to get questions and answers for your game of quiz. Please try again.';

    expect(screen.getByText(message)).toBeDefined();
  });
});
