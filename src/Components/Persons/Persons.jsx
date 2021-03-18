import React from "react";
import person from "./Person/Person";
const Persons = (props) => {
  return (
    <div>
      {" "}
      {props.persons.map((person, index) => {
        return (
          <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
          />
        );
      })}
    </div>
  );
};

export default Persons;
