import './App.css';
import React, { useState } from 'react';

export default function App() {
    const [text, setText] = useState("")
    const [pokemonList, setPokemonList] = useState([])

    const handleOnChangeText = (e) => {
        setText(e.target.value)
        console.log(text)
    }

    const addPokemon = (e) => {
        e.preventDefault()
        const newPokemon = pokemonList
        setPokemonList(newPokemon.concat({title: text, id: newPokemon.length+1}))
    }

    return (
        <div className="App">
            Pokemon List
            <form onSubmit={addPokemon}>
                <input type="text" onChange={(e) => { handleOnChangeText(e) }} />
                <input type="submit" />
                <ul>
                    {
                        pokemonList.map(pokemon => {
                            return <li key={pokemon.id}>{pokemon.title}</li>
                        })
                    }
                </ul>
            </form>
        </div>
    );
}