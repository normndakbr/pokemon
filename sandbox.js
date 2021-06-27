const { createStore } = require('redux');

const initialState = { 
  id: 1,
  name: "Bulbasaur"
}

function reducer(state, action) {
  if(state === undefined) {
    return initialState
  } else {

  }
}

const store = createStore(reducer)

console.log(store.getState(), "This is the first store")