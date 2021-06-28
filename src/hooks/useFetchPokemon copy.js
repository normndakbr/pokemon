import { useState, useEffect } from "react";

function useFetchPokemon(url) {
    const [listPokemon, setListPokemon] = useState([])

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then(data => {
          setListPokemon(data.results)
        })
        .catch(err => {
          console.log(err)
        })
    }, [url])

    return {
      listPokemon,
      setListPokemon
    }
}

export default useFetchPokemon;