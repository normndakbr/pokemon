import React from 'react';

export default function LoadingPage() {
  return (
    <section style={{backgroundColor: '#f3fdff'}} className="hero is-fullheight" >
      <div className="hero-body">
        <div className="">
          <img className="column is-12-mobile is-12-desktop" src={process.env.PUBLIC_URL + '/pokeball.gif'} alt={'Throwing Pokeball...'} />
          <h1 className="is-size-2 has-text-weight-bold">Loading...</h1>
        </div>
      </div>
    </section >
  )
}