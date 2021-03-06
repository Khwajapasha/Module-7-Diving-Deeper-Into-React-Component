import React, { Component } from "react";

import classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import JuditEditor from "../Components/JuditEditor/JuditEditor";
// import { UploadImage } from "../Components/UploadImage/UploadImage";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      persons: [
        { id: "asfa1", name: "Max", age: 28 },
        { id: "vasdf1", name: "Manu", age: 29 },
        { id: "asdf11", name: "Stephanie", age: 26 },
      ],
      otherState: "some other value",
      showPersons: false,
      showCockpit: true,
    };
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps ", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }
  // componentWillUnmount() {
  //   console.log("[App.js] componentDidMount>>>>>==>>");
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.jsss] shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("[App.jssss] componentDidUpdate");
  }

  render() {
    console.log("[App.js] render()");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div>
        {" "}
        <button onClick={() => this.setState({ showCockpit: false })}>
          clean cockpit
        </button>
        <div className={classes.App}>
          {this.state.showCockpit && (
            <Cockpit
              title={this.props.appTitle}
              showPerson={this.state.showPerson}
              personsLenght={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          )}
          {persons}
        </div>
        <div>
          {/* <UploadImage />*/}
          {/* <JuditEditor /> */}
        </div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
