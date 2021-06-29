export const fetchPokemonList = () => {
  return (dispatch, getState) => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: "SET_POKEMONLIST",
        pokemonList: data.results
      })
    }) 
    .catch(err => {
      console.log(err);
    })
  }
}