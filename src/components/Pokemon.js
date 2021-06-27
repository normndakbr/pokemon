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

  // return [pokeData, setPokedata]
  return {
    data: pokeData,
    setData: setPokedata
  }
}

export default function Pokemon(props) {
  // const [data, setData] = useFetch([])
  const {data, setData} = useFetch([])

  return (
    <ul>
      {
        data.map(pokemon => <li key={pokemon.id}>{pokemon.name}</li>)
      }
    </ul>
  );
}