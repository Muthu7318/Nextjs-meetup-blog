import React from "react";
import classes from "./MeetupDetail.module.css";

function MeetupDetails(props) {
  return (
    <section className={classes.detail}>
      <img alt={props.title} src={props.imageSrc}></img>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
      <p>{props.id}</p>
    </section>
  );
}

export default MeetupDetails;
