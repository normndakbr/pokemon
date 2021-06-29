import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonDetail() {
  const [pokemonDetail, setPokemonDetail] = useState([])
  const { name } = useParams()

  useEffect(() => {
    // setLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setPokemonDetail(data);
      })
      .catch(err => {
        console.log(err);
      })
    // .finally(() => setLoading(false))
  }, [])

  return (
    <div className="column is-2-desktop is-10-mobile is-4-tablet  is-centered">
      <div className="card is-centered">
        <header className="card-header  is-centered">
          <p className="card-header-title is-centered is-capitalized">{pokemonDetail.name}</p>
        </header>
        <div className="card-image">
          <figure className="image has-background-grey-lighter">
            {/* <img src={pokemonDetail.sprites.front_default} /> */}
          </figure>
        </div>
      </div>
    </div>
  )
}