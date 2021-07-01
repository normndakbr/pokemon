import React from 'react';

export default function LoadingPage() {
  return (
    <img className="column is-12-mobile is-12-desktop" src={process.env.PUBLIC_URL + '/pokeball.gif'} alt={'Throwing Pokeball...'} />
  )
}