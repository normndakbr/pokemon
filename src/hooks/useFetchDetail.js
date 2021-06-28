import { useState, useEffect } from "react";

function useFetchDetail(url) {
    const [pokemonDetail, setpokemonDetail] = useState([])

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then(data => {
          setListPokemon(data)
        })
        .catch(err => {
          console.log(err)
        })
    }, [url])

    return {
      pokemonDetail,
      setPokemonDetail
    }
}

export default useFetchPokemon;