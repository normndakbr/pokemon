import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonDetail() {
  const { name } = useParams()
  const [pokemonDetail, setPokemonDetail] = useState([])
  const [pokemonImage, setPokemonImage] = useState([])
  const [pokemonMoves, setPokemonMoves] = useState([])
  const [pokemonTypes, setPokemonTypes] = useState([])

  useEffect(() => {
    // setLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => {
        data.types.map(type => {
          let temp = type['type']['name']
          console.log(type)
          return (
            setPokemonTypes(temp)
          )
        })
    console.log(pokemonTypes)
    setPokemonDetail(data);
    setPokemonImage(data.sprites['versions']['generation-v']['black-white']['animated']['front_default'])

  })
    .catch(err => {
      console.log(err);
    })
  // .finally(() => setLoading(false))
}, [name])

return (
  <div className="container is-fluid">
    <div className="columns is-mobile is-variable is-centered">
      <div className="column is-9-desktop is-10-mobile is-4-tablet is-centered">
        <div className="card is-centered">
          <header className="card-header  is-centered">
            <p className="card-header-title is-centered is-capitalized">{pokemonDetail.name}</p>
          </header>
          <div className="card-image">
            <figure className="image has-background-grey-lighter is-128x128 is-centered">
              <img src={pokemonImage} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}