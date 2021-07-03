import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grow } from '@material-ui/core';

export default function MyPokeCard(props) {
  const history = useHistory()
  const [checked, setChecked] = useState(true);

  function showPokemonDetail(id) {
    history.push(`/my-pokemon-detail/${id}`);
  }

  return (
    <Grow in={checked} >
      <div className="column is-2-desktop is-6-mobile is-4-tablet is-centered">
        <div style={{ backgroundColor: '#808184' }} onClick={() => { showPokemonDetail(props.detailOfPokemon.id) }} className="box is-centered">
          <div className="card-image">
            <img className="image is-96x96" src={props.detailOfPokemon.image.front} alt={'?'} />
            <p style={{ letterSpacing: '2px' }, { color: '#1e2021' }} className="card-header-title is-centered is-capitalized is-6-mobile is-4-tablet">{props.detailOfPokemon.nickname} ({props.detailOfPokemon.name})</p>
          </div>
          <div>
            <button className="button is-small is-danger is-light">Release</button>
          </div>
        </div>
      </div>
    </Grow>
  )
}