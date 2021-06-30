import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function PokeCard(props) {
  const history = useHistory()
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    fetch(props.detailOfPokemon.url)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setDetails(data.sprites);
          setLoading(false)
        }, 2000)
      })
      .catch(err => {
        console.log(err);
      })
  }, [props.detailOfPokemon.url])

  function showPokemonDetail(name) {
    history.push(`/pokemon-detail/${name}`);
  }

  if (loading) {
    return <h1>Loading data...</h1>
  } else {
    return (
      <div className="column is-2-desktop is-6-mobile is-4-tablet is-centered">
        <div onClick={() => { showPokemonDetail(props.detailOfPokemon.name) }} className="box is-centered">
          <div className="card-image">
            <figure className="image">
              <img style={{ boxShadow: '100' }} src={details.front_default} />
              <p style={{ letterSpacing: '2px' }} className="card-header-title is-centered is-capitalized is-6-mobile is-4-tablet">#{props.detailOfPokemon.id} - {props.detailOfPokemon.name}</p>
            </figure>
          </div>
        </div>
      </div>
    )
  }
}