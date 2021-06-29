const initialState = {
  pokemonList: []
}

function pokemonListReducer(state = initialState, action) {
  switch(action.type) {
    case "SET_POKEMONLIST":
      return{...state, pokemonList: action.pokemonList}
    default: 
      return state
  }
}

export default pokemonListReducer