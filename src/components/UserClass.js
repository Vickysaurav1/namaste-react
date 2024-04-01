import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }; // creating a state in class based component.
  }
  render() {
    const { name, location } = this?.props; //es6 way to destructure props object
    return (
      <div className="user-card">
        <h1>count: {this.state.count}</h1>
        <button  onClick={() => this.setState({ count: this.state.count + 1})}>Cnt Incr</button>
        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @biharwalesharmaji</h4>
      </div>
    );
  }
}

export default UserClass;
