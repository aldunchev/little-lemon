import { BookingForm } from '../BookingForm/BookingForm';
import { render, screen, fireEvent } from '@testing-library/react';

test('renders BookingForm', () => {
  render(<BookingForm />);
  const linkElement = screen.getByText(/Book now/i);
  expect(linkElement).toBeInTheDocument();
});

test('allows user to submit the form with reservation details', () => {
  const availableTimes = ['17:00', '18:00', '19:00'];
  const dispatch = jest.fn();

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

  // Fill out the form
  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.change(dateInput, { target: { value: '2024-03-20' } });

  const timeSelect = screen.getByLabelText(/choose time/i);
  fireEvent.change(timeSelect, { target: { value: '17:00' } });

  const guestsInput = screen.getByLabelText(/number of guests/i);
  fireEvent.change(guestsInput, { target: { value: '4' } });

  // Submit the form
  const submitButton = screen.getByText(/book now/i);
  fireEvent.click(submitButton);

  // Verify dispatch was called with correct date
  expect(dispatch).toHaveBeenCalledWith({
    type: 'UPDATE_TIMES',
    payload: '2024-03-20'
  });
});
