import React, { Component } from "react";
import "./AddPlayer.css";
import PropTypes from "prop-types";
export default class AddPlayer extends Component {
  static propTypes = {
    handleAddPlayer: PropTypes.func.isRequired
  };
  state = { name: "" };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAddPlayer(this.state.name);

    console.log(`Submitting form with name ${this.state.name}`);
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="add-player">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
