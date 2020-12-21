import React, { Component } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import uuid from "uuid";
import "./App.css";

export default class App extends Component {
  state = {
    tasks: []
  };

  markComplete = (id) => {
    this.setState({
      tasks: this.state.tasks.map((x) => {
        if (x.id === id) {
          x.completed = !x.completed;
        }
        return x;
      }),
    });
  };

  deleteTask = (id) => {
    this.setState({
      tasks: [...this.state.tasks.filter((x) => x.id !== id)]
    });
  };

  addTask = (title) => {
    const newTask = {
      id: uuid.v4(),
      title,
      completed: false
    };

    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <React.Fragment>
            <AddTask addTask={this.addTask} />
            <Tasks
              tasks={this.state.tasks}
              markComplete={this.markComplete}
              deleteTask={this.deleteTask}
            />
          </React.Fragment>
        </div>
      </div>
    );
  }
}
