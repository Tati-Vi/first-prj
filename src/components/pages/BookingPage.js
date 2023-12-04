import React from "react";
import "./BookingPage.css";
import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../../bookingsAPI";
import { useNavigate } from "react-router-dom";

import ReservationForm from "../sections/reservePages/Form";
// import ReservationForm from '../sections/reservePages/BookingForm';

function BookingPage() {
  const navigate = useNavigate();

  const today = new Date();

  const init = { times: fetchAPI(today) };

  const updateTimes = (state, action) => {
    if (action.type === "init") {
      return { times: fetchAPI(today) };
    }
    if (action.type === "update_times") {
      let selectedBookingDate = new Date(action.payload);
      let newTimes = fetchAPI(selectedBookingDate).filter(
        (time) => time !== "17:00"
      );
      return { times: newTimes };
    }
    throw Error("Unknown action.");
  };

  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, init);

  const submitForm = (data) => {
    console.table(data);
    const res = submitAPI(data);
    if (res === true) {
        navigate('/confirmation')
    } else {
      console.log("Error submitForm");
    }
  };

  return (
    <div className="res-content-wrapper">
      <div className="res-content-container">
        <div className="text">
          <h2>Experience the perfect balance of tradition and luxury.</h2>
          <p>
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. The restaurant has a rustic and relaxed atmosphere
            with moderate prices, making it a popular place for a meal any time
            of the day. .
          </p>
          <p>Book a table with us to share in this experience.</p>
        </div>
        <div className="form">
          <h1>Reserve a Table</h1>
          <p>
            Please fill in and submit form to book your reservation at Little
            Lemon.
          </p>
          <ReservationForm
            availableTimes={availableTimes.times}
            updateTimes={setAvailableTimes}
            submitForm={submitForm}
          />
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
