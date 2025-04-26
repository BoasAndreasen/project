import './App.css';
import Home from './pages/Home'
import BookingPage from './pages/BookingPage'
import Logo from "./resources/Logo.svg"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { useReducer } from "react";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  switch (action.selectedDate) {
    case "2025-04-25":
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <>
      <meta name="description" content="Little Lemon is a Mediterranean family-owned restaurant"/>
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="Little Lemon Restaurant"/>
      <meta name="og:image" content={Logo}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
