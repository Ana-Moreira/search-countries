import React, { useState, useEffect, useContext } from 'react';
import flag from '../Context/flag';

import { getCapitals, getLanguages,
  getCountry, getCallingCodes, regions } from '../../Services/api-request';

import { requestCapital, requestRegion,
  requestLanguage, requestCountry,
  requestCallingCode } from '../../Services/filter-request';

import '../../Styles/Filter.css';

function Filter() {
  const filterOptions = ['Região', 'Capital', 'Língua', 'País', 'Código de ligação'];

  const { setAllCountries, setPageLimit, setActualPage } = useContext(flag);

  const [subFilter, setSubfilter] = useState([]);
  const [selectFilter, setSelectFilter] = useState('none');
  const [actualFilter, setActualFilter] = useState('none');

  const handleChange = ({ target }) => {
    setSelectFilter(target.value);
  };

  const chooseFilter = () => {
    if (selectFilter === 'none') return setSubfilter([]);
    if (selectFilter === 'Região') return setSubfilter(regions);
    if (selectFilter === 'Capital') return getCapitals(setSubfilter);
    if (selectFilter === 'Língua') return getLanguages(setSubfilter);
    if (selectFilter === 'País') return getCountry(setSubfilter);
    if (selectFilter === 'Código de ligação') return getCallingCodes(setSubfilter);
  };

  const applyFilter = () => {
    setActualPage(1);
    if (selectFilter === 'none' || actualFilter === 'none') {
      return alert('Você precisa selecionar um filtro');
    }
    if (selectFilter === 'Região') {
      return requestRegion(actualFilter, setAllCountries, setPageLimit);
    }
    if (selectFilter === 'Capital') return requestCapital(actualFilter, setAllCountries);
    if (selectFilter === 'Língua') {
      return requestLanguage(actualFilter, setAllCountries, setPageLimit);
    }
    if (selectFilter === 'País') return requestCountry(actualFilter, setAllCountries);
    if (selectFilter === 'Código de ligação') {
      return requestCallingCode(actualFilter, setAllCountries);
    }
  };

  useEffect(() => {
    chooseFilter();
  }, [selectFilter]);

  return (
    <form className="filterForm">
      <label htmlFor="mainFilter">
        Filtar por
        <select
          placeholder="selecione"
          onChange={ handleChange }
          value={ selectFilter }
        >
          <option value="none">Escolha uma opção</option>
          {filterOptions.map((elem, index) => (
            <option value={ elem } key={ index }>{elem}</option>
          ))}
        </select>
      </label>
      {
        subFilter.length === 0
          ? ''
          : (
            <label htmlFor="subFilter">
              {selectFilter}
              <select
                value={ actualFilter }
                onChange={ ({ target }) => setActualFilter(target.value) }
              >
                <option value="none">
                  {`Escolha por ${selectFilter}`}
                </option>
                {
                  subFilter.map((elem, i) => {
                    if (elem.name !== '') {
                      return (
                        <option
                          key={ `${elem} ${i}` }
                          value={ elem.value }
                        >
                          {elem.name}
                        </option>
                      );
                    }
                    return '';
                  })
                }
              </select>
            </label>
          )
      }
      <button
        type="button"
        onClick={ applyFilter }
      >
        Pesquisar
      </button>
    </form>
  );
}

export default Filter;