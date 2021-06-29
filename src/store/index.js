import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import pokemonListReducer from './reducers/pokemonReducer';

const rootReducer = combineReducers({
  pokemonListReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
