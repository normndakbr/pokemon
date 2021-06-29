import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonList } from '../store/actions/pokemonListAction';

export default function Home() {
  const pokemonList = useSelector((state) => state.pokemonListReducer.pokemonList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonList())
  }, [])

  return (
    <div class="section">
      <div class="container">
        {
          pokemonList.map(pokemon => {
            return (
              <div class="column is-3">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title has-background-primary">{pokemon.name}</p>
                  </header>
                </div>
              </div>
              // <li key={pokemon.id}>{pokemon.name}</li>
            )
          })
        }
      </div>
    </div>
  )
}

