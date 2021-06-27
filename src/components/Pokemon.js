import React, { useState, useEffect } from 'react';

export default function Pokemon(props) {
  const [pokemons, setPokemons] = useState([])

  //get list of pokemon data from poke-API
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
      .then((res) => res.json())
      .then(data => {
        setPokemons(data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <ul>
      {
        pokemons.map(pokemon => <li key={pokemon.id}>{pokemon.name}</li>)
      }
    </ul>
  );
}