import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Home, MyPokemon, PokemonDetail, MyPokemonDetail } from './pages';
import { ApolloProvider } from '@apollo/client';
import client from './config/graphql';

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Navi/> */}
      <div style={{ backgroundColor: '#32373e' }} className="App">
        <Switch>
          <Route path="/my-pokemon-detail/:id">
            <MyPokemonDetail></MyPokemonDetail>
          </Route>
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
  );
}

export default App;
