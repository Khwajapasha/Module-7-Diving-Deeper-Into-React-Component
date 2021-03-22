import React, { useEffect } from "react";
import classes from "./Cockpit.css";
const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.jsx] useEffect");
    setTimeout(() => {
      alert("This an example of sending request");
    }, 1000); // 1000 mili Sec is equal to 1sec
  }, [props.persons]);

  let btnClass = "";
  if (props.showPerson) {
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
