import React, { Component } from 'react';

class FamousPersonList extends Component {
  render() {
    const liPeople = this.props.people.map((item, index) => {
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
