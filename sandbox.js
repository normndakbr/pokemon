const { createStore } = require('redux');

//state initialization
const initialState = { 
  weight: 1,
  name: "Bulbasaur"
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT":
      let clonedState = {...state}
      clonedState.weight = state.weight+1
      return clonedState
  }
}

//Store initialization
const store = createStore(reducer)

console.log(store.getState(), "This is first state")
store.dispatch({type: "INCREMENT"})
console.log(store.getState(), "Updated State")
store.dispatch({type: "INCREMENT"})
console.log(store.getState(), "Updated State")
store.dispatch({type: "INCREMENT"})
console.log(store.getState(), "Updated State")
store.dispatch({type: "INCREMENT"})
console.log(store.getState(), "Updated State")