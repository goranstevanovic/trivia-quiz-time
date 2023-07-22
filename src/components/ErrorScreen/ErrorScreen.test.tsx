import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import ErrorScreen from '.';

describe('ErrorScreen', () => {
  it('displays correct text', () => {
    render(<ErrorScreen />);

    expect(screen.getByText('ErrorScreen')).toBeDefined();
  });
});
