import React from 'react';
import { myPokemons } from '../cache';
import MyPokeCard from '../components/MyPokeCard';
import Navi from '../components/Navi';

export default function MyPokemon() {
  return (
    <div style={{backgroundColor: '#32373e'}} className="container is-fluid is-fullheight">
      <Navi/>
      <div className="columns is-multiline is-mobile is-5 is-variable is-centered">
        {
          myPokemons().map(pokemonData => {
            return (
              <MyPokeCard key={pokemonData.id} detailOfPokemon={pokemonData} />
            )
          })
        }
      </div>
    </div>
  )
}