import React from 'react'

class Pokemon extends React.Component {

  render() {
    return <li>{this.props.pokemonList.name}</li>
  }
}

export default Pokemon