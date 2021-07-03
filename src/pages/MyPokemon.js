import React, { useEffect, useState } from 'react';
import { myPokemons } from '../cache';
import MyPokeCard from '../components/MyPokeCard';
import Navi from '../components/Navi';

export default function MyPokemon() {
  let [myPokemonList, setMyPokemonList] = useState([])

  function removePokemon(id) {
    console.log(id, "masuk sini")
    let previousData = myPokemons()
    let result = previousData.filter(pokemon => pokemon.id !== id)
    myPokemons(result)
    setMyPokemonList(result)
  }

  useEffect(() => {
    let pokemonData = myPokemons()
    setMyPokemonList(pokemonData)
  }, [myPokemonList])

  return (
    <div style={{ backgroundColor: '#32373e' }} className="container is-fluid is-fullheight">
      <Navi />
      <div className="columns is-multiline is-mobile is-5 is-variable is-centered">
        {
          myPokemonList.map((pokemonData, idx) => {
            return (
              <MyPokeCard key={idx} detailOfPokemon={pokemonData} setMyPokemonList={setMyPokemonList} removePokemon={removePokemon} />
            )
          })
        }
      </div>
    </div>
  )
}