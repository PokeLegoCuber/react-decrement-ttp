import React, { Component } from "react";
import PropTypes from "prop-types";

class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = { number: props.start };
  }

  handleDecrement = (state) => {
    if (state.number === 0) {
      return alert("Cannot be less than zero!");
    }
    this.setState({ number: state.number - 1 });
  };

  render() {
    return (
      <div>
        {this.state.number}
        <br></br>
        <button class="btn btn-primary" onClick={() => this.handleDecrement(this.state)}>
          Decrement &#x23EC;
        </button>
      </div>
    );
  }
}

Decrement.propTypes = {
  start: PropTypes.number.isRequired,
};

export default Decrement;