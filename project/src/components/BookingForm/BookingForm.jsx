import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch }) {
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: 1,
      occasion: "Birthday",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .min(1, "Must be at least 1 guest")
        .max(10, "Cannot exceed 10 guests")
        .required("Number of guests is required"),
      occasion: Yup.string().required("Occasion is required"),
    }),
    onSubmit: (values) => {
      alert(
        `Reservation made for ${values.guests} guests on ${values.date} at ${values.time} for a ${values.occasion}`
      );
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
      aria-label="Booking Form"
    >
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formik.values.date}
        onChange={(e) => {
          formik.handleChange(e);
          dispatch({ selectedDate: e.target.value });
        }}
        onBlur={formik.handleBlur}
      />
      {formik.touched.date && formik.errors.date ? (
        <div className="error">{formik.errors.date}</div>
      ) : null}

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        name="time"
        value={formik.values.time}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="" disabled>
          Select time
        </option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      {formik.touched.time && formik.errors.time ? (
        <div className="error">{formik.errors.time}</div>
      ) : null}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={formik.values.guests}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.guests && formik.errors.guests ? (
        <div className="error">{formik.errors.guests}</div>
      ) : null}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formik.values.occasion}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {formik.touched.occasion && formik.errors.occasion ? (
        <div className="error">{formik.errors.occasion}</div>
      ) : null}

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!formik.isValid || formik.isSubmitting}
        aria-label="On Click"
      />
    </form>
  );
}

export default BookingForm;