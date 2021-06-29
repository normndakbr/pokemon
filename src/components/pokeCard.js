import React from 'react';
// import { useSelector, useDispatch } from 'react-redux'

export default function pokeCard(props) {
  // const pokemonList = useSelector(state => state.pokemonList)

  console.log(props.detailOfPokemon)

  return (
    <div class="column is-3">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title has-background-primary">{props.detailOfPokemon.name}</p>
        </header>
      </div>
    </div>
  )
}