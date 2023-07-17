import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Question from '.';

describe('Question', () => {
  it('displays the component name', () => {
    render(<Question />);

    expect(screen.getByText(/Question/)).toBeTruthy();
  });
});
