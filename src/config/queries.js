import { gql } from '@apollo/client'

export const GET_POKEMONLIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        image
        url
      }
    }
  }
`

export const GET_POKEMONDETAIL = gql`
query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    name
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
    sprites{
      back_default
      front_default
    }
  }
}
`

export const GET_MYPOKEMONLIST = gql `
  query getMyPokemonList {
    myPokemonsItem @client
  }
`