import React, { useEffect, useState } from 'react';
import { myPokemons } from '../cache';
import MyPokeCard from '../components/MyPokeCard';
import Navi from '../components/Navi';

export default function MyPokemon() {
  let [myPokemonList, setMyPokemonList] = useState([])

  function removePokemon(id) {
    let previousData = myPokemons()
    let x = previousData.findIndex((element, i) => element.id === id)
    let result = previousData.filter(pokemon => pokemon.id !== x)
    myPokemons(result)
    setMyPokemonList(result)
  }

  useEffect(() => {
    console.log("masuk sini")
    let pokemonData = myPokemons()
    setTimeout(() => {
      setMyPokemonList(pokemonData)
    }, 1000)
    console.log(pokemonData)
  }, [myPokemonList])

  return (
    <div style={{ backgroundColor: '#32373e' }} className="container is-fluid is-fullheight">
      <Navi />
      <div className="columns is-multiline is-mobile is-5 is-variable is-centered">
        {
          myPokemonList.map(pokemonData => {
            return (
              <MyPokeCard key={pokemonData.id} detailOfPokemon={pokemonData} setMyPokemonList={setMyPokemonList} removePokemon={removePokemon} />
            )
          })
        }
      </div>
    </div>
  )
}