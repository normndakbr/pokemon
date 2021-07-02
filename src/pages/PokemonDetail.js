import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POKEMONDETAIL } from '../config/queries';
import { CircularProgress } from '@material-ui/core';
import FailedCatchModal from '../components/FailedCatchModal';
import SuccessCatchModal from '../components/SuccessCatchModal';
import Navi from '../components/Navi';

export default function PokemonDetail() {
  const { name } = useParams()
  let [showModalSuccess, setShowModalSuccess] = useState('')
  let [showModalFailed, setShowModalFailed] = useState('')
  let [catching, setCatching] = useState(false)
  const { data, loading } = useQuery(GET_POKEMONDETAIL, { variables: { name } })

  function throwPokeball() {
    let message = "";
    const successRate = Math.floor(Math.random() * 2);

    setCatching(true)
    setTimeout(() => {
      if (successRate === 0) {
        message = "Aww it ran away :("
        setShowModalFailed({
          showModalFailed: "is-active"
        })
        console.log(message)
        setCatching(false)
      } else {
        message = `Gotcha! ${data.pokemon.name} was caught!`
        setShowModalSuccess({
          showModalSuccess: "is-active"
        })
        console.log(message)
        setCatching(false)
      }
    }, 2000)
  }

  if (loading) {
    return <CircularProgress />
  }
  else if (catching) {
    return (
      <>
        <div className="card-image is-flex is-justify-content-space-around is-align-content-center">
          <figure className="image ">
            <img src={process.env.PUBLIC_URL + '/pokeball.gif'} alt={'Throwing Pokeball...'} />
          </figure>
        </div>=
      </>
    )
  } else {
    return (
      <div style={{ backgroundColor: '#32373e' }} className="container is-fluid">
        <Navi />
        <div className="columns is-mobile is-variable is-centered">
          <div className="column is-9-desktop is-10-mobile is-4-tablet is-centered">
            <div style={{ backgroundColor: '#27292b' }} className="card is-centered">
              {/* Header 808184 f2b25c*/}
              <header style={{ backgroundColor: '#f2b25c' }} className="card-header is-flex is-justify-content-centered">
                <p style={{ letterSpacing: '2px' }} className="card-header-title is-uppercase is-centered">
                  #{data.pokemon.id} - {data.pokemon.name}
                </p>
              </header>
              {/* Image */}
              <div className="card-image is-flex is-justify-content-center is-align-content-center">
                <img className="image is-fullwidth" src={data.pokemon.sprites.front_default} alt={'?'} />
              </div>
              <FailedCatchModal showModalFailed={showModalFailed} setShowModalFailed={setShowModalFailed} data={data} />
              <SuccessCatchModal showModalSuccess={showModalSuccess} setShowModalSuccess={setShowModalSuccess} data={data} />
              {/* Types */}
              <div className="m-3 tags has-addons is-flex is-justify-content-space-evenly">
                {/* <span className="tag is-dark has-text-weight-bold">Types</span> */}
                {
                  data.pokemon.types.map((type, idx) => {
                    const color = data.pokemon.types[idx].type.name === 'dragon' ? '#6F35FC' :
                      data.pokemon.types[idx].type.name === 'flying' ? '#A98FF3' :
                        data.pokemon.types[idx].type.name === 'poison' ? '#A33EA1' :
                          data.pokemon.types[idx].type.name === 'grass' ? '#7AC74C' :
                            data.pokemon.types[idx].type.name === 'fire' ? '#EE8130' :
                              data.pokemon.types[idx].type.name === 'water' ? '#6390F0' :
                                data.pokemon.types[idx].type.name === 'bug' ? '#A6B91A' :
                                  data.pokemon.types[idx].type.name === 'electric' ? '#F7D02C' :
                                    data.pokemon.types[idx].type.name === 'ground' ? '#E2BF65' :
                                      data.pokemon.types[idx].type.name === 'psychic' ? '#F95587' :
                                        data.pokemon.types[idx].type.name === 'normal' ? '#A8A77A' :
                                          data.pokemon.types[idx].type.name === 'fairy' ? '#D685AD' :
                                            data.pokemon.types[idx].type.name === 'fighting' ? '#C22E28' :
                                              data.pokemon.types[idx].type.name === 'rock' ? '#B6A136' :
                                                data.pokemon.types[idx].type.name === 'ghost' ? '#735797' :
                                                  data.pokemon.types[idx].type.name === 'ice' ? '#96D9D6' :
                                                    data.pokemon.types[idx].type.name === 'steel' ? '#B7B7CE' : ''
                    return (
                      <button style={{ backgroundColor: `${color}` }} className="button is-rounded  is-capitalized has-text-weight-bold">{data.pokemon.types[idx].type.name}</button>
                    )
                  })
                }
              </div>
              <div className="py-4 px-6">
                <button style={{ letterSpacing: '4px' }} onClick={() => { throwPokeball() }} className="button p-3 is-info is-fullwidth has-text-weight-bold is-flex is-justify-content-space-around">
                  <img className="image is-32x32" src={process.env.PUBLIC_URL + '/catch64.png'} alt={'?'} />
                  <p>Catch!</p>
                </button>
              </div>
              {/* Moves */}
              <div className="table-container p-5">
                <table style={{ overflowX: 'scroll' }} className="table is-fullwidth is-striped">
                  <thead>
                    <th> Moves </th>
                  </thead>
                  <tbody>
                    {
                      data.pokemon.moves.map((move, idx) => {
                        return (
                          <tr>
                            {data.pokemon.moves[idx].move.name}
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}