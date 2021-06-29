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
    <>
      <h1>Hello, welcome to Pokemon World!</h1>
      <h3>Gotta Catch 'em all!</h3>
      <pre> {JSON.stringify(pokemonList, null, 2)} </pre>
      {/* <ul>
        {
          listPokemon.map(pokemon => {
            return <li key={pokemon.id}>{pokemon.name}</li>
          })
        }
      </ul> */}
    </>
  )
}