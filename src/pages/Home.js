import React from 'react';
import PokeCard from '../components/PokeCard';
import { useQuery } from '@apollo/client';
import { GET_POKEMONLIST } from '../config/queries';
import { CircularProgress } from '@material-ui/core';
import LoadingPage from './LoadingPage';

export default function Home() {
  // Gen-1 { limit: 151, offset: 0 }
  // Gen-2 { limit: 251, offset: 151 }
  // Gen-3 { limit: 386, offset: 251 }
  // Gen-4 { limit: 493, offset: 386 }
  // Gen-5 { limit: 649 , offset: 493 }
  // Gen-6 { limit: 721, offset: 649 }
  // Gen-7 { limit: 809, offset: 721 }
  // Gen-8 { limit: 898, offset: 809 }
  const { data, loading } = useQuery(GET_POKEMONLIST, { variables: { limit: 721, offset: 649}})

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

