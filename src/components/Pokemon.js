import React, {useEffect} from 'react';

export default function Pokemon(props) {
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
    .then((res) => res.json())
    .then(data => {
      console.log(data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <ul>
      <li>Pokemon</li>
    </ul>
  );
}