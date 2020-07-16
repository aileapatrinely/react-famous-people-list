import React, { Component } from 'react';

class FamousPerson extends Component {
  render() {
    return (
      <p>
        {this.props.famousPerson.name} is famous for "
        {this.props.famousPerson.role}".
      </p>
    );
  }
}

export default FamousPerson;
