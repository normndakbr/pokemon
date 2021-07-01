import React from 'react';
// import { useQuery } from '@apollo/client';
import { myPokemons } from '../cache';
import PokeCard from '../components/PokeCard';
// import { GET_MYPOKEMONLIST } from '../config/queries';

export default function MyPokemon() {
  // const { data, error, loading } = useQuery(GET_MYPOKEMONLIST)

  return (
    <div className="container is-fluid">
      <div className="columns is-multiline is-mobile is-5 is-variable is-centered">
        {
          myPokemons().map(pokemonData => {
            return (
              <PokeCard key={pokemonData.id} detailOfPokemon={pokemonData} />
            )
          })
        }
      </div>
    </div>
  )
}