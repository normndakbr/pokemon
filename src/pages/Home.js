import React from 'react';
import PokeCard from '../components/pokeCard';
import { useQuery } from '@apollo/client';
import { GET_POKEMONLIST } from '../config/queries';

export default function Home() {
  const { data, error, loading } = useQuery(GET_POKEMONLIST, { variables: { limit: 50, offset: 0}})

  if (loading) {
    return <h3>Loading Data...</h3>
  } else {
    return (
      <div className="container is-fluid">
        <div className="columns is-multiline is-mobile is-5 is-variable is-centered">
          {
            data.pokemons.results.map(pokemonData => {
              return (
                <PokeCard key={pokemonData.id} detailOfPokemon={pokemonData}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

