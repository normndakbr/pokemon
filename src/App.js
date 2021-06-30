import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Home, MyPokemon, PokemonDetail } from './pages';
import { Provider } from 'react-redux';
import store from './store';
import { ApolloProvider } from '@apollo/client';
import client from './config/graphql'

function App() {
  return (
    // <Provider store={store}>
    <ApolloProvider client={client}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/my-pokemon">My Pokemon</NavLink>
        </li>
      </ul>
      <div className="App">
        <Switch>
          <Route path="/my-pokemon">
            <MyPokemon></MyPokemon>
          </Route>
          <Route path="/pokemon-detail/:name">
            <PokemonDetail></PokemonDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </ApolloProvider>
    //</Provider>
  );
}

export default App;
