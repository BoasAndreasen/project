import './App.css';
import Home from './pages/Home'
import BookingPage from './pages/BookingPage'
import Logo from "./resources/Logo.svg"
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
      <meta name="description" content="Little Lemon is a Mediterranean family-owned restaurant"/>
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="Little Lemon Restaurant"/>
      <meta name="og:image" content={Logo}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/reservations" element={ <BookingPage/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
