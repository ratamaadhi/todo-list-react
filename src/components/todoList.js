import React, { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: "",
    };
  }

  handleOnChange = (e) => {
    // console.log("handleOnChange",e)
    this.setState({ input: e.target.value });
  };

  handleButton = () => {
    const inputan = {
      id: Math.random(100),
      todo: this.state.input,
      isCheked: false,
    };
    this.setState({
      todos: [inputan, ...this.state.todos],
      input: "",
    });
  };

  handleUpdate(id) {
    console.log("handleUpdate", id);
    const update = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, isCheked: !todo.isCheked } : todo
    );
    this.setState({ todos: update });
  }

  handleDelete(id,e) {
    e.preventDefault()
    console.log("handleDelete", id);
  }

  render() {
    console.log("todos", this.state.todos);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Todo</h1>
        <div>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            value={this.state.input}
          />
          <button onClick={() => this.handleButton()}>add</button>
        </div>
        <div>
          {this.state.todos.length > 0
            ? this.state.todos.map((todo) => (
                <div
                  key={todo.id}
                  onClick={() => this.handleUpdate(todo.id)}
                  onContextMenu={(event) => this.handleDelete(todo.id, event)}
                >
                  {todo.todo} {todo.isCheked ? <span>- *done*</span> : null}
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}
