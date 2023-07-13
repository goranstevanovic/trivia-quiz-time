import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    const h1 = screen.getByText('Vite + React');

    expect(h1).not.toBeNull();
  });
});
