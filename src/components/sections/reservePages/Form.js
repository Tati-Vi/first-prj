import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Full name is a required field!"),
  email: yup
    .string()
    .required("Email is a required field!")
    .email("Email is not valid!"),
  telephone: yup
    .string()
    .required("Telephone is a required field!")
    .matches(/^[0-9]+$/, "Phone number must contain only digits (0-9)!"),
  guests: yup
    .number()
    .min(1, "There must be at least 1 guest!")
    .required("Please specify number of guests per table!"),
  date: yup.string().required("Please select date and time!"),
});

function Form(props) {
  const { submitForm } = props;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log("🚀 ~ file: Form.js ~ Form ~ errors:", errors);

  const [finalTime, setFinalTime] = useState(
    props.availableTimes?.map((times) => <option>{times}</option>)
  );

  const handleDateChange = (e) => {
    var stringify = e.target.value;

    const date = new Date(stringify);

    props.updateTimes({ type: "update_times", payload: date });

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <fieldset>
        <div className="field">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="Tatiana S"
            name="name"
            {...register("name")}
          />
          <span className="error-message">{errors.name?.message}</span>
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="text@email.com"
            name="email"
            {...register("email")}
          />
          <span className="error-message">{errors.email?.message}</span>
        </div>
        <div className="field">
          <label htmlFor="telephone">Telephone</label>
          <input
            type="tel"
            placeholder="123 456 789"
            name="telephone"
            {...register("telephone")}
          />
          <span className="error-message">{errors.telephone?.message}</span>
        </div>

        <div className="field occasion">
          <label htmlFor="occasion">Occasion (optional)</label>
          <div className="options">
            <select name="occasion" {...register("occasion")}>
              <option value="select">Select occasion</option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
        </div>
        <div className="field guest">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            placeholder={0}
            name="guests"
            {...register("guests")}
          />
          <span className="error-message">{errors.guests?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            name="date"
            {...register("date")}
            onChange={handleDateChange}
          />
          <span className="error-message">{errors.date?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="date">Select Time</label>
          <div className="options">
            <select id="time" required>
              {finalTime}
            </select>
          </div>
        </div>

        <button className="reserve-btn" type="submit">
          Reserve
        </button>
        <p>
          Note: You cannot edit your reservation after submission. Please
          double-check your answer before submitting your reservation request.
        </p>
      </fieldset>
    </form>
  );
}

export default Form;
