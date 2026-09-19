import { render, screen } from '@testing-library/react';
import App from './App';
import { profile } from './data/portfolioData';

test('renders the hero heading with the profile name', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1, name: profile.name });
  expect(heading).toBeInTheDocument();
});
