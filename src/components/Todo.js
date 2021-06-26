import React from 'react'

class Todo extends React.Component {

  render() {
    return <li>{this.props.todoList.title}</li>
  }
}

export default Todo