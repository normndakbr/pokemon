import React from 'react'

class Todo extends React.Component {

  render() {
    return <li>User Id: {this.props.todoList.userId}, Title: {this.props.todoList.title}</li>
  }
}

export default Todo