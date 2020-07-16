import React, { Component } from 'react';

class FamousPersonList extends Component {
  state = {
  people: [this.props.addEm();]
  }
  render() {
    const liPeople = this.state.people.map((item, index) => {
      return <li key={index}>{item.name}</li>;
      return (
        <div>
          <ul>{liPeople}</ul>
        </div>
      );
    });
  }
}

export default FamousPersonList;
