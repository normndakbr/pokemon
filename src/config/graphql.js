import { ApolloClient, InMemoryCache } from "@apollo/client";
import { myPokemons } from '../cache/'

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          myPokemonsItem: {
            read() {
              return myPokemons
            }
          }
        }
      }
    }
  })
});

export default client