import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SuccessCatchModal(props) {
  const history = useHistory()
  const [pokeData, setPokeData] = useState([])

  useEffect(() => {
    async function fetchAnimation() {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.data.pokemon.name}/`)
      response = await response.json()
      setPokeData(response)
    }
    fetchAnimation()
  }, [])

  function backToExplore(){
    history.push(`/`);
  }

  return (
    <div className={`modal p-4 ${props.showModalSuccess.showModalSuccess}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Gotcha! {props.data.pokemon.name} was caught!</p>
        </header>
        <section className="modal-card-body">
          <figure className="image is-128x128 is-centered">
            {
              pokeData.sprites && <img src={pokeData['sprites']['versions']['generation-v']['black-white']['animated']['front_default']} alt={'?'} />
            }
          </figure>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save</button>
          <button onClick={() => {backToExplore()}} className="button">Leave it</button>
        </footer>
      </div>
    </div>
  )
}