import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navi() {
  return (
    <div className="my-1 is-flex is-justify-content-space-evenly">
      {/* <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"> */}
        <NavLink to="/">
          <img className="image is-24x24" src={process.env.PUBLIC_URL + '/explore64.png'} alt={'?'} />
          <p>Explore</p>
        </NavLink>
        <NavLink to="/my-pokemon">
          <img className="image is-24x24" src={process.env.PUBLIC_URL + '/bag64.png'} alt={'?'} />
          <p>Bag</p>
        </NavLink>
      {/* </a> */}
    </div>
  )
}