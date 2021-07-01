import React from 'react';
import PokeCard from '../components/PokeCard';
import { useQuery } from '@apollo/client';
import { GET_POKEMONLIST } from '../config/queries';
import { CircularProgress } from '@material-ui/core';
import LoadingPage from './LoadingPage';

export default function Home() {
  // Kanto { limit: 151, offset: 0}
  // Johto { limit: 235, offset: 151}
  const { data, loading } = useQuery(GET_POKEMONLIST, { variables: { limit: 235, offset: 151}})

  if (loading) {
    return (
      <LoadingPage />
      // <CircularProgress/>
    )
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

