import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import LoadingScreen from '.';

describe('LoadingScreen', () => {
  it('displays correct text', () => {
    render(<LoadingScreen />);

    expect(screen.getByText(/Preparing questions and answers.*/)).toBeDefined();
  });
});
