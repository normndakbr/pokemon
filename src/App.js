import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Home, MyPokemon, PokemonDetail } from './pages';
import Pokemon from './components/Pokemon'

function App() {
  return (
    <>
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
          <Route path="/pokemon-detail">
            <PokemonDetail></PokemonDetail>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
