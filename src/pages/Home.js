import React from 'react';
import useFetchPokemon from '../hooks/useFetchPokemon';

export default function Home() {
  const { listPokemon } = useFetchPokemon("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")

  return (
    <>
      <h1>Hello, welcome to Pokemon World!</h1>
      <h3>Gotta Catch 'em all!</h3>
      <ul>
        {
          listPokemon.map(pokemon => {
            return <li key={pokemon.id}>{pokemon.name}</li>
          })
        }
      </ul>
    </>
  )
}