import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const pokemons = useSelector((state) => state.pokemons)
  // const { listPokemon } = useFetchPokemon("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")

  console.log(pokemons, "This is your state")

  return (
    <>
      <h1>Hello, welcome to Pokemon World!</h1>
      <h3>Gotta Catch 'em all!</h3>
      <pre> {JSON.stringify(pokemons, null, 2)} </pre>
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