import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TaskItem extends Component {
  getStyle = () => {
    return {
      background: "#273746",
      color: "#F0F3F4",
      padding: "15px",
      borderBottom: "1px #AAB7B8 solid",
      textDecoration: this.props.task.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.task;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.deleteTask.bind(this, id)}
            style={btnStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

const btnStyle = {
  background: "#E74C3C",
  color: "#F0F3F4",
  border: "none",
  padding: "5px 9px",
  borderRadius: "20%",
  cursor: "pointer",
  float: "right",
  fontSize: "16px"
};
