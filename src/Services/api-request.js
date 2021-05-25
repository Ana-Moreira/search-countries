export const getAllCountries = (setState) => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then(setState)
      .catch(alert);
  };
  
  export const regions = [
    { name: 'Africa', value: 'Africa' },
    { name: 'Americas', value: 'Americas' },
    { name: 'Europe', value: 'Europe' },
    { name: 'Asia', value: 'Asia' },
    { name: 'Oceania', value: 'Oceania' },
  ];
  
  export const getCapitals = (setState) => {
    fetch('https://restcountries.eu/rest/v2/all?fields=capital;')
      .then((response) => response.json())
      .then((data) => data.map((elem) => elem.capital).sort())
      .then((data) => data.map((elem) => ({ name: elem, value: elem })))
      .then(setState);
  };
  
  export const getLanguages = (setState) => {
    fetch('https://restcountries.eu/rest/v2/all?fields=languages;')
      .then((response) => response.json())
      .then((data) => data.map((elem) => elem.languages))
      .then((data) => {
        const languageArray = [];
        data.forEach((elem) => {
          elem.forEach((lang) => {
            if (!languageArray.some((e) => e === lang)) {
              languageArray.push({ name: lang.name, value: lang.iso639_1 });
            }
          });
        });
        return languageArray.sort();
      })
      .then(setState);
  };
  
  export const getCountry = (setState) => {
    fetch('https://restcountries.eu/rest/v2/all?fields=name')
      .then((response) => response.json())
      .then((data) => data.map((elem) => ({ name: elem.name, value: elem.name })))
      .then(setState);
  };
  
  export const getCallingCodes = (setState) => {
    fetch('https://restcountries.eu/rest/v2/all?fields=callingCodes;')
      .then((response) => response.json())
      .then((data) => data.map((elem) => elem.callingCodes))
      .then((data) => {
        const callingCodesArray = [];
        data.forEach((elem) => {
          elem.forEach((code) => {
            if (!callingCodesArray.some((e) => e.name === Number(code))) {
              callingCodesArray.push({ name: Number(code), value: Number(code) });
            }
          });
        });
  
        return callingCodesArray.filter(
          (elem) => !Number.isNaN(elem.name),
        )
          .sort((a, b) => a.name - b.name);
      })
      .then(setState);
  };