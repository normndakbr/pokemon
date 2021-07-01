import React from 'react';
import { useQuery } from '@apollo/client';
import { myPokemons } from '../cache';
import { GET_MYPOKEMONLIST } from '../config/queries';

export default function MyPokemon() {
  const { data, error, loading } = useQuery(GET_MYPOKEMONLIST)

  return (
    <div>
      {JSON.stringify(myPokemons())}
    </div>
  )
}