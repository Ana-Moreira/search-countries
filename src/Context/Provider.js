import React, { useState } from 'react';
import PropTypes from 'prop-types';
import flag from './flag';

const limitItens = 3;

function Provider({ children }) {
  const [allCountries, setAllCountries] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [pageLimit, setPageLimit] = useState(limitItens);
  const [actualPage, setActualPage] = useState(1);
  const [actualPath, setActualPath] = useState('homepage');

  const context = {
    allCountries,
    setAllCountries,
    isFetching,
    setIsFetching,
    pageLimit,
    setPageLimit,
    actualPage,
    setActualPage,
    actualPath,
    setActualPath,
  };

  return (
    <flag.Provider value={ context }>
      {children}
    </flag.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;