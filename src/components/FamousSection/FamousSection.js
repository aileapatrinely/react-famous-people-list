import React, { Component } from 'react';
import './FamousSection.css';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';
import FamousPersonList from '../FamousPersonList/FamousPersonList';
import FamousPerson from '../FamousPersonForm/FamousPersonForm';

class FamousSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
  render() {
    return (
      <div>
        <FamousPersonForm />
        <FamousPerson />
        <FamousPersonList addEm={this.state.people[index]} />
      </div>
    );
  }
}

export default FamousSection;
