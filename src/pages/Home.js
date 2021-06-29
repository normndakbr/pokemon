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
    <div className="container is-fluid">
      <div className="columns is-multiline is-mobile is-5 is-variable is-centered">
        {
          pokemonList.map((pokemon, idx) => {
            return (
              <PokeCard key={idx} detailOfPokemon={pokemon} />
            )
          })
        }
      </div>
    </div>
  )
}

