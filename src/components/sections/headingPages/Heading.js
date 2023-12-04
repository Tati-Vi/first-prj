import React from "react";
import { Link } from "react-router-dom";

import sushiImg from "../../../assets/sushi.jpg";
import classes from "./Heading.module.css";

export default function Heading() {
  return (
    <section className={classes.hero}>
      <div className={classes.heroContainer}>
        <div className={classes.WordingButtonContainer}>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, located on Maldove
            Street in Chicago, Illionis. We focus on traditional recipes served
            with a modern twist.
          </p>
          <div className={classes.ButtonLayout}>
            <Link className="action-button" to="/reservations">
              Reserve a table
            </Link>
          </div>
        </div>
        <img src={sushiImg} alt="sushiImg" className={classes.sushiImg} />
      </div>
    </section>
  );
}
