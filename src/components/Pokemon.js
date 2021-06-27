import React from 'react';
import useFetch from '../hooks/useFetch';

export default function Pokemon(props) {
  const {data: pokemons} = useFetch([])

  return (
    <ul>
      {
        pokemons.map(pokemon => <li key={pokemon.id}>{pokemon.name}</li>)
      }
    </ul>
  );
}