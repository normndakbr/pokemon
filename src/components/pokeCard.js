import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grow } from '@material-ui/core';

export default function PokeCard(props) {
  const history = useHistory()
  const [checked, setChecked] = useState(true);

  function showPokemonDetail(name) {
    history.push(`/pokemon-detail/${name}`);
  }

  return (
    <Grow in={checked}>
      <div className="column is-2-desktop is-6-mobile is-4-tablet is-centered">
        <div onClick={() => { showPokemonDetail(props.detailOfPokemon.name) }} className="box is-centered">
          <div className="card-image">
            <figure className="image">
              <img src={props.detailOfPokemon.image} alt={'?'} />
              <p style={{ letterSpacing: '2px' }} className="card-header-title is-centered is-capitalized is-6-mobile is-4-tablet">{props.detailOfPokemon.name}</p>
            </figure>
          </div>
        </div>
      </div>
    </Grow>
  )
}