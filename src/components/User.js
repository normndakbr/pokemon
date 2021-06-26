import React from 'react'

class User extends React.Component {

  render() {
    //show/emit data from App.js
    return <li>{this.props.userData.name}</li>
  }
}

export default User