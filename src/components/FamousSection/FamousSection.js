import React, { Component } from 'react';
import './FamousSection.css';

class FamousSection extends Component {
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
    });
  };

  render() {
    const liPeople = this.state.people.map((item, index) => (
      <li key={index}>{item.name}</li>
    ));
    return (
      <section className="new-person-section">
        <form onSubmit={this.addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input
            id="name-input"
            onChange={(event) => this.handleChangeFor(event, 'name')}
          />
          <label htmlFor="role-input">Famous for:</label>
          <input
            id="role-input"
            onChange={(event) => this.handleChangeFor(event, 'role')}
          />
          <button type="submit">Done</button>
        </form>
        <p>
          {this.state.famousPerson.name} is famous for "
          {this.state.famousPerson.role}".
        </p>
        <ul>{this.state.liPeople}</ul>
      </section>
    );
  }
}

export default FamousSection;
