import React from 'react';

export default function LoadingPage() {
  return (
    <img style={
      { height: '100%' },
      { backgroundPosition: 'center' },
      { backgroundRepeat: 'no-repeat' },
      { backgroundSize: 'cover' }
    } src={process.env.PUBLIC_URL + '/pokeball.gif'} alt={'Throwing Pokeball...'} />
  )
}