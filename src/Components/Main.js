import React, { useContext, useEffect } from 'react';
import flag from '../../Context/flag';

import { getAllCountries } from '../../Services/api-request';

import Image from './Image';

import PageNav from './PageNav';

import '../../Styles/Main.css';
import Filter from './Filter';

function Main() {
  const { allCountries, setAllCountries, pageLimit,
    actualPage, setActualPage, actualPath } = useContext(flag);

  useEffect(() => {
    setActualPage(1);
    if (actualPath !== 'details') {
      getAllCountries(setAllCountries);
    }
  }, []);

  return (
    <main>
      <div className="flag-page">
        <Filter />
        <div className="flags">
          {
            allCountries.map((country, index) => {
              if (index < actualPage * pageLimit
            && index >= actualPage * pageLimit - pageLimit) {
                return <Image country={ country } />;
              }
              return '';
            })
          }
        </div>
      </div>
      <PageNav
        currentPage={ actualPage }
        setCurrentPage={ setActualPage }
        length={ allCountries.length }
        pageLimit={ pageLimit }
      />
    </main>

  );
}

export default Main;