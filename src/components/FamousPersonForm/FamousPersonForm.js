import React, { Component } from 'react';

class FamousPerson extends Component {
  state = {
    famousPerson: {
      name: '',
      role: '',
    },
    people: [
      {
        name: '',
        role: '',
      },
    ],
  };

  handleChangeFor = (event, propertyName) => {
    this.setState({
      famousPerson: {
        ...this.state.famousPerson,
        [propertyName]: event.target.value,
      },
    });
  };

  addPerson = (event) => {
    event.preventDefault();
    console.log(`The famous person is `, this.state.famousPerson);
    this.setState({
      people: [...this.state.people, this.state.famousPerson],
      famousPerson: {
        name: '',
        role: '',
      },
    });
  };
  render() {
    return (
      <form onSubmit={this.addPerson}>
        <label htmlFor="name-input">Name:</label>
        <input
          id="name-input"
          value={this.state.famousPerson.name}
          onChange={(event) => this.handleChangeFor(event, 'name')}
        />
        <label htmlFor="role-input">Famous for:</label>
        <input
          id="role-input"
          value={this.state.famousPerson.role}
          onChange={(event) => this.handleChangeFor(event, 'role')}
        />
        <button type="submit">Done</button>
      </form>
    );
  }
}

export default FamousPerson;
