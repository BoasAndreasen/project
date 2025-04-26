import { render, screen } from '@testing-library/react';
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
