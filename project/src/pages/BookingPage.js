import Nav from "../components/Nav"
import Footer from "../components/Footer"
import BookingForm from "../components/BookingForm/BookingForm"

function BookingPage({ availableTimes, dispatch }) {
    return (
        <>
            <Nav/>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
            <Footer/>
        </>
    )
}

export default BookingPage;