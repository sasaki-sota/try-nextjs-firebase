import Home from '@/app/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading: HTMLElement = screen.getByRole('heading', {
      name: /Deploy/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
