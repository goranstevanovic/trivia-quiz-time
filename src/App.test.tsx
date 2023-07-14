import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders headline', () => {
    const app = render(<App />);

    expect(app).not.toBeNull();
  });
});
