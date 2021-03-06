import React from 'react';
import { useHistory } from 'react-router-dom';

export default function FailedCatchModal(props) {
  const history = useHistory()

  function backToExplore(){
    history.push(`/`);
  }

  return (
    <div className={`modal ${props.showModalFailed.showModalFailed}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Aww it ran away :(</p>
        </header>
        <footer className="modal-card-foot is-flex is-justify-content-center">
          <button onClick={() => {backToExplore()}} className="button">Let it go and back to eksplore</button>
        </footer>
      </div>
    </div>
  )
}