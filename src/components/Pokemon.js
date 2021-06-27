import React from 'react';
import useFetchPokemon from '../hooks/useFetchPokemon';

export default function Pokemon(props) {
  const { listPokemon } = useFetchPokemon("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")

  return (
    <ul>
      {
        listPokemon.map(pokemon => {
          return <li key={pokemon.id}>{pokemon.name}</li>
        })
      }
    </ul>
  );
}