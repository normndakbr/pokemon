import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  pokemonList: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "SET_POKEMONLIST":
      return{...state, pokemonList: action.pokemonList}
    default: 
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
