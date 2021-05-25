import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import '../../Styles/Details.css';
import flag from '../Context/flag';
import { requestRegion } from '../../Services/filter-request';

function Details({ country }) {
  const { setActualPath, setAllCountries, setPageLimit } = useContext(flag);
  const { flag, name, population, region, subregion, capital, languages } = country;
  return (
    <div className="details-card">
      <img src={ flag } alt={ `flag of ${name}` } />
      <div className="info">
        <p>{`Nome: ${name}`}</p>
        <p>{`Capital: ${capital}`}</p>
        <p>
          Região:
          {' '}
          <Link
            to="/"
            onClick={ () => {
              setActualPath('details');
              requestRegion(region, setAllCountries, setPageLimit);
            } }
          >
            {region}
          </Link>

        </p>
        <p>{`Sub-região: ${subregion}`}</p>
        <p>{`População: ${population}`}</p>
        <ul>
          Língua(s):
          {languages.map(
            (language) => <li key={ language.iso639_1 }>{language.name}</li>,
          )}
        </ul>
      </div>
    </div>
  );
}

DetailsCard.propTypes = {
  country: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Details;