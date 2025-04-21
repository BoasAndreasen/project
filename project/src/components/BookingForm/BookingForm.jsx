export default function BookingForm() {
    return (
        <form onSubmit={(event) => {event.preventDefault(); alert("Reservation complete");}}>
        <div>
            <input type="date" id="reservation_date" name="reservation_date"></input>
        </div>
        <div>
            <label>
                Number of guests:
                <input type="number" id="guests" name="guests" />
            </label>
        </div>
            <input type="email" id="user_email" name="user_email" />

        <div>
            <button type="Submit">Submit</button>
        </div>
    </form>
    )
}
