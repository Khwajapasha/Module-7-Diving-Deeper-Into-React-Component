import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // getDerivedStateFromProps(props, state) {
  //   console.log("{Persons.js} getDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("{Persons.js} shouldComponentUpdate ");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("{Persons.js} getSnapshotBeforeUpdate");
    return { message: "Snapshot" };
  }

  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log("{Persons.js} componentDidUpdate");
    console.log(Snapshot);
  }

  // componentWillReceiveProps(props) {
  //   console.log("{Persons.jsx} componentWillReceiveProps", props);
  // } Removed by react not supported now
  componentWillUnmount() {
    // it is used fro clean up in class absed component
    console.log("[Persons.jsx] clean up work componentWillUnmount");
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <div>
        {this.props.persons.map((person, index) => {
          return (
            <Person
              click={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.props.changed(event, person.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default Persons;
