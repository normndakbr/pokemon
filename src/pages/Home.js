import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemonList } from '../store/actions/pokemonListAction';
import PokeCard from '../components/pokeCard';

export default function Home() {
  const pokemonList = useSelector((state) => state.pokemonListReducer.pokemonList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonList())
  }, [])

  return (
    <div class="container">
      {
        pokemonList.map((pokemon, idx) => {
          return (
            <PokeCard key={idx} detailOfPokemon={pokemon}/>
            // <li key={pokemon.id}>{pokemon.name}</li>
          )
        })
      }
    </div>
  )
}

