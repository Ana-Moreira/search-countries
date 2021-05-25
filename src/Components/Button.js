import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useHistory } from 'react-router-dom';



import '../../Styles/Button.css';

function ButtonBack() {
  const history = useHistory();
  return (
    <button
      className="buttonBack"
      type="button"
      onClick={ () => { history.push('/'); } }
    >
      <img className="vector" src={ ChevronLeftIcon } alt="vector" />
      <span className="btn-text">Voltar</span>
    </button>
  );
}

export default ButtonBack;