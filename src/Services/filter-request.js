const flagsPerPage = {
    three: 3,
    ten: 10,
  };
  
  export const requestCapital = (capital, setState) => {
    fetch(`https://restcountries.eu/rest/v2/capital/${capital}`)
      .then((response) => response.json())
      .then(setState)
      .catch(console.error);
  };
  
  export const requestRegion = (region, setState, pageLimit) => {
    fetch(`https://restcountries.eu/rest/v2/region/${region}`)
      .then((response) => response.json())
      .then(setState)
      .then(pageLimit(flagsPerPage.ten))
      .catch(console.error);
  };
  
  export const requestLanguage = (lang, setState, pageLimit) => {
    fetch(`https://restcountries.eu/rest/v2/lang/${lang}`)
      .then((response) => response.json())
      .then(setState)
      .then(pageLimit(flagsPerPage.ten))
      .catch(console.error);
  };
  
  export const requestCountry = (country, setState) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
      .then((response) => response.json())
      .then(setState)
      .catch(console.error);
  };
  
  export const requestCallingCode = (code, setState) => {
    fetch(`https://restcountries.eu/rest/v2/callingcode/${code}`)
      .then((response) => response.json())
      .then(setState)
      .catch(console.error);
  };