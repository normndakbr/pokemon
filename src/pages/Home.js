import React from 'react';
import PokeCard from '../components/PokeCard';
import { useQuery } from '@apollo/client';
import { GET_POKEMONLIST } from '../config/queries';
import LoadingPage from './LoadingPage';
import Navi from '../components/Navi';

export default function Home() {
  // Gen-1 { limit: 151, offset: 0 }
  // Gen-2 { limit: 251, offset: 151 }
  // Gen-3 { limit: 386, offset: 251 }
  // Gen-4 { limit: 493, offset: 386 }
  // Gen-5 { limit: 649 , offset: 493 }
  // Gen-6 { limit: 721, offset: 649 }
  // Gen-7 { limit: 809, offset: 721 }
  // Gen-8 { limit: 898, offset: 809 }
  const { data, loading } = useQuery(GET_POKEMONLIST, { variables: { limit: 151, offset: 0}})

  if (loading) {
    return (
      <LoadingPage />
    )
  } else {
    return (
      <div style={{backgroundColor: '#32373e'}} className="container is-fluid is-danger is-light">
        <Navi/>
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

