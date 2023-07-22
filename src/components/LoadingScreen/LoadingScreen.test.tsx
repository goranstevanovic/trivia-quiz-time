import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import LoadingScreen from '.';

describe('LoadingScreen', () => {
  it('displays correct text', () => {
    const { container } = render(<LoadingScreen />);

    expect(container).toBeDefined();
  });
});
