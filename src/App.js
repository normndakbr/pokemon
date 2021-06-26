import './App.css';
import react from 'react';
import Pokemon from './components/Pokemon';

class App extends react.Component {

    constructor() {
        super()

        this.state = {
            pokemons: [],
            loading: true
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=1&limit=30")
        .then(res => res.json())
        .then( data => {
            console.log(data.results)
            this.setState({
                pokemons: data.results,
                loading: false
            })
        })
    }

    render() {
        const { pokemons, loading } = this.state
        
        if(loading) {
            return <div>Loading...</div>
        }

        return (
            <>
                <h1> Hi There </h1>
                <h3> Here comes more wild Pokemon! </h3>
                <ul>
                    {
                        pokemons.map(pokemon => {
                            return <Pokemon key={pokemon.id} pokemonList={pokemon}/>
                        })
                    }
                </ul>
            </>
        )
    }
}

export default App;