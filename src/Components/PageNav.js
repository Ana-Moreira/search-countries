import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


import '../../Styles/PageNav.css';

const initialPages = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
};

function PageNav({ currentPage, setCurrentPage, length, pageLimit }) {
  const [buttons, setButtons] = useState([]);
  const makeButtons = () => {
    const { one, two, three, four, five } = initialPages;
    if (currentPage <= initialPages.three) {
      setButtons([one, two, three, four, five]);
    } else {
      setButtons(
        [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2],
      );
    }
  };

  const handleClick = ({ target }) => {
    const page = Number(target.name);
    setCurrentPage(page);
  };

  useEffect(() => {
    makeButtons();
  }, [currentPage]);

  return (
    <div className="btn-container">
      <button
        type="button"
        className="btn-page left"
        disabled={ currentPage === 1 }
        onClick={ () => setCurrentPage(currentPage - 1) }
      >
        <img src={ ChevronLeftIcon } alt="" />
      </button>
      {
        buttons.map((elem, index) => (
          <button
            name={ elem }
            key={ index }
            className={ `btn-page ${Number(elem) === currentPage}` }
            type="button"
            disabled={ Number(elem) > Math.ceil(length / pageLimit) }
            onClick={ handleClick }
          >
            {elem}
          </button>
        ))
      }
      <button
        type="button"
        className="btn-page right"
        disabled={ currentPage === Math.ceil(length / pageLimit) }
        onClick={ () => setCurrentPage(currentPage + 1) }
      >
        <img src={ ChevronRightIcon } alt="" />
      </button>
    </div>
  );
}

PageNav.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  pageLimit: PropTypes.number.isRequired,
};

export default PageNav;