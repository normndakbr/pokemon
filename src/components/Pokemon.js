import React, { useState, useEffect } from 'react';

function useFetch() {
  const [pokeData, setPokedata] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
      .then((res) => res.json())
      .then(data => {
        setPokedata(data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  //this will return data as an array
  // return [pokeData, setPokedata]

  //this will return data as an object
  return {
    data: pokeData,
    setData: setPokedata
  }
}

export default function Pokemon(props) {
  //handle fetch data as an array
  // const [data, setData] = useFetch([])

  //handle fetch data as an object
  //you can rename it by assign new name for data using data: pokemon
  const {data: pokemons, setData} = useFetch([])

  return (
    <ul>
      {
        pokemons.map(pokemon => <li key={pokemon.id}>{pokemon.name}</li>)
      }
    </ul>
  );
}