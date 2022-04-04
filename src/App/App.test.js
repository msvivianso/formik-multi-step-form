import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading of Main Page', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1});
  expect(heading).toHaveTextContent('Main Body is here');
});
