import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonList } from '../store/actions/pokemonListAction';
import PokeCard from '../components/pokeCard';
import { gql, useQuery } from '@apollo/client';

const GET_POKEMONLIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        image
        url
      }
    }
  }
`

export default function Home() {
  const { data, error, loading } = useQuery(GET_POKEMONLIST)

  return (
    <div className="container is-fluid">
      <div className="columns is-multiline is-mobile is-5 is-variable is-centered">
        {
          data.pokemons.results.map((pokemon,idx) => {
            return(
              <PokeCard key={idx} detailOfPokemon={pokemon} />
            )
          })
        }
      </div>
    </div>
  )
}

