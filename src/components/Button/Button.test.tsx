import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Button from '.';

describe('Button', () => {
  it('displays correct label', () => {
    render(
      <Button
        onClick={function () {
          return;
        }}
      >
        Test Button
      </Button>,
    );

    expect(screen.getByText('Test Button')).toBeDefined();
  });
});
