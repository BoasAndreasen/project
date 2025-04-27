import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from "./components/BookingForm/BookingForm";
import { initializeTimes, updateTimes } from "./App";

test("renders static text in BookingForm", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  expect(screen.getByText("Choose date")).toBeInTheDocument();
  expect(screen.getByText("Choose time")).toBeInTheDocument();
  expect(screen.getByText("Number of guests")).toBeInTheDocument();
  expect(screen.getByText("Occasion")).toBeInTheDocument();
  expect(screen.getByText("Make Your reservation")).toBeInTheDocument();
});


test("initializeTimes returns the correct initial times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(initializeTimes()).toEqual(expectedTimes);
});


test("updateTimes returns the same state when no matching action is provided", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { selectedDate: "2025-04-26" };
  expect(updateTimes(initialState, action)).toEqual(initialState);
});

test("displays error message for empty date field", async () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const dateInput = screen.getByLabelText("Choose date");
  fireEvent.blur(dateInput);
  const errorMessage = await screen.findByText("Date is required");
  expect(errorMessage).toBeInTheDocument();
});

test("displays error message for invalid guests count", async () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const guestsInput = screen.getByLabelText("Number of guests");
  fireEvent.change(guestsInput, { target: { value: "0" } });
  fireEvent.blur(guestsInput);
  const errorMessage = await screen.findByText("Must be at least 1 guest");
  expect(errorMessage).toBeInTheDocument();
});

test("displays error message for empty occasion field", async () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const occasionSelect = screen.getByLabelText("Occasion");
  fireEvent.change(occasionSelect, { target: { value: "" } });
  fireEvent.blur(occasionSelect);
  const errorMessage = await screen.findByText("Occasion is required");
  expect(errorMessage).toBeInTheDocument();
});
