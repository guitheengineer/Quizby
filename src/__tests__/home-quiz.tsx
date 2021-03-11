import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from 'test-util';
import { QuizDemo } from 'pages/landing/components';

test('if home quiz correct answer works correctly', async () => {
  render(<QuizDemo />);
  userEvent.click(screen.getByText('Barack Obama'));

  await screen.findByText('100');
  await screen.findByText('Perfect score!');
});

test('if home quiz wrong answer works correctly', async () => {
  render(<QuizDemo />);
  userEvent.click(screen.getByText('James Warren'));

  await screen.findByText('0');
  await screen.findByText('Incorrect :(');
});
