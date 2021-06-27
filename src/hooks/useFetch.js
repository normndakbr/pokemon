import { useState, useEffect } from "react";

function useFetch() {
    const [pokeData, setPokedata] = useState([])

    useEffect(() => {
      //fetch pokemon data from number 1 to 20
      fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
        .then((res) => res.json())
        .then(data => {
          setPokedata(data.results)
        })
        .catch(err => {
          console.log(err)
        })
    }, [])

    return {
      data: pokeData,
      setData: setPokedata
    }
}

export default useFetch;