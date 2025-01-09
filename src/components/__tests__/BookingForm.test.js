import { BookingForm } from '../BookingForm/BookingForm';
import { render, screen } from '@testing-library/react';

test('renders BookingForm', () => {
  render(<BookingForm />);
  const linkElement = screen.getByText(/Book now/i);
  expect(linkElement).toBeInTheDocument();
});
