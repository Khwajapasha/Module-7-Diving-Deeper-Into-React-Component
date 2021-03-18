import React from "react";
import Person from "./Person/Person";
const Persons = (props) => {
  return (
    <div>
      {" "}
      {props.persons.map((person, index) => {
        return (
          <Person
            click={() => props.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => props.nameChangedHandler(event, person.id)}
          />
        );
      })}
    </div>
  );
};

export default Persons;
