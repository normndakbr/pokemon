import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  pokemonList: []
}

function reducer(state = initialState, action) {
  return state
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
