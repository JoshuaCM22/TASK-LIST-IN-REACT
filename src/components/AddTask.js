import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddTask extends Component {
  state = {
    title: ""
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{
            flex: "10",
            padding: "5px",
            fontSize: "20px",
            background: "#F0F3F4",
            color: "#000"
          }}
          placeholder=" Add Task here ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired
};
