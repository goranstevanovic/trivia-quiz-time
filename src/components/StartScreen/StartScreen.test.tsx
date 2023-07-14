import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import StartScreen from '.';

describe('StartScreen', () => {
  it('should render Logo component', () => {
    render(<StartScreen />);

    expect(screen.getByText(/Trivia.*Quiz.*Time/i)).toBeTruthy();
  });

  it("should render Button component with Let's Play label", () => {
    render(<StartScreen />);

    expect(screen.findByText(/Let's Play/i)).toBeTruthy();
  });
});
