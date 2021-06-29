import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'

export default function PokeCard(props) {
  // const pokemonList = useSelector(state => state.pokemonList)
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
  }, [])

  return (
    <div class="column is-2-desktop is-10-mobile is-4-tablet  is-centered">
      <div class="card  is-centered">
        <header class="card-header  is-centered">
          <p class="card-header-title is-centered">{props.detailOfPokemon.name}</p>
        </header>
        <div class="card-image">
          <figure class="image">
            <img src={details.front_default}/>
          </figure>
        </div>
      </div>
    </div>
  )
}