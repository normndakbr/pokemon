import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POKEMONDETAIL } from '../config/queries';

export default function PokemonDetail() {
  const { name } = useParams()
  const { data, error, loading } = useQuery(GET_POKEMONDETAIL, { variables: { name } })

  if (loading) {
    return <h3>Loading Data...</h3>
  } else {
    return (
      <div className="container is-fluid">
        {
          console.log(data.pokemon)
        }
        <div className="columns is-mobile is-variable is-centered">
          <div className="column is-9-desktop is-10-mobile is-4-tablet is-centered">
            <div className="card is-centered">
              <header className="card-header  is-centered">
                <p className="card-header-title is-centered is-capitalized"># {data.pokemon.id} - {data.pokemon.name}</p>
              </header>
              <div className="card-image">
                <figure className="image has-background-grey-lighter is-128x128 is-centered">
                  <img src={data.pokemon.sprites.front_default} />
                </figure>
              </div>
              <h2>Types</h2>
              {
                data.pokemon.types.map((type, idx) => {
                  return (
                    <div className="card-content is-multiline">
                      <div className="content">
                        <button className="button is-warning is-light">{data.pokemon.types[idx].type.name}</button>
                      </div>
                    </div>
                  )
                })
              }
              <h2>Moves</h2>
              {
                data.pokemon.moves.map((move, idx) => {
                  return (
                    <div className="card-content is-multiline">
                      <div className="content">
                        <button className="button is-danger is-light">{data.pokemon.moves[idx].move.name}</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}