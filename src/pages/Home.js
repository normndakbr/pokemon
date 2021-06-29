import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonList } from '../store/actions/pokemonListAction';

export default function Home() {
  const pokemonList = useSelector((state) => state.pokemonListReducer.pokemonList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonList())
  }, [])

  console.log(pokemonList, "This is your state")

  return (
    <div class="container columns">
      {/* <h1>Hello, welcome to Pokemon World!</h1> */}
      {/* <h3>Gotta Catch 'em all!</h3> */}
      {/* <pre> {JSON.stringify(pokemonList, null, 2)} </pre> */}
      {/* <ul> */}
      {

        pokemonList.map(pokemon => {
          return (
            <div class="column is-one-fifth">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <p>{pokemon.name}</p>
                  </div>
                </div>
              </div>
            </div>
            // <li key={pokemon.id}>{pokemon.name}</li>
          )
        })
      }
      {/* </ul> */}
    </div>
  )
}