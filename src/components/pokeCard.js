import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function PokeCard(props) {
  const history = useHistory()
  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch(props.detailOfPokemon.url)
      .then(res => res.json())
      .then(data => {
        // setTimeout(() => {
        setDetails(data.sprites);
        // setLoading(false)
        // }, 1000)
      })
      .catch(err => {
        console.log(err);
      })
  }, [props.detailOfPokemon.url])

  function showPokemonDetail(name) {
    history.push(`/pokemon-detail/${name}`);
  }

  return (
    <div className="column is-2-desktop is-10-mobile is-4-tablet  is-centered">
      <div onClick={() => {showPokemonDetail(props.detailOfPokemon.name)}} className="card is-centered">
        <header className="card-header  is-centered">
          <p className="card-header-title is-centered is-capitalized">{props.detailOfPokemon.name}</p>
        </header>
        <div className="card-image">
          <figure className="image has-background-grey-lighter">
            <img src={details.front_default}/>
          </figure>
        </div>
      </div>
    </div>
  )
}