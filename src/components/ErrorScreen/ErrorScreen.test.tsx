import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import ErrorScreen from '.';

describe('ErrorScreen', () => {
  it('displays correct text', () => {
    render(<ErrorScreen />);

    const message =
      'Oops! Something went wrong while loading questions and answers for the quiz. Please try again.';

    expect(screen.getByText(message)).toBeDefined();
  });
});
