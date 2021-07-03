import React, { useEffect, useState } from 'react';
import { myPokemons } from '../cache';
import MyPokeCard from '../components/MyPokeCard';
import Navi from '../components/Navi';

export default function MyPokemon() {
  let [myPokemonList, setMyPokemonList] = useState([])
  // let pokemonData = myPokemons()
  // setMyPokemonList(pokemonData)

  function removePokemon(id) {
    console.log(id, "masuk sini")
    let previousData = myPokemons()
    // let myPokemonId = previousData.findIndex((element) => element.id === id)
    let result = previousData.filter(pokemon => pokemon.id !== id)
    console.log(result)
    myPokemons(result)
    setMyPokemonList(result)
  }

  useEffect(() => {
    console.log("useEffect jalan")
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