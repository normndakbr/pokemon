import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POKEMONDETAIL } from '../config/queries';
import { CircularProgress } from '@material-ui/core';
import FailedCatchModal from '../components/FailedCatchModal';
import SuccessCatchModal from '../components/SuccessCatchModal';

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
    }, 3000)
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
      <div className="container is-fluid">
        <div className="columns is-mobile is-variable is-centered">
          <div className="column is-9-desktop is-10-mobile is-4-tablet is-centered">
            <div className="card is-centered">
              {/* Header */}
              <header className="card-header is-flex is-justify-content-centered">
                <p className="card-header-title is-capitalized is-centered">
                  #{data.pokemon.id} - {data.pokemon.name}
                </p>
              </header>
              {/* Image */}
              <div className="card-image is-flex is-justify-content-space-around is-align-content-center">
                <figure className="image is-128x128">
                  <img src={data.pokemon.sprites.front_default} alt={'?'} />
                </figure>
                <figure className="image is-128x128">
                  <img src={data.pokemon.sprites.back_default} alt={'?'} />
                </figure>
              </div>
              <button onClick={() => { throwPokeball() }} className="button is-small">Catch!</button>
              <FailedCatchModal showModalFailed={showModalFailed} setShowModalFailed={setShowModalFailed} data={data} />
              <SuccessCatchModal showModalSuccess={showModalSuccess} setShowModalSuccess={setShowModalSuccess} data={data} />
              {/* Types */}
              <div className="tags has-addons is-flex is-justify-content-center">
                <span className="tag is-dark has-text-weight-bold">Types</span>
                {
                  data.pokemon.types.map((type, idx) => {
                    return (
                      <span className="tag is-primary is-capitalized">{data.pokemon.types[idx].type.name}</span>
                    )
                  })
                }
              </div>
              {/* Moves */}
              <div className="table-container">
                <table className="table is-fullwidth is-striped">
                  <thead>
                    <tr> Moves </tr>
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