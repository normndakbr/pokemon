import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { myPokemons } from '../cache';
import { GET_MYPOKEMONLIST } from '../config/queries';
import { Grow } from '@material-ui/core';

export default function SuccessCatchModal(props) {
  const history = useHistory();
  const [checked, setChecked] = useState(true);
  const [nickname, setNickname] = useState();
  const [pokeData, setPokeData] = useState([]);
  const [flavorText, setFlavorText] = useState([]);
  const { data, error, loading } = useQuery(GET_MYPOKEMONLIST);

  useEffect(() => {
    async function fetchAnimation() {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.data.pokemon.name}/`)
      response = await response.json()
      setPokeData(response)
    }
    async function fetchFlavorText() {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.data.pokemon.id}/`)
      response = await response.json()
      setFlavorText(response['flavor_text_entries'][3]['flavor_text'])
    }
    fetchAnimation()
    fetchFlavorText()
  }, [])

  function handleInputChange(e) {
    setNickname(e.target.value)
  }

  function addToMyPokemon() {
    const previousData = myPokemons();
    myPokemons([{
      id: previousData.length + 1,
      pokedexId: props.data.pokemon.id,
      nickname: nickname,
      name: props.data.pokemon.name,
      image: {
        front: pokeData['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
        back: pokeData['sprites']['versions']['generation-v']['black-white']['animated']['back_default']
      },
      flavorText: flavorText,
      moves : props.data.pokemon.moves,
      types : props.data.pokemon.types
    }, ...previousData]);
    console.log(myPokemons());
    history.push('/');
  }

  function backToExplore() {
    history.push(`/`);
  }

  // console.log(flavorText)

  return (
    <Grow in={checked}>
      <div className={`modal p-4 ${props.showModalSuccess.showModalSuccess}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head is-flex is-flex-wrap-wrap">
            <p className="modal-card-title">Gotcha! {props.data.pokemon.name} was caught!</p>
          </header>
          <section className="modal-card-body is-flex is-justify-content-space-around is-align-content-center">
            {
              pokeData.sprites && <img className="image is-128x128" src={pokeData['sprites']['versions']['generation-v']['black-white']['animated']['front_default']} alt={'?'} />
            }
            <div className="field p-5">
              <label className="label">Give it a nickname!</label>
              <div className="control">
                <input onChange={handleInputChange} className="input" type="text" name="nickname" placeholder="Nickname" />
              </div>
            </div>
          </section>
          <footer className="modal-card-foot is-flex is-justify-content-space-around">
            <button onClick={() => { addToMyPokemon() }} disabled={!nickname} className="button is-success">Save</button>
            <button onClick={() => { backToExplore() }} className="button">Leave it</button>
          </footer>
        </div>
      </div>
    </Grow>
  )
}