import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import ResultsScreen from '.';

describe('ResultsScreen', () => {
  it('displays the component name', () => {
    render(<ResultsScreen />);

    expect(screen.getByText(/Results/)).toBeTruthy();
  });
});
