import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Logo from '.';

describe('Logo', () => {
  it('displays the component name', () => {
    render(<Logo />);

    expect(screen.getByText('Logo')).toBeTruthy();
  });
});
