import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MYPOKEMONLIST } from '../config/queries';

export default function MyPokemon() {
  const { data, error, loading } = useQuery(GET_MYPOKEMONLIST)

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}