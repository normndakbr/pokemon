import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { myPokemons } from '../cache/index';

export default function PokemonDetail() {
  const { id } = useParams()
  const data = myPokemons()
  let [pokeData, setPokeData] = useState()
  let [catching, setCatching] = useState(false)

  setPokeData(data[`${id}`])

  console.log(pokeData)

  if (catching) {
    return (
      <>
        <div className="card-image is-flex is-justify-content-space-around is-align-content-center">
          <figure className="image ">
            <img src={process.env.PUBLIC_URL + '/pokeball.gif'} alt={'Throwing Pokeball...'} />
          </figure>
        </div>=
      </>
    )
  } else {
    return (
      <div style={{ backgroundColor: '#32373e' }} className="container is-fluid">

      </div >
    )
  }
}