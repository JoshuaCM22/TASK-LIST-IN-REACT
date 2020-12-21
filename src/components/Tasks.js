import React, { Component } from "react";
import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

export default class Tasks extends Component {
  render() {
    return this.props.tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        markComplete={this.props.markComplete}
        deleteTask={this.props.deleteTask}
      />
    ));
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};
